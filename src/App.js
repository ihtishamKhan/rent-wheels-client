import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout';
import CarDetails from './pages/CarDetails';

import AdminLayout from './layout/adminLayout';
import AdminHome from './pages/admin/AdminHome';
import AddCar from './pages/admin/AddCar';

function App() {
    return (
        <div className="">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/car-details/:id" element={<CarDetails />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Route>

                    <Route path='/admin' element={<AdminLayout />} >
                        <Route index element={<AdminHome />} />

                        {/* <Route path="/cars" element={<AddCar />} />
                        <Route path="/cars/add" element={<AddCar />} /> */}
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    );
}

export default App;
