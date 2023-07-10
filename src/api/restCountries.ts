import axios, { AxiosResponse } from "axios";

interface CountryData {
    // Define the properties of the country data here
    name: string;
    population: number;
    // ...
}

/* Api Calls */
export async function getAll(){
    try{
        const res: AxiosResponse<CountryData[]> = await axios.get(
            'https://restcountries.com/v3.1/all', 
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}