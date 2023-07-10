import Icon from "../Icon/Icon";
import { useDataStore } from "../../store/app/data/dataStore";
import { useEffect } from "react";


const continents = [
  {continent :'Africa'},
  {continent :'Europe'},
  {continent :'Asia'},
  {continent :'Europe'},
  {continent :'Oceania'},
]

const Filter = () => {

  const filter = useDataStore(state => state.filter);
  const setFilter = useDataStore(state => state.setFilter);

  useEffect(()=>{
    console.log(filter)
  },[filter])
  

  return (
    <div >
      <select className="px-7 py-4 w-fit flex shadow-sm rounded-md  bg-white dark:bg-gray-700 " 
        name="continents" 
        placeholder="Select"
        value={filter}
        onChange={ (e) => setFilter(e.target.value)}
      >
        <option value="" disabled hidden>Filter By Region</option>
        {
          continents.map((elem, i:number)=>{
            return (
              <option key={i} value={elem.continent}>{elem.continent}</option>
            )
          })
        }

      </select>
    </div>
  )
}

export default Filter;