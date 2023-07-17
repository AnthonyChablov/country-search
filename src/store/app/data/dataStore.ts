import create from 'zustand';

type State = {
    display: boolean,
    filter: string,
    search: string,
    data : any,
    selected: number, 
}

type Action = {
    setDisplay :(newTheme: boolean) => void,
    setFilter:(newFilter: string) => void,
    setSearch : (newSearch: string) => void,
    setData:(newData: string) => void,
    setSelected : (newSelected: number) => void,
}

export const useDataStore = create<State & Action>((set)=>({
    display: false,
    filter: '',
    data : null,
    search: '',
    selected : 0,
    setSearch:(newSearch : string) => set({ search : newSearch }),
    setDisplay: (newDisplay : boolean) => set({ display : newDisplay }),
    setFilter:(newFilter: string) => set({ filter : newFilter }),
    setSelected:(newSelected: number) => set({ selected : newSelected }),
    
    setData:(newData: any) => set({ data : newData })
}));