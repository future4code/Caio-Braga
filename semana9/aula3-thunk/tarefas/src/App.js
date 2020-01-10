import React from 'react';
import {Provider} from 'react-redux';
import Header from './Components/Header.js';
import MainSection from './Components/MainSection';
import store from './Components/Store'


function App() {
  return (
    <Provider store={store}>

      <Header />
      <MainSection />

    </Provider>
  );
}








export default App;
