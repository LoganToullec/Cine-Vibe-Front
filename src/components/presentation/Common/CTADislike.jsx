import { AiFillDislike }  from 'react-icons/ai';

export default function CTADislike({movieRef}) {

    return(
        <div className="w-full cursor-pointer flex flex-row justify-center transition gap-8 items-center bg-white/10 backdrop-blur-lg p-3 py-14 rounded-xl hover:bg-red-600">
            <AiFillDislike className="text-4xl"/>
        </div>
    )
    
}