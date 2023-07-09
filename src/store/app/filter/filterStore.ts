import create from 'zustand';

type State = {
    display: boolean,
    filter: string,
}

type Action = {
    setDisplay :(newTheme: boolean) => void,
    setFilter:(newFilter: string) => void,
}

export const useFilterStore = create<State & Action>((set)=>({
    display: false,
    filter: '',
    setDisplay: (newDisplay : boolean) => set({ display : newDisplay }),
    setFilter:(newFilter: string) => set({ filter : newFilter })
}));