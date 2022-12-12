import React, {Suspense ,lazy} from "react";
import { Navigate } from "react-router-dom";
import Login from "@/views/login/Index";
import Home from "@/views/home/Index";
const Test001 = lazy(()=>import('@/views/test001/Index'))
const Test002 = lazy(()=>import('@/views/test002/Index'))
const Test003 = lazy(()=>import('@/views/test003/Index'))
const PageNotFound = lazy(()=>import('@/views/PageNotFound/Index'))
const asyncComponentLoading = (frc)=>(
  <Suspense fallback={ <div>加载中...</div> }>
    {frc}
  </Suspense>
)
const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Navigate to="/test001" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/test001",
        element: asyncComponentLoading(<Test001 />)
      },
      {
        path: "/test002",
        element: asyncComponentLoading(<Test002 />)
      },
      {
        path: "/test003",
        element: asyncComponentLoading(<Test003 />)
      }
    ],
  },
  {
    path: "*",
    element: asyncComponentLoading(<PageNotFound />)
  },
];
export default routes;
