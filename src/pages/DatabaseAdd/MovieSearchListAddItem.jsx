export default function MovieSearchListAddItem({ item, elements, setElements }) {

    return (
            <div className="w-full flex flex-row p-3" onClick={ () => { setElements(item)} }>
                {
                    item.coverArt !== undefined ?
                    <img className="w-12 h-12 object-center object-cover rounded-xl" src={ item.coverArt } alt=""/>
                    :
                    <></>

                }                
                <div className="flex flex-col items-start justify-center pl-3">
                    <p className="text-start font-apple font-bold text-xl text-white overflow-clip max-w-[200px] max-h-[30px]">{ item.title }</p>
                    {
                        item.coverArt !== undefined ?
                        <></>
                        :
                        <p className="text-start font-apple font-bold text-xl text-white overflow-clip max-w-[200px] max-h-[30px]">{ item.elements?.length } elements</p>
                    }
                </div>
            </div>        
    )
}