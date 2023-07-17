import create from 'zustand';

type State = {
    theme: string,
    
}

type Action = {
    setTheme :(newTheme: string) => void,
}

export const useAppStore = create<State & Action>((set)=>({
    theme: 'light',
    setTheme: (newTheme : string) => set({ theme : newTheme }),
}));