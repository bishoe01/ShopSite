import React, {useState } from 'react';
import { enrollProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import '../App.scss';
import Button from '../components/ui/Button';
function NewProducts(props) {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') { //input의 종류가 name이었음, 그것이 file일때
            setFile(files && files[0]);
            return;
        }
        setProduct((product) => ({ ...product, [name]: value }));
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //제품 사진 Cloudinary에 업로드 하기 URL 획득
        //Firebase에 제품 정보 저장하기
        uploadImage(file)
            .then((url) => {
                console.log(url);
            })

    }

    return (
        <section>
            {file && <img src={URL.createObjectURL(file)} alt="local file" />}
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept='image/*'
                    name="file"
                    required
                    onChange={handleChange} />
                <input
                    type="text"
                    name='title'
                    value={product.title ?? ''}
                    placeholder='제품명'
                    required
                    onChange={handleChange} />
                <input
                    type="number"
                    name='price'
                    value={product.price ?? ''}
                    placeholder='가격'
                    required
                    onChange={handleChange} />
                <input
                    type="text"
                    name="category"
                    value={product.category ?? ''}
                    placeholder='카테고리'
                    required
                    onChange={handleChange} />
                <input
                    type="text"
                    name="description"
                    value={product.description ?? ''}
                    placeholder='제품 설명'
                    required
                    onChange={handleChange} />
                <input
                    type="text"
                    name="option"
                    value={product.option ?? ''}
                    placeholder='옵션들 콤마(,)로 구분'
                    required
                    onChange={handleChange} />
                <Button text={'등록'} />
            </form>
        </section>

    );
}

export default NewProducts;