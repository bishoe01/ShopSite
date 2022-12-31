import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import '../App.scss';
import Button from '../components/ui/Button';
import { Navigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
function NewProducts(props) {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState();
    
    const {addProduct} = useProducts();

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
        setIsUploading(true);
        //제품 사진 Cloudinary에 업로드 하기 URL 획득
        //Firebase에 제품 정보 저장하기
        uploadImage(file)
            .then((url) => {
                addProduct.mutate({product, url}, {onSuccess : () => {
                    setSuccess('제품이 등록되었습니다.');
                    setTimeout(() => {
                        setSuccess();
                    }, 4000);
                },
            },
            );
            })
            .finally(() => setIsUploading(false));
        <Navigate to={'/'} replace />;
    }

    return (
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
            {success && <p className='my-2'>✅{success}</p>}
            {file && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(file)} alt="local file" />}
            <form className='flex flex-col px-12' onSubmit={handleSubmit}>
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
                <Button
                    text={isUploading ? 'Uploading...' : '제품 등록하기'}
                    disabled={isUploading} />
            </form>
        </section>

    );
}

export default NewProducts;