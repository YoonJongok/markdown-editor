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
      <Route path='/' element={<Home />} />
      <Route path=':id' element={<div>About ID</div>} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </>
  )
);

export const Router = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

