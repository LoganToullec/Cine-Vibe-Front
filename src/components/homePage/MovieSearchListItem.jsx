export default function MovieSearchListItem({ item }) {
    return (
        <a href={"/detail/" + item._id}>
            <div className="w-full flex flex-row p-3">
                <img className="w-12 aspect-12/16 object-center object-cover rounded-xl" src={ item.verticalPoster } alt=""/>
                <div className="flex flex-col items-start justify-center pl-3">
                    <p className="text-start font-apple font-bold text-xl text-white overflow-clip max-w-[200px] max-h-[30px]">{ item.title }</p>                </div>
            </div>
        </a>
        
    )
}