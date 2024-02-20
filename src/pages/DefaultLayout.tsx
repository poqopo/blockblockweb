import { Outlet } from 'react-router-dom';


function DefaultLayout() {
    return (
      <div className="w-screen, h-screen flex justify-center bg-[url('./public/img/background.jpg')]">
            <Outlet />
      </div>
    );
  }
  
  export default DefaultLayout;
  