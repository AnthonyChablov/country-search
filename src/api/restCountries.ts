import axios, { AxiosResponse } from "axios";
import { CountryInfo } from "../models/country";

/* Api Calls */
export async function getAll(){
    try{
        const res: AxiosResponse<CountryInfo[]> = await axios.get(
            'https://restcountries.com/v3.1/all', 
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getOne(code:string){
    try{
        const res: AxiosResponse<CountryInfo[]> = await axios.get(
            `https://restcountries.com/v3.1/alpha/${code}`, 
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
