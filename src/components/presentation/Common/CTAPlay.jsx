import { FaPlay}  from 'react-icons/fa';

export default function CTAPlay({contentId, itemId}) {

    return(
        <a href={"/play/" + contentId} className="w-full cursor-pointer transition flex flex-row gap-8 justify-center items-center bg-green-600 hover:bg-green-800 p-3 py-14 rounded-xl z-[100]">
            <FaPlay className="text-4xl"/>
        </a>
    )
    
}