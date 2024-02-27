import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Product_list from './components/Product_list';

function App() {
  return (
    <div className="App">
      <Header/>
      <Product_list/>
    </div>
  );
}

export default App;
