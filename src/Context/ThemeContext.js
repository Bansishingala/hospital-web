import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionTypes";
import { ThemeReducer } from "./Reducers/ThemeReducer";


export const themeContext = createContext();

const initval = {
    theme: 'light'
}

const ThemeContext = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initval);

    const toggle_theme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <themeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}

        >
            {children}

        </themeContext.Provider>
    )
}

export default ThemeContext;