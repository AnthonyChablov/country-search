import Icon from "../Icon/Icon"
import { useDataStore } from "../../store/app/data/dataStore"

const SearchBar = () => {

  const setSearch = useDataStore(state => state.setSearch);
  const search = useDataStore(state => state.search);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="w-full bg-white px-3 py-4 rounded-lg flex items-center dark:bg-gray-700 shadow-sm text-gray-600">
        <div className="mx-2 ml-4">
          <Icon type={`search`} size={18} color="gray"/>
        </div>
        <input type="text" id="name" name="name" required
          className="w-full ml-4 dark:bg-gray-700"
          size={20}
          placeholder="Search for a country..."
          value={search}
          onChange={handleInputChange}
        />
    </div>
  )
}

export default SearchBar