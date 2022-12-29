import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
    return signInWithPopup(auth, provider).catch((error) => {
        console.log(error);
    });
}

export function logout() {
    signOut(auth).catch((error) => {
        console.log(error);
    })
}

export function onUserStateChanged(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null; //로그인 => 어드민인지 확인 
        callback(updatedUser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const admins = snapshot.val();
                const isAdmin = admins.includes(user.uid); //포함되어있으면 true 아니면 false
                return { ...user, isAdmin };
            }
            return user;
        }
        ).catch((error) => {
            console.error(error);
        }
        );
}

export async function getProducts() {
    return get(ref(database, 'products'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return Object.values(snapshot.val()); //KEY제외하고 VALUES만 가져옴
            }
            return [];
        }
        ).catch((error) => {
            console.error(error);
        });
}




export async function EnrollItem(product, imageURL) {
    const id = uuid();
    return set(ref(database, `products/${id}`), {
        ...product,
        id,
        price: parseInt(product.price),
        image: imageURL,
        option: product.option.split(','),
    })
}