
interface IPageButton{
    pageNumber : number,
    currentPage : number,
    paginate: (pageNumber: number) => void,
}

const PageButton = ({pageNumber, currentPage, paginate}:IPageButton) => {
  return (
    <button
        key={pageNumber}
        className={`mx-1 px-3 py-2 rounded-md ${
            currentPage === pageNumber + 1 
                ? 'dark:bg-gray-700 bg-gray-500 text-white' 
                : 'bg-white text-gray-700'
        }`}
        onClick={() => paginate(pageNumber + 1)}
    >
        {pageNumber + 1}
    </button>
  )
}

export default PageButton