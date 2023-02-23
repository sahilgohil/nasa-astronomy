import React,{useState, createContext, useEffect} from "react";

const ThemeProvider = createContext()

function ThemeContextProvider(props)
{

    const [theme,setTheme] = useState(()=>{
        const mode = JSON.parse(localStorage.getItem('theme')) || 'light'
        return mode
    })

    function toggleTheme()
    {
        setTheme(preTheme => preTheme === 'light' ? 'dark' : 'light')
    }
    useEffect( ()=>{
        localStorage.setItem('theme',JSON.stringify(theme))
    } ,[theme])

    return(
        <ThemeProvider.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeProvider.Provider>
    )
}
export {ThemeContextProvider, ThemeProvider}
