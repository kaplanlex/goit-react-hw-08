import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};