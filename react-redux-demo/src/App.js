import './App.css';
import Users from './components/Users/User.jsx';
import CakeContainerHooks from './components/CakeContainer/CakeContainerHooks';
import CakeContainer from './components/CakeContainer/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer/IceCreamContainer';


function App() {
  return (
    <div className="App">
      <CakeContainerHooks/>
      <CakeContainer/>
      <IceCreamContainer/>
      <Users />
    </div>
  );
}

export default App;
