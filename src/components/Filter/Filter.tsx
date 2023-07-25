import { ChangeEvent } from 'react';
import { useDataStore } from "../../store/app/data/dataStore";


const continents = [
  {continent :'Africa'},
  {continent :'Europe'},
  {continent :'Asia'},
  {continent :'Americas'},
  {continent :'Oceania'},
]

const Filter = () => {

  const filter = useDataStore(state => state.filter);
  const setFilter = useDataStore(state => state.setFilter);
  const setSearch = useDataStore(state => state.setSearch);
  
  function onChangeHandler(e: ChangeEvent<HTMLInputElement| HTMLSelectElement>) {
    setSearch(''); // Reset the search state to an empty string
    setFilter(e.target.value); // Update the filter state with the new value
  }

  return (
    <div>
      <select
        className="px-4 py-3 md:px-7 md:py-4 w-full flex md:w-fit max-w-xs
          shadow-sm rounded-md bg-white dark:bg-gray-700 dark:text-gray-100 cursor-pointer text-gray-900"
        name="continents"
        placeholder="Select"
        value={filter}
        onChange={(e)=>onChangeHandler(e)}
      >
        <option value="" disabled hidden>
          Filter By Region
        </option>
        {continents.map((elem, i: number) => {
          return (
            <option key={i} value={elem.continent}>
              {elem.continent}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default Filter;