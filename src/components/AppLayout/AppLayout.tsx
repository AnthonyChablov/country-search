import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const AppLayout = () => {
  return (
    <div className='h-screen dark:bg-slate-800 bg-gray-100 dark:text-white'>
        <Container>
            <SearchBar/>
            <div className="mt-5">
              <Filter/>
            </div>
        </Container>
    </div>
  )
}

export default AppLayout