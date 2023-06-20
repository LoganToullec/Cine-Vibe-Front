import VerticalRowCard from "./VerticalRowCard"

export default function VerticalRow({items, title}) {
    return(
        <div className="flex flex-col items-start text-white mt-10 bg-cover bg-center " style={{backgroundImage: "url('"+ items[0].coverArt +"')"}}>
            <div className="backdrop-blur flex flex-col items-start w-full h-full  backdrop-brightness-75">
            <div className="w-full h-full bg-gradient-to-t from-[#09161d] via-transparent to-[#09161d] absolute z-10"></div>
                <p className="px-28 font-apple font-bold text-3xl pt-10 z-20">{title}</p>
                <div className="flex flex-row gap-14 w-screen overflow-auto scrollbar-hide px-28 pb-10 z-20 snap-x scroll-p-28">
                    {
                        items?.map((item) => {
                            return(<VerticalRowCard key={item._id} item={item} />)
                        })
                    }
                </div>
            </div>

        </div>
        
    )
}