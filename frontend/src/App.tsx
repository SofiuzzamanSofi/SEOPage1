import { RouterProvider } from "react-router-dom";
import router from "./Rroutes/Route";
import { TaskProvider } from "./context/TaskProvider";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
      <Toaster />
    </TaskProvider>
  )
}

export default App;