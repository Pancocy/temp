import React, { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import routes from "./router";
import { message } from "antd";
import { useSelector } from "react-redux";


const CompulsionLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    message.warning("请先完成登录验证");
    navigate("/login");
  }, []);
  return <></>;
};

const CompulsionHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    message.success("你已完成登录");
  }, []);
  return <></>;
};

const BeforeRouterEnter = () => {
  const { token } = useSelector(state => state.userInfoReducer.userInfo)
  const location = useLocation();
  const outLet = useRoutes(routes);
  if (location.pathname != "/login" && !token) {
    return <CompulsionLogin />;
  }
  if (location.pathname === "/login" && token) {
    return <CompulsionHome />;
  }
  return outLet;
};

function App() {
  return <div className="App"><BeforeRouterEnter /></div>;
}

export default App;
