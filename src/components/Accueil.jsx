

function Accueil() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="grid px-4 py-8 ml-24 minus:ml-5 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-4">
                <div class="mr-auto minus:mr-0 lg:col-span-2">
                    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span class="text-sm font-medium">Software & backend developper</span>
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="max-w-2xl mb-4 mr-5 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Karl Mekuie M'Obiang</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Je suis développer web fullstack.</p>
                    <a href="src/image/Développeur_web_full-stack.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Télécharger mon CV
                    </a>
                </div>
                <div class="minus:ml-5 minus:mt-2 tablet:mt-0 tablet:col-span-2 tablet:flex">
                    <img src="src/image/paysage.avif" alt="paysage" />
                </div>
            </div>
        </section>
    )
}

export default Accueil;