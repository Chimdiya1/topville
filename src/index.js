import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import ScrollToTop from './components/scroll-to-top.component';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Nunito, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    brand: {
      primary: '#48BB78',
      secondary: '#68D391',
      bold: '#22543D',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
