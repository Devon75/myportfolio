import { Link } from "react-router-dom";

function Accueil() {
    return (
        <>
            <section class="flex flex-col h-screen bg-gradient-to-tr from-lime-50 via-green-200 to-emerald-50">
                <div class="h-full justify-center content-center text-center">
                    <div class="h-screen py-24 sm:ml-1 minus:ml-5 minus:mr-5 sm:mr-1">
                        <Link to="/Projet" class="inline-flex justify-between items-center py-1 px-1 my-7 border-black border-2 text-sm text-emerald-950 bg-none rounded-full dark:bg-none dark:text-emerald-950 hover:text-emerald-950" role="alert">
                            <span class="text-sm font-medium">Développeur web fullstack</span>
                            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </Link>
                        <h1 class="mt-10 mb-5 text-9xl text-emerald-950 font-bold tracking-tight leading-none minus:mx-0 minus:text-4xl sm:mx-0 sm:text-4xl md:mx-0 md:text-5xl lg:text-6xl xl:text-6xl dark:text-emerald-950">Créateur de site Web</h1>
                        <p class="mb-20 px-40 justify-center text-2xl text-justify text-wrap font-light text-emerald-800 tracking-normal minus:mx-0 minus:px-2 minus:text-left minus:text-md sm:mx-20 sm:px-10 md:px-40 md:text-lg lg:mb-8 lg:text-xl dark:text-emerald-800">
                            <span class="font-medium">Bonjour,&nbsp;&nbsp;&nbsp;je suis Karl!</span><br />
                            Bienvenue dans mon portfolio où vous verrez mes projets et mon parcours scolaire et professionnel qui m'ont permis de devenir développeur fullstack.<br />
                            Depuis tout petit je suis passionné par l'informatique et les innovations technologiques.
                        </p>
                        <a href="src/assets/Développeur_web_full-stack.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-emerald-950 border border-emerald-300 rounded-lg minus: mb-5 hover:bg-emerald-100 hover:text-teal-900 focus:ring-4 focus:ring-emerald-100 dark:text-emerald-900 dark:border-emerald-700 dark:hover:bg-emerald-100 dark:focus:ring-emerald-800">
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </section>
            <section id="moi" class="flex flex-col h-full bg-gradient-to-tr from-emerald-50 via-green-200 to-lime-50">
                <div class="max-h-max mb-10 flex-row justify-center content-center text-center">
                    <h2 class="my-3 text-center text-emerald-950 font-extrabold text-6xl">Savoir-Faire</h2>
                    <p class="my-4 text-lime-950 text-left minus:px-28 minus:col-span-2 sm:px-28 md:px-32 lg:px-48 xl:px-52 2xl:px-56">
                        Ayant passé un BTS SIO option SLAM j'ai de bonne base en HTML5, CSS3, C# et PHP.&ensp;Au cours de mes études j'ai appris à utiliser différents frameworks tels que bootstrap, materialize, react, symfony, express ou encore tailwind.
                    </p>
                    <table class="table-auto mx-28 text-start border-separate border border-emerald-950">
                        <thead>
                            <tr>
                                <th class="border border-emerald-950 w-3/6 text-emerald-800">
                                    Projet
                                </th>
                                <th class="border border-emerald-950 w-1/6 text-emerald-800">
                                    Language
                                </th>
                                <th class="border border-emerald-950 w-1/6 text-emerald-800">
                                    Framework
                                </th>
                                <th class="border border-emerald-950 w-1/6 text-emerald-800">
                                    Base de données
                                </th>
                                <th class="border border-emerald-950 w-1/6 text-emerald-800">
                                    Logiciel
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Gestionnaire de réservation dans un hôtel.
                                    Les différents aspects appliqués dans ce projet ont été la Programmation Orientée Objet(POO), le polymorphisme et l'héritage.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    C#
                                </td>
                                <td class="border border-emerald-950 text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">PhpMyAdmin</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Modélisation et maquette d'une application pour un site de location et de vente de vidéos.
                                    Les différents aspects appris dans ce projet son les diagrammes de cas d'utilisation et ceux d'activités ainsi que le maquettage d'une application.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    UML
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">SmartDraw</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Conception de l'architecture logicielle d'un jeu de combat en java.
                                    Dans ce projet ont été appliqués la Programmation Orientée Objet(POO), les diagrammes de classes et paquetages(UML), l'utilisation du github sous eclipse et l'utilisation de WindowBuilder.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    Java
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">WidowBuilder</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">Eclipse</td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Développement des fonctionnalités d'un site web à l'aide d'une infrastructure logicielle.
                                    Les points rencontrés dans ce projet sont les caractéristiques des frameworks, la création d'un projet avec symfony, l'utilisation d'un IDE, l'organisation du projet conformément au modèle MVC et les test unitaires.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    PHP5
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">Symfony</td>
                                <td class="border border-emerald-950 text-center text-lime-950">PhpMyAdmin</td>
                                <td class="border border-emerald-950 text-center text-lime-950">Wampserver</td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Développement d'une solution logicielle avec persistance des données dans une base de données relationnelle.
                                    Les points rencontrés dans ce projet ont été la persistance et les couches d'accès aux données, le design patterns en POO et l'application du SQL pour la base de données.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    Java
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">MySQLWorkbench</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Application de géolocalisation avec une API
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    JS
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">Node.js</td>
                                <td class="border border-emerald-950 text-center text-lime-950">Api Ninjas</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Audit d'une base de données pour le compte d'une entreprise cliente.
                                    Dans ce projet, il est question d'exploiter un schéma de données et gérer une base de données avec SQL.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    SQL
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">Microsoft SQL server</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Réalisation d'une application mobile
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    Java
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">Android studio</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Dino Jump
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    HTML5/JS
                                </td>
                                <td class="border border-emerald-950 text-lime-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Projets d'évolution de la structure de la base de données d'une entreprise cliente.
                                    Les points qui ont été rencontrés dans ce projet sont la conception et l'adaptation d'une base de données relationnelle, les modèles de référence des données et le duel entre le modèle MCD et les diagrammes de classes.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    SQL
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">Microsoft SQL server</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                            <tr>
                                <td class="border border-emerald-950 text-lime-950">
                                    Contribution de manière proactive aux projets d'évolutions vers des architectures de bases de données non relationnelles.
                                    Dans ce projet, on découvert MongoDB, on l'a installé et connecté à une application en C#.
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950">
                                    C#
                                </td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                                <td class="border border-emerald-950 text-center text-lime-950">MongoDB</td>
                                <td class="border border-emerald-950 text-center text-lime-950 bg-green-950"></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 class="mt-20 mb-3 text-center text-emerald-950 font-extrabold text-6xl">Compétences</h2>
                    <div class="grid grid-cols-2 gap-x-8 mt-5 mx-40 p-4 bg-white border-gray-400 rounded minus:mx-5 minus:col-span-2 sm:ml-16 sm:mr-16">
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950 border-2 border-zinc-600">Java</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-emerald-700 h-2 rounded-full w-1/3"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">Python</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-4/5"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">C#</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-10/12"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">C++</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-1/2"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">HTML</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-11/12"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">CSS</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-11/12"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">JS</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-5/6"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">SQL</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-8/12"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">PHP</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-10/12"></div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-x-8">
                            <h6 class="text-emerald-950">Typescript</h6>
                            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div class="bg-emerald-700 h-2 rounded-full w-4/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cv" class="grid grid-cols-2 gap-3 h-full pt-4 bg-gradient-to-tr from-lime-50 via-green-200 to-emerald-50">
                <div class="block mt-5 p-6 text-balance minus:col-span-2 minus:mx-5 sm:col-span-2 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 bg-white border border-emerald-200 rounded-lg shadow dark:bg-white dark:border-emerald-700">
                    <h1 class="mb-5 text-center font-bold tracking-tight text-emerald-950 dark:text-emerald-950">Parcours scolaire</h1>
                    <ol class="relative border-s border-emerald-200 ml-5 dark:border-emerald-200">
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2022-2024</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">BTS SIO option SLAM</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">CNED de Grenoble</p>
                        </li>
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2020-2022</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">Licence Informatique</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">Facultés des Sciences d'Angers</p>
                        </li>
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2019-2020</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">Terminale S</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">CNED de Rennes</p>
                        </li>
                    </ol>
                </div>
                <div class="block mr-16 mt-5 p-6 minus:col-span-2 minus:mx-5 sm:col-span-2 sm:mx-16 bg-white border border-emerald-700 rounded-lg shadow dark:bg-white dark:border-emerald-700">
                    <h1 class="mb-5 text-center font-bold tracking-tight text-emerald-950 truncate hover:overflow-hidden dark:text-emerald-950">Expériences<br/>professionnelles</h1>
                    <ol class="relative border-s border-emerald-200 ml-5 dark:border-emerald-200">
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2019-2020</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">Terminale S</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">CNED de Rennes</p>
                        </li>
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2020-2022</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">Licence Informatique</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">Facultés des Sciences d'Angers</p>
                        </li>
                        <li class="mb*10 ms-4">
                            <div class="absolute w-3 h-3 bg-emerald-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-emerald-200"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-emerald-400 dark:text-emerald-400">2022-2024</time>
                            <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-900">BTS SIO option SLAM</h3>
                            <p class="mb-4 text-base font-normal text-emerald-500 dark:text-emerald-500">CNED de Grenoble</p>
                        </li>
                    </ol>
                </div>
                <div class="block col-span-2 mx-16 mb-5 bg-white border border-emerald-700 rounded-lg shadow minus:mx-5 sm:mx-16 ">
                    <h1 class="my-5 ml-10 text-start font-bold tracking-tight text-emerald-950 dark:text-emerald-950">Langues</h1>
                    <div class="flex flex-row items-center justify-around minus:flex-col minus:ml-11 sm:flex-col sm:ml-11 md:flex-col md:ml-11 lg:ml-11 xl:ml-11">
                        <p class="mb-5 text-emerald-700 lg:mr-5">Le français est ma langue maternelle. Pour l'anglais j'ai un niveau intermédiaire supérieure (B2) et j'ai quelques notions en espagnol et en italien.</p>
                        <div class="ml-5 flex flex-row justify-around">
                            <div class="flex items-center justify-center bg-emerald-600 rounded-full w-32 h-32 dark:bg-emerald-600 minus:mr-14 minus:mb-14 sm:mr-14 md:mr-14 lg:mr-10 xl:mr-10">
                                <div class="flex bg-white rounded-full w-24 h-24 text-emerald-950 items-center justify-center text-center">Français<br />100%</div>
                            </div>
                            <div class="flex items-center justify-center mb-14 bg-emerald-800 rounded-full w-32 h-32 dark:bg-emerald-800 sm:mr-14 md:mr-14 lg:mr-14 xl:mr-14">
                                <div class="flex bg-white rounded-full w-24 h-24 text-emerald-950 items-center justify-center text-center">Anglais<br />60%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accueil;