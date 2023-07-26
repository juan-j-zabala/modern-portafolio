import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social flex justify-end items-center flex-col p-4'>
        <div className='w-10 h-10 rounded-[50%] bg-skin-white-color my-1 mx-0 border-lightGray-color flex justify-center items-center transition-all ease-in-out duration-300 
        3xl:w-[70px] 3xl:h-[70px] 3xl:my-2 3xl:mx-0'>
            <BsTwitter className='w-4 h-4 text-skin-gray-color hover:bg-skin-secondary-color hover:border-secondary-color [&>svg]:text-skin-white-color 3xl:w-[30px] 3xl:h-[30px] '/>
        </div>
        <div className='w-10 h-10 rounded-[50%] bg-skin-white-color my-1 mx-0 border-lightGray-color flex justify-center items-center transition-all ease-in-out duration-300 
        3xl:w-[70px] 3xl:h-[70px] 3xl:my-2 3xl:mx-0'>
            <FaFacebookF className='w-4 h-4 text-skin-gray-color hover:bg-skin-secondary-color hover:border-secondary-color [&>svg]:text-skin-white-color 3xl:w-[30px] 3xl:h-[30px] '/>
        </div>
        <div className='w-10 h-10 rounded-[50%] bg-skin-white-color my-1 mx-0 border-lightGray-color flex justify-center items-center transition-all ease-in-out duration-300 
        3xl:w-[70px] 3xl:h-[70px] 3xl:my-2 3xl:mx-0'>
            <BsInstagram className='w-4 h-4 text-skin-gray-color hover:bg-skin-secondary-color hover:border-secondary-color [&>svg]:text-skin-white-color 3xl:w-[30px] 3xl:h-[30px] '/>
        </div>
    </div>
  )
}

export default SocialMedia