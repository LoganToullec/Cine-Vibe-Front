import { FaPlay}  from 'react-icons/fa';

export default function VerticalRowCard({item}) {
    return(
        <a href={ "/detail/" + item._id }  className="cursor-pointer snap-start">
            <div className="group relative h-72 min-w-[196px] my-2 hover:outline-offset-0 hover:outline-2 hover:outline-white hover:outline rounded-3xl flex flex-row items-end transform-all transition duration-300 hover:scale-[1.03]">
                <div className="absolute bottom-0 left-0 z-40 font-apple font-bold overflow-hidden opacity-80 rounded-3xl flex flex-col items-start text-left">
                    <p className='p-5'>{item.title}</p>
                </div>
                <div className="absolute center z-40 group-hover:flex h-full w-full hidden justify-center items-center">
                    <FaPlay className="text-3xl"/>
                </div>
                <img alt="" className="rounded-3xl w-full h-full object-cover object-center brightness-50 z-30" src={item.verticalPoster}></img>
                
            </div>
        </a>
    )
}