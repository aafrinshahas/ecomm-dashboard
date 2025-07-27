


import { Route, Routes } from 'react-router-dom';
import './app.css';
import HomePage from "./assets/components/Homepage";
import DashboardContextProvider from "./assets/context/DashboardContextProvider";
import CenterPanel from './assets/layouts/Dashboard';
import Ecomm from './assets/components/Ecomm';
import OrderList from './assets/components/OrderList';
import Dashboard from './assets/layouts/Dashboard';
import Order from './assets/layouts/Order';

function App() {

  return (
    <div>
      <DashboardContextProvider>
      
  <Routes>
  <Route path="/" element={<HomePage />}>      
  <Route element={<Dashboard />}>  
    <Route path='default' element={<Ecomm />} />
    <Route path='ecommerce' element={<Ecomm />} />
      <Route path='/' element={<Ecomm />} />
        <Route path='order' element={<Order/>} />
  </Route>
</Route>
  </Routes>
      </DashboardContextProvider>
    </div>
  )
}

export default App
