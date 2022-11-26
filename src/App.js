
import './App.css';
import { router } from './Routes/Routes';
import {RouterProvider} from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-[1400px]:">
      <RouterProvider router={router}>
      <Toaster position="top-center"
        reverseOrder={false} />
      </RouterProvider>
    </div>
  );
}

export default App;
