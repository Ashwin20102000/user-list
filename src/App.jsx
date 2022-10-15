import * as React from 'react';
import LandingPage from './components/LandingPage';
import {Provider} from "react-redux"
import store from './redux/store';
import ColorModeProvider from './contexts/ColorModeProvider';

const App = () =>  {
  
  return (
    <Provider store={store}>
      <ColorModeProvider>
        <LandingPage />
      </ColorModeProvider>
    </Provider>
  );
}

export default App;