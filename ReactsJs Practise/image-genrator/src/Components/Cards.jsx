import React, { useState } from 'react'
import "../style/style.scss"
// import images from "../image.json"

function Cards() {
    const [image, setImage] = useState([])

    const imageGenrator = () => {
        const newImages = {
            id: Date.now(),
            url: `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`
        }
        setImage([newImages, ...image])
    }

    const deleteImage = (id) => {
        setImage(image.filter((img) => img.id !== id));
    };


    return (
        <>
            <div className=''>
                <h1 className='h1 pt-5'>🖼️ Image Generator App</h1>
                <div className='d-flex justify-content-center pt-4'>

                <button onClick={imageGenrator} className='btn btn-primary'>Generate Image</button>
                </div>

                <div className='' >
                    {image.map((img) => (
                        <div key={img.id} className='card m-5'>
                            <img src={img.url} alt="Generated" className='card-img-top' />
                            <br />
                            <button onClick={() => deleteImage(img.id)} className='btn btn-primary'>
                                Delete ❌
                            </button>
                        </div>
                    ))} 
                </div>
            </div>
        </>
    )
}

export default Cards
