

function Accueil() {
    return (
        <section class="h-screen bg-gradient-to-tr from-lime-50 to-emerald-50 dark:bg-gray-900">
            <div class="justify-center items-center text-center flex flex-col mt-10">
                <div class="col-span-1 ml-28 sm:ml-16 minus:ml-5 minus:mr-5 minus:col-span-2 mr-16 sm:mr-16">
                    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pl-4 pr-4 mb-7 text-sm text-emerald-950 bg-none rounded-full dark:bg-gray-800 dark:text-white hover:bg-blanclune-100 hover:text-teal-900 dark:hover:bg-gray-700" role="alert">
                        <span class="text-sm font-medium">Software & backend developper</span>
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="max-w-2xl mb-4 mr-5 text-4xl text-emerald-950 text-center font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Développeur web fullstack</h1>
                    <p class="max-w-2xl mb-6 font-light text-emerald-950 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem officiis pariatur recusandae aliquam quam, nostrum hic quia! Ipsum odio at, reprehenderit rerum quidem commodi, earum dolorem nulla hic ducimus fugiat.</p>
                    <a href="src/image/Développeur_web_full-stack.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-emerald-950 border border-gray-300 rounded-lg hover:bg-emerald-50 hover:text-teal-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Accueil;