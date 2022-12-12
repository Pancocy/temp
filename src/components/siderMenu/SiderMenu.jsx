import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { items } from "./menuList";
import { Menu, Layout } from "antd";
const { Sider } = Layout;

function SiderMenu() {
  const [openKeys, setOpenKeys] = useState("");
  const [selectKeys, setSelectKeys] = useState();
  const location = useLocation();
  const navite = useNavigate();
  useEffect(() => {
    setSelectKeys([location.pathname]);
    items.forEach((ele) => {
      if (ele["children"]?.find(findSelect)) {
        setOpenKeys([ele["key"]]);
      }
    });
  }, [location.pathname]);
  const findSelect = (item) => {
    return item.key === location.pathname;
  };
  const handleRouteInfo = (ele) => {
    navite(ele.key);
    setSelectKeys([ele.key]);
  };
  const switchSelect = (key) => {
    setOpenKeys([key[key.length - 1]]);
  };
  return (
    <Sider
      theme="light"
    >
      <Menu
        theme="light "
        selectedKeys={selectKeys}
        openKeys={openKeys}
        mode="inline"
        items={items}
        onClick={handleRouteInfo}
        onOpenChange={switchSelect}
      />
    </Sider>
  );
}
export default SiderMenu