import React from 'react';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <AppNavbar/>
      <Container>
        <ItemModal/>
        <ShoppingList/>
      </Container>
    </GlobalProvider>
  );
}

export default App;
