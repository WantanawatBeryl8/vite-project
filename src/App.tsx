import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import loadable from '@loadable/component';
import { memo } from 'react';

const AuthProvider = loadable(() => import('@/core/store/AuthProvider'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // data fetching config
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default memo(App);
