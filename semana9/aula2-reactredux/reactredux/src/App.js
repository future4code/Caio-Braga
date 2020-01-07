import React from 'react';
import Header from './Components/Header.js';
import MainSection from './Components/MainSection';
import Filter from './Components/Filter';
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
