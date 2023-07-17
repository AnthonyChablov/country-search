import create from 'zustand';
import { CountryInfo } from '../../../models/country';

type State = {
    display: boolean,
    filter: string,
    search: string,
    data : CountryInfo[],
    selected: number, 
}

type Action = {
    setDisplay :(newTheme: boolean) => void,
    setFilter:(newFilter: string) => void,
    setSearch : (newSearch: string) => void,
    setData:(newData: CountryInfo[]) => void,
    setSelected : (newSelected: number) => void,
}

export const useDataStore = create<State & Action>((set)=>({
    display: false,
    filter: '',
    data : [],
    search: '',
    selected : 0,
    setSearch:(newSearch : string) => set({ search : newSearch }),
    setDisplay: (newDisplay : boolean) => set({ display : newDisplay }),
    setFilter:(newFilter: string) => set({ filter : newFilter }),
    setSelected:(newSelected: number) => set({ selected : newSelected }),
    setData:(newData: CountryInfo[]) => set({ data : newData })
}));