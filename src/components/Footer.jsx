import { Link } from "react-router-dom";


function Footer() {
    return (


        <footer class="bg-white rounded-lg shadow m-4 ml-28 mr-16 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. Tous Droits Réservés.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/Moi" class="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="#" class="hover:underline me-4 md:me-6">Politique de confidentialité</Link>
                    </li>
                    <li>
                        <Link to="#" class="hover:underline me-4 md:me-6">Licence</Link>
                    </li>
                    <li>
                        <Link to="/Contact" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;