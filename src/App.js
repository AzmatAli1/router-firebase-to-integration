import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from "react-router-dom";

import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Home from './components/Home/Home';




function App() {
  return (
    <div className="App">
      <h1>Router-Firebase-To-Integration</h1>

      <Header>This is Header</Header>
      
      <Routes>
        <Route path ='/home' element={<Home></Home>}></Route>
        <Route path = '/login' element={<Login></Login>}></Route>
        <Route></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
