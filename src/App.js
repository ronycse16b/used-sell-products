
import './App.css';
import { router } from './Routes/Routes';
import {RouterProvider} from 'react-router-dom';

function App() {
  return (
    <div className="max-[1400px]:">
      <RouterProvider router={router}>
         
      </RouterProvider>
    </div>
  );
}

export default App;
