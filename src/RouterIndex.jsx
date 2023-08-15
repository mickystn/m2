import { Routes, Route } from 'react-router-dom';
import { AUTH_ROUTES } from './models/RouterModel';

const RouterIndex = () => {
  return (
    <>
      <Routes>
        {AUTH_ROUTES.filter((route) => route.isActive).map((route, i) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </>
  )
}

export default RouterIndex;