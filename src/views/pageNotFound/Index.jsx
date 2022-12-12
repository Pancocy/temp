import React from "react";
import { Empty, Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 260,
        }}
        description={<span>页面不存在哦！</span>}
      >
        <Button
          type="primary"
          onClick={() => {
            navigate(`/`);
          }}
        >
          返回首页
        </Button>
      </Empty>
    </div>
  );
}
