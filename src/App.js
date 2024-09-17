import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product_list from './components/Product_list';
import { useState } from 'react';

function App() {
  const [dark,setdark]=useState(true)
  
  return (
    <div class="App">
      <Header dark="true"/>
      <Product_list></Product_list>
    </div>
  );
}

export default App;
