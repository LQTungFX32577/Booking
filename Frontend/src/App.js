import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/HomeComponents/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

import "./FontAwesome"
import { action, Auth } from "./pages/home/Auth";
import { Transaction } from "./pages/home/Transaction";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/auth', element:<Auth/>, action: action},
  {path:'/transaction', element: <Transaction/>},
  {path:'/search/:SearchId', element:<Search/>},
  {path:"/detail/:HotelId", element:<Detail/>}
])
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
