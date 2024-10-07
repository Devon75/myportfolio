import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer class="w-screen bg-white shadow py-2 minus:ml-5 minus:mr-5 sm:ml-16 sm:mr-16 dark:bg-white">
            <div class="grid grid-cols-1 grid-rows-2 mx-16 mt-5 minus:ml-5 minus:mr-5 sm:ml-16">
                <a href="mailto:jorisobiang306@gmail.com" type="submit" class="col-1 w-fit mr-28 text-white hover:text-white bg-emerald-950 hover:bg-emerald-700 hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-fit px-5 py-2.5 text-center dark:bg-emerald-950 dark:hover:bg-emerald-700 dark:focus:ring-blue-800">Envoyer un mail</a>
                <div class="laptop:flex laptop:items-center laptop:justify-between sm:ml-11">
                    <span class="text-sm text-black laptop:mt-3 sm:text-center dark:text-black">© 2024 <a href="https://flowbite.com/" class="text-emerald-950 hover:text-emerald-400 hover:underline">Flowbite™</a>. Tous Droits Réservés.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-emerald-400 sm:mt-0">
                        <li>
                            <a href="#moi" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">A propos de moi</a>
                        </li>
                        <li>
                            <Link to="#" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link to="#" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">Licence</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;