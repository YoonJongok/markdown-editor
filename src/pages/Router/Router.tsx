import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from '../Home/Home';
import Layout from '../../components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path='/:id'
        element={
          <Layout>
            <div>About ID</div>
          </Layout>
        }
      />
      <Route path='*' element={<Navigate to='/' replace />} />
    </>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

