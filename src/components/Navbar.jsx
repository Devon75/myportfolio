import { Link, Outlet } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav class="min-h-20 flex items-center justify-center bg-gradient-to-tr from-emerald-50 to-lime-50 border-solid border-b-2 border-emerald-950 drop-shadow-2xl">
                <div class="w-2/5 items-start justify-center ">
                    <Link to="/" class="flex items-baseline justify-center space-x-3 rtl:space-x-reverse minus:ml-5 sm:ml-16">
                        <img src="src/assets/image/newlogo.png" alt="Flowbite Logo" class="w-16 h-16" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-500 rounded-lg sm:mr-16 md:hidden mt-10 mr-4 laptop:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:text-emerald-400 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="w-3/5 items-center justify-center minus:hidden sm:hidden md:block md:w-max" id="navbar-default">
                    <ul class="flex items-center mx-60 justify-evenly md: bg-transparent  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark:bg-transparent md:dark:bg-transparent dark:border-emerald-700">
                        <li>
                            <Link to="/" class="block rounded text-center bg-emerald-950 text-white py-2 px-1 hover:text-white md:text-white md:p-1 dark:text-white md:dark:text-white" aria-current="page">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/Projet" class="block text-center text-emerald-950 border-2 border-transparent border-r-emerald-950 hover:text-emerald-400 md:border-0 md:hover:text-emerald-700 md:py-1 pr-5 dark:text-emerald-950 md:dark:hover:text-emerald-700 dark:hover:text-emerald-950 md:dark:hover:bg-transparent">Projet</Link>
                        </li>
                        <li>
                            <a href="https://github.com/Devon75/myportfolio"><img src="src/assets/image/github-icon.svg" alt="icon de Github" class="w-5 h-5 ml-4" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/karl-joris-mekuie-m-obiang-a90a27251/"><img src="src/assets/image/linkedin-icon.svg" alt="icon de Linkedin" class="w-5 h-5 ml-4" /></a>
                        </li>
                    </ul>
                </div>

            </nav>

            <Outlet />

        </>
    )
}

export default Navbar;