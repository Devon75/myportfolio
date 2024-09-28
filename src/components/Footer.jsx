import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer class="bg-white rounded-lg shadow m-4 ml-28 mr-16 minus:ml-5 minus:mr-5 sm:ml-16 sm:mr-16 dark:bg-white">
            <form>
                <div class="flex flex-col ml-28 mr-16 mt-20 mb-6 minus:ml-5 minus:mr-5 sm:ml-16 md:grid-cols-2 laptop:grid-cols-2">
                    <div class="mt-4">
                        <label for="first_name" class="block mb-2 text-sm font-medium text-emerald-950 dark:text-emerald-950">Prénom</label>
                        <input type="text" id="first_name" class="w-full bg-lime-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-lime-50 dark:border-emerald-600 dark:placeholder-emerald-800 dark:text-emerald-900 dark:focus:ring-emerald-500 dark:focus:border-emerald-900" placeholder="John" required />
                    </div>
                    <div class="mt-4">
                        <label for="last_name" class="block mb-2 text-sm font-medium text-emerald-950 dark:text-emerald-950">Nom</label>
                        <input type="text" id="last_name" class="w-full bg-lime-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-lime-50 dark:border-emerald-600 dark:placeholder-emerald-800 dark:text-emerald-900 dark:focus:ring-emerald-500 dark:focus:border-emerald-900" placeholder="Doe" required />
                    </div>
                    <div class="mt-4">
                        <label for="company" class="block mb-2 text-sm font-medium text-emerald-950 dark:text-emerald-950">Entreprise</label>
                        <input type="text" id="company" class="w-full bg-lime-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-lime-50 dark:border-emerald-600 dark:placeholder-emerald-800 dark:text-emerald-900 dark:focus:ring-emerald-500 dark:focus:border-emerald-900" placeholder="Flowbite" required />
                    </div>
                    <div class="mt-4">
                        <label for="phone" class="block mb-2 text-sm font-medium text-emerald-950 dark:text-emerald-950">Téléphone</label>
                        <input type="tel" id="phone" class="w-full bg-lime-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-lime-50 dark:border-emerald-600 dark:placeholder-emerald-800 dark:text-emerald-900 dark:focus:ring-emerald-500 dark:focus:border-emerald-900" placeholder="06.59.24.63.74" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div class="mt-4">
                        <label for="email" class="block mb-2 text-sm font-medium text-emerald-950 dark:text-emerald-950">Adresse email</label>
                        <input type="email" id="email" class="w-full bg-lime-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-lime-50 dark:border-emerald-600 dark:placeholder-emerald-800 dark:text-emerald-900 dark:focus:ring-emerald-500 dark:focus:border-emerald-900" placeholder="john.doe@flowbite.com" required />
                    </div>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 ml-28 mb-6 minus:ml-5 minus:mr-5 sm:ml-16">
                    <div class="col-span-2 h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-emerald-300 rounded bg-emerald-50 focus:ring-3 focus:ring-blue-300 dark:bg-emerald-700 dark:border-emerald-600 dark:focus:ring-blue-600 dark:ring-offset-emerald-800" required />
                        <label for="remember" class="ms-2 text-sm font-medium text-black dark:text-black">J'accepte les <a href="#" class="text-emerald-950 hover:text-emerald-400 hover:underline dark:text-emerald-950">termes et conditions</a>.</label>
                    </div>
                    <button type="submit" class="col-1 w-fit mr-28 text-white bg-emerald-950 hover:bg-emerald-700 hover:border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-fit px-5 py-2.5 text-center dark:bg-emerald-950 dark:hover:bg-emerald-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
            <div class="w-full mx-auto max-w-screen-xl p-4 laptop:flex laptop:items-center laptop:justify-between">
                <span class="text-sm text-black laptop:mt-3 sm:text-center dark:text-black">© 2024 <a href="https://flowbite.com/" class="text-emerald-950 hover:text-emerald-400 hover:underline">Flowbite™</a>. Tous Droits Réservés.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-emerald-400 sm:mt-0">
                    <li>
                        <Link to="/Moi" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="#" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">Politique de confidentialité</Link>
                    </li>
                    <li>
                        <Link to="#" class="text-emerald-950 hover:text-emerald-400 hover:underline me-4 md:me-6">Licence</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;