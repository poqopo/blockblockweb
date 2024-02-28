import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function DefaultLayout() {
  return (
    <div className="w-full h-full  bg-bg1">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
