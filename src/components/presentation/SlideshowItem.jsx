export default function SlideshowItem({Item}) {
    return (
        <div class="w-4/6 h-1/2 bg-white bg-cover bg-center shadow-md dark:bg-gray-800 dark:border-gray-700"
            style={{ backgroundImage:'url("'+ Item.url + '")'}}
            >
                                
            </div>
    )
}