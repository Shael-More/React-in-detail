import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';

import './server.js';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVan from './pages/Host/HostVan.jsx';
import HostVanDetails from './pages/Host/HostVanDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVan />} />
            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing/>} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
