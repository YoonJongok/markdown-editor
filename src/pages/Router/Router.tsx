import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home } from '../Home/Home';
import DocumentDetail from '../DocumentDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};

