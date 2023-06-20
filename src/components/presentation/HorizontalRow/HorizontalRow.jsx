import HorizontalRowCard from "./HorizontalRowCard"

export default function HorizontalRow({items, title}) {
    return(
        <div className="flex flex-col items-start text-white pt-10">
            <p className="px-28 font-apple font-bold text-3xl">{title}</p>
            <div className="flex flex-row gap-14 w-screen overflow-auto scrollbar-hide px-28 snap-x scroll-p-28">
                {
                    items?.map((item) => {
                        return(<HorizontalRowCard key={item._id} item={item} />)
                    })
                }
            </div>
        </div>
        
    )
}