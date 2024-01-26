


function Todo() {
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
                        <a href="/taches" className="underline underline-offset-1 text-indigo-600 hover:text-indigo-300">Mes tâches</a>
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

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Créer ou ajouter une nouvelle tâche</h1>
                <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <div>

                    <div>
                        <textarea
                            id="OrderNotes"
                            className="mt-2 w-full p-3 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                            rows="4"
                            placeholder="Entrer la tâche..."
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                >
                    Ajouter
                </button>
                </form>
            </div>
        </div>
    </>
    )
}
export default Todo