import { Outlet, Link } from "react-router-dom";




function Navbar() {


    return (
        <>
            <nav class="bg-white-100 border-gray-200 dark:bg-gray-900 drop-shadow-2xl">
                <div class="max-w-screen-xl flex flex-wrap justify-between mx-0 minus:items-baseline sm:items-baseline">
                    <a href="#" class="flex ml-28 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mt-5 h-8" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden mr-28 laptop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="minus:hidden sm:hidden md:block md:w-max" id="navbar-default">
                        <ul class="font-medium flex flex-row justify-end p-4 mr-5 laptop:w-max laptop:gap-8 md: bg-transparent mb-5 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" class="block size-max py-2 px-3 text-white rounded md:bg-blue-700 md:text-white md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:text-white hover:text-white" aria-current="page">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/moi" class="block py-2 px-3 text-gray-950 rounded hover:bg-blue-100 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A propos de moi</Link>
                            </li>
                            <li>
                                <Link to="/Cv" class="block py-2 px-3 text-gray-950 rounded hover:bg-blue-100 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CV</Link>
                            </li>
                            <li>
                                <Link to="/Projet" class="block py-2 px-3 text-gray-950 rounded hover:bg-blue-100 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projet</Link>
                            </li>
                            <li>
                                <Link to="/Contact" class="block py-2 px-3 text-gray-950 rounded hover:bg-blue-100 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    )
}

export default Navbar;