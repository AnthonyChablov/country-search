import {useEffect} from 'react';
import { useDataStore } from '../../store/app/data/dataStore';

const SingleLayout = () => {

    const selected = useDataStore((state)=>state.selected);

    useEffect(()=>{
        console.log(selected);
    },[])

  return (
    <div>SingleLayout</div>
  )
}

export default SingleLayout