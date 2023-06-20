import { AiFillLike }  from 'react-icons/ai';

export default function CTALike({movieRef}) {

    return(
        <div className="w-full cursor-pointer flex flex-row transition gap-8 justify-center items-center bg-white/10 backdrop-blur-lg hover:bg-green-600 p-3 py-14 rounded-xl">
            <AiFillLike className="text-4xl"/>
        </div>
    )
    
}