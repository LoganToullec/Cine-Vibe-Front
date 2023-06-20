import { FaPlay}  from 'react-icons/fa';
import FeatureTag from '../Common/FeatureTag';
import PrLevelTag from '../Common/PrLevelTag';

export default function TrendingRowCard({item}) {

    var duration = Number(item.duration)
    var time = ""
    var quo = Math.floor(duration/60);
    var rem = duration%60;
    quo > 0 ? time += ("" + quo + "h") : console.log()
    time += (" " + rem + "min")
    console.log(time)
    

    return(
        <a href={ "/detail/" + item._id }  className="cursor-pointer snap-start">
        <div className="group relative h-96 min-w-[650px] my-2 hover:outline-offset-0 hover:outline-2 hover:outline-white hover:outline rounded-3xl flex flex-row items-end transform-all transition duration-300 hover:scale-[1.02]">
            <div className="absolute bottom-0 left-0 z-40 font-apple font-bold overflow-hidden opacity-80 rounded-3xl flex flex-col items-start">
                <p className='px-5 text-4xl'>{item.title}</p>
                <div className='flex flex-row gap-4 px-5 pb-8 pt-4 items-center justify-start'>
                    <p className="font-medium">{item.year}</p>
                    <PrLevelTag prLevel={"TP"} color={"#009900"}/>
                    <p className="font-medium">{time}</p>
                    <FeatureTag name="4K"/>
                    <FeatureTag name="Dolby"/>
                </div>
            </div>
            <div className="absolute center z-40 group-hover:flex h-full w-full hidden justify-center items-center">
                <FaPlay className="text-3xl"/>
            </div>
            <img alt="" className="rounded-3xl w-full h-full object-cover object-center brightness-50 z-30" src={item.coverArt}></img>
            
        </div>
        </a>
    )
}