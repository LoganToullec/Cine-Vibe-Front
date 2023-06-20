import { LogoShortOrange } from "../../img/brand"
import { AppleTv, DisneyPlus, MyCanal, Netflix, ParamountPlus, PrimeVideo } from "../../img/companies"


export default function NavBar() {
    return (
        <div class="flex hidden flex-col fixed items-center w-16 h-screen py-8 gap-5 bg-zinc-900 dark:bg-gray-900 dark:border-gray-700">
            <a href="#" class="pb-4">
                <img class="w-auto h-8" src={LogoShortOrange} alt=""></img>
            </a>
    
            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={AppleTv} alt=""></img>
            </a>
    
            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={DisneyPlus} alt=""></img>
            </a>
    
            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={MyCanal} alt=""></img>
            </a>
    
            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={Netflix} alt=""></img>
            </a>
    
            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={ParamountPlus} alt=""></img>
            </a>

            <a href="#" class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-xl dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-orange-400">
                <img class="w-10 h-10 object-cover rounded-xl" src={PrimeVideo} alt=""></img>
            </a>
        </div>

    )
}