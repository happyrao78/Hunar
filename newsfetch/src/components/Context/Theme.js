import { useContext, createContext } from "react";

export const ThemeContext= createContext({
    lightTheme : ()=>{},
    darkTheme : ()=>{},
    themeMode : "light"
})
export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}