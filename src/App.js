import Store from '../src/components/Store'
import './App.css';
import products from '../src/components/data';

function App() {
  return (
    <Store products={products} />
  );
}

export default App;
