import { Home } from './pages/Home';
import { MetaMaskError } from './Components/MetaMaskError';
import { useRoutes } from 'react-router-dom';
import Admin from './pages/Admin';

function App() {
  const element = useRoutes([
    {
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/admin',
          element: <Admin />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
