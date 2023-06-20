import { FaPlay}  from 'react-icons/fa';

export default function HorizontalRowCard({item}) {
    return(
        <a href={ "/detail/" + item._id } className="cursor-pointer snap-start">
            <div className="group relative h-44 w-[281px] my-2 hover:outline-offset-0 hover:outline-2 transform-all transition duration-300 hover:scale-105 hover:outline-white hover:outline rounded-3xl flex flex-row items-end">
                <div className="absolute bottom-0 left-0 z-30 font-apple font-bold overflow-hidden opacity-80 rounded-3xl flex flex-col items-start text-left">
                    <p className='p-5'>{ item.title }</p>

                </div>
                <div className="absolute center z-30 group-hover:flex h-full w-full hidden justify-center items-center">
                    <FaPlay className="text-3xl"/>
                </div>
                <img alt="" className="rounded-3xl w-full h-full object-cover object-center brightness-50 z-20" src={item.coverArt}></img>
                
            </div>
        </a>
    )
}