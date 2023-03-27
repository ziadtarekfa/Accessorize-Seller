import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/orders/:id' element={<OrderDetails />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </Router>


  );
}

export default App;
