import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout, Modal } from "antd";
import SiderMenu from "@/components/siderMenu/SiderMenu";
import HeaderTitle from "@/components/headerTop/Index";
import BreadcrumbTitle from "@/components/breadCrumb/Index";
const { Content } = Layout;
import { removeAll } from "@/utils/app-util";
const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handClick = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    navigate("/login");
    removeAll();
    dispatch({
      type:'setInfo',
      payload:{}
    })
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Layout
      style={{
        minHeight: "calc(100vh)",
        background: "#f5f5f5",
      }}
    >
      <HeaderTitle handClick={handClick} />
      <Layout className="site-layout">
        <SiderMenu />
        <Content
          style={{
            margin: "0 10px",
          }}
        >
          <BreadcrumbTitle  menList={location}/>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: "calc( 100vh - 140px )",
              background: "#fff",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Modal
        title="退出登录"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>确认退出登录,并回到登录页吗？</p>
      </Modal>
    </Layout>
  );
};
export default Home;
