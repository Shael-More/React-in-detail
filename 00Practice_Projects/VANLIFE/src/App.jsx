import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vans, { loader as vansLoader } from './pages/Vans/Vans.jsx';
import VanDetail, {
  loader as vanDetailLoader,
} from './pages/Vans/VanDetail.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostVan, { loader as hostVansLoader } from './pages/Host/HostVan.jsx';
import HostVanDetails, {
  loader as hostVanDetailLoader,
} from './pages/Host/HostVanDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import Login, {
  loader as loginLoader,
  action as loginAction,
} from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './components/Layout.jsx';
import HostLayout from './components/HostLayout.jsx';
import Error from './components/Error.jsx';
import { requireAuth } from './utils.js';

import './server.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path='vans'
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />

      <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />

      <Route path='host' element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<Error />}
        />
        <Route
          path='income'
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<Error />}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<Error />}
        />
        <Route
          path='vans'
          element={<HostVan />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />

        <Route
          path='vans/:id'
          element={<HostVanDetails />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<Error />}
          />
          <Route
            path='pricing'
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<Error />}
          />
          <Route
            path='photos'
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<Error />}
          />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
