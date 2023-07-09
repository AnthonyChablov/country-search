import Icon from "../Icon/Icon"

const SearchBar = () => {
  return (
    <div className="w-full bg-white px-3 py-4 rounded-lg flex items-center dark:bg-gray-700 shadow-sm">
        <div className="mx-2 ml-4">
          <Icon type={`search`} size={18} color="gray"/>
        </div>
        <input type="text" id="name" name="name" required
          className="w-full ml-4 dark:bg-gray-700"
          minLength={4} maxLength={8} size={20}
          placeholder="Search for a country..."
        />

    </div>
  )
}

export default SearchBar