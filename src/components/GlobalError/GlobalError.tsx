
const GlobalError = () => {

    return (
      <section className="relative bg-heroImage bg-cover bg-center bg-no-repeat flex flex-col items-center h-screen ">
        <div className="mt-[14vh] px-20 py-20 relative mx-auto font-Roboto bg-white shadow-2xl rounded-xl dark:bg-zinc-800 "
        >
          <div className="w-10/12 max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
            <h1 className="text-3xl sm:text-4xl text-center font-bold">
              An Error Has Occured.
            </h1>
            <p className="pt-12 text-center text-xl sm:text-xl ">
              Sorry, we are working on it. Thanks for being patient. Please go back and try again.
            </p >
          </div>

        </div>
      </section>
    )
  }

export default GlobalError