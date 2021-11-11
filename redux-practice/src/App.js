import './App.css';
import Bread from './components//SingleComponents/Bread/Bread.jsx';
import Burger from './components//SingleComponents/Burger/Burger.jsx';
import CartContainer from './components/CartComponants/CartContainer/CartContainer.jsx';
import FoodContainer from './components/DobuleComponents/FoodContainer/FoodContainer';

function App() {
  return (
    <main>
      {/* <section>
        <div>
          <h2>Foods</h2>
          <Bread />
          <Burger />
        </div>
      </section> */}
      <h1>Mahbub Store</h1>
      <section className="App">
        <div className='section_container'>
          <h2>Foods</h2>
          <FoodContainer />
        </div>
        <div className='cart_container'>
          <CartContainer />
        </div>
      </section>
    </main>
  );
}

export default App;
