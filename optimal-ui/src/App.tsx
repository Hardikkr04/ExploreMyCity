import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeComponent from './pages/home/home';
import Hotel from './pages/hotel/hotel';
import MainComponent from './pages/main/main';
import Food from './pages/food/food';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent />,
    children:[
      {
        path:'/',
        element:<HomeComponent/>
      },
      {
        path:'/hotel',
        element:<Hotel/>
      },
      {
        path:'/food',
        element:<Food/>
      }
    ]
  },
])

function App() {
  return (
        <RouterProvider router={routes} />
  );
}

export default App;
