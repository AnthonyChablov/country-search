import create from 'zustand';

type State = {
    display: boolean,
    filter: string,
    data : any,
}

type Action = {
    setDisplay :(newTheme: boolean) => void,
    setFilter:(newFilter: string) => void,
    setData:(newData: string) => void,
}

export const useDataStore = create<State & Action>((set)=>({
    display: false,
    filter: '',
    data : '',
    setDisplay: (newDisplay : boolean) => set({ display : newDisplay }),
    setFilter:(newFilter: string) => set({ filter : newFilter }),
    setData:(newData: any) => set({ data : newData })
}));