import { Link } from "react-router-dom";

function Accueil() {
    return (
        <section class="flex justify-center items-start text-center h-screen bg-gradient-to-tr from-lime-50 to-emerald-50 dark:bg-gradient-to-tr from-emerald-50 to-lime-50">
            <div class=" mt-10">
                <div class="ml-28 sm:ml-16 minus:ml-5 minus:mr-5 mr-16 sm:mr-16">
                    <Link to="/Projet" class="inline-flex justify-between items-center py-1 px-1 pl-4 pr-4 mb-7 text-sm text-emerald-950 bg-none rounded-full dark:bg-none dark:text-emerald-950 hover:text-emerald-950" role="alert">
                        <span class="text-sm font-medium">Développeur web fullstack</span>
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </Link>
                    <h1 class="max-w-5xl mt-10 mb-5 mr-5 text-9xl text-emerald-950 text-center font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-emerald-950">Créateur de site web fullstack</h1>
                    <p class="max-w-5xl mb-20 font-light text-4xl text-start text-emerald-800 tracking-normal lg:mb-8 md:text-lg lg:text-xl dark:text-emerald-800">
                       <span class="font-medium">Bonjour,&nbsp;&nbsp;&nbsp;je suis Karl!</span><br />
                       Bienvenue dans mon portfolio où vous verrez mes projets et mon parcours scolaire et professionnel qui m'ont permis de devenir ce que je suis aujourd'hui.<br/>
                       Depuis tout petit je suis passionné par l'informatique et les innovations technologiques.
                    </p>
                    <a href="src/assets/Développeur_web_full-stack.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-emerald-950 border border-emerald-300 rounded-lg hover:bg-emerald-100 hover:text-teal-900 focus:ring-4 focus:ring-emerald-100 dark:text-emerald-900 dark:border-emerald-700 dark:hover:bg-emerald-100 dark:focus:ring-emerald-800">
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Accueil;