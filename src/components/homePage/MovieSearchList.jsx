import MovieSearchListItem from "./MovieSearchListItem"

export default function MovieSearchList({items}) {
    return(
        <div className="flex flex-col rounded-3xl bg-black/40 max-h-[300px] overflow-y-scroll backdrop-blur divide-y divide-solid divide-black/50">
            {
                items.map((item) => {
                    return <MovieSearchListItem item={ item }/>
                })
            }
        </div>
    )
}