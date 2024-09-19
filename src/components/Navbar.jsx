import { Link, Outlet } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav class="min-h-20 flex items-center justify-center bg-gradient-to-tr from-emerald-50 to-lime-50 border-gray-200 dark:bg-gray-900">
                <div class="w-2/5 items-start justify-center ">
                    <Link to="/" class="flex items-baseline justify-center space-x-3 rtl:space-x-reverse minus:ml-5 sm:ml-16">
                        <img src="src/assets/image/newlogo.png" alt="Flowbite Logo" class="w-28 h-28" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:mr-16 md:hidden mt-10 mr-4 laptop:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="w-3/5 items-center justify-center minus:hidden sm:hidden md:block md:w-max" id="navbar-default">
                    <ul class="flex items-center mx-60 justify-around md: bg-transparent  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" class="block rounded bg-emerald-950 text-white pt-2 pb-2 pl-1 pr-1 hover:text-white md:text-white md:p-1 dark:text-white md:dark:text-white hover:text-white-100" aria-current="page">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/moi" class="block  text-emerald-950 rounded hover:bg-blanclune-100 hover:text-emerald-400 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-teal-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A propos de moi</Link>
                        </li>
                        <li>
                            <Link to="/Cv" class="block  text-emerald-950 rounded hover:bg-blanclune-100 hover:text-emerald-400 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-teal-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CV</Link>
                        </li>
                        <li>
                            <Link to="/Projet" class="block text-emerald-950 rounded hover:bg-blanclune-100 hover:text-emerald-400 md:border-0 md:hover:text-gray-700 md:pt-1 pb-1 pl-2 pr-2 dark:text-white md:dark:hover:text-teal-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projet</Link>
                        </li>
                    </ul>
                </div>

            </nav>

            <Outlet />

        </>
    )
}

export default Navbar;