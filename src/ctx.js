import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');
export default ThemeContext;

export function useTheme () {
    return useContext(ThemeContext);
}
