import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionTypes";
import { ThemeReducer } from "./Reducers/ThemeReducer";


export const ThemeContext = createContext();

const initval = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initval);

    const toggle_theme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}

        >
            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext;