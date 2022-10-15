/* eslint-disable react/prop-types */
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { keys } from '../utils/keys';
import useLocalStorage from '../hooks/useLocalStorage';
import { createTheme, ThemeProvider } from '@mui/material';

const ColorModeContext = React.createContext();

const ColorModeProvider = ({children}) => {
  // For Intial Os based Theme
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useLocalStorage(keys.themeKey,prefersDarkMode?'dark':'light');
  const colorMode = React.useMemo(() => ({toggleColorMode: () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }}),[setMode]);
  const theme = React.useMemo(() =>createTheme({palette: {mode}}),[mode]);

  return (
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
   </ColorModeContext.Provider>
  )
}
export const useColorMode = () => React.useContext(ColorModeContext);

export default ColorModeProvider;