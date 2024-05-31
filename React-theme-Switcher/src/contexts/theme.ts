import { createContext, useContext } from 'react';

interface ThemeContextProps {
    themeMode: string;
    darkTheme: () => void;
    lightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(): ThemeContextProps {
    return useContext(ThemeContext);
}
