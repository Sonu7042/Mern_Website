import React from 'react'
import { CgClose } from "react-icons/cg";

const DisplayImage = ({ imgUrl, onClose }) => {
    return (
        <div className=' fixed bottom-0 right-0 left-0 top-0 flex justify-center items-center'>
            <div className='bg-white shadow-lg max-w-5xl max-auto p-4'>

                <div className=' w-fit ml-auto text-2xl hover:text-red-500  cursor-pointer' onClick={onClose}>
                <CgClose />
                </div>


                <div className=' flex justify-center p-4 max-w-[80vh]'>
                    <img src={imgUrl} alt="Image" className='w-full h-full' />
                </div>

            </div>



        </div>

    )
}

export default DisplayImage