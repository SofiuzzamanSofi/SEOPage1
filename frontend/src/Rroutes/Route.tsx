import { createBrowserRouter } from 'react-router-dom';
import TodoLayout from '../Layout/TodoLayout';
import ErrorPage from '../Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  //home route

  //dashboard rout
  {
    path: "/",
    element: <TodoLayout />,
    errorElement: <ErrorPage />
  },

  //sign in up route
]);

export default router;
