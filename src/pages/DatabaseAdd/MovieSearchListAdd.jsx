import MovieSearchListAddItem from "./MovieSearchListAddItem"

export default function MovieSearchListAdd({items, elements, setElements}) {
    return(
        <div className="flex flex-col rounded-3xl bg-black/40 max-h-[300px] overflow-y-scroll backdrop-blur divide-y divide-solid divide-black/50">
            {
                items.map((item) => {
                    return <MovieSearchListAddItem item={ item } elements={ elements } setElements={ setElements }/>
                })
            }
        </div>
    )
}