import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { items } from "../siderMenu/menuList";
function BreadcrumbTitle(props) {
  let str = items.map((item, index) => {
    if (item.children !== undefined) {
      let level2;
      let level1 = <Breadcrumb.Item key={index}>{item.label}</Breadcrumb.Item>;
      item.children.map((cItem, cIndex) => {
        if (cItem.key === props.menList.pathname) {
          level2 = [level1].concat(
            <Breadcrumb.Item  key={cIndex}>
              {cItem.label}
            </Breadcrumb.Item>
          );
        }
      });
      return level2;
    } else if (item.key === props.menList.pathname) {
      return <Breadcrumb.Item key={index}>{item.label}</Breadcrumb.Item>;
    }
  });
  return (
    <div>
      <Breadcrumb
        style={{
          padding: "16px 0 16px 24px",
          background: "#fff",
          marginBottom: "10px",
        }}
      >
        {str}
      </Breadcrumb>
    </div>
  );
}
export default BreadcrumbTitle;
