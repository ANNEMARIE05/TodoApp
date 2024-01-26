


function Taches() {
    return(
    <>
        <header className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Bienvenue, Barry!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <a href="/todo" className="underline underline-offset-1 text-indigo-600 hover:text-indigo-300">Ajouter</a>
                        <button
                        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                        type="button"
                        >
                        <a href="/">Deconnexion</a>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}
export default Taches