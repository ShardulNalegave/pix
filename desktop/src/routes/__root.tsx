import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TitleBar } from '../components/titlebar';
import { Sidebar } from '../components/sidebar';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <div className='h-screen w-screen overflow-hidden bg-primary text-zinc-900 dark:text-zinc-200 flex'>
        <Sidebar />
        <div className="grow h-screen">
          <TitleBar />
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}