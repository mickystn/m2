import Layouts from "../Layouts";
import Login from "../page/Login";

export const AUTH_ROUTES = [
  {
    name: 'Login',
    path: '/',
    component: <Login />,
    isActive: true,
  },
  {
    name: 'Home',
    path: '/home',
    component: <Layouts />,
    isActive: true,
  },
]