import React from 'react';
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

const ThemedContext = React.createContext(themes.dark); // themes.dark是默认值
export default ThemedContext;
