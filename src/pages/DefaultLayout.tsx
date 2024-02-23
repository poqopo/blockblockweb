import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="w-screen, h-screen flex justify-center bg-bg1">
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
