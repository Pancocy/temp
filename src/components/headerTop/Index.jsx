import React from "react";
import { Layout, Space } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import styles from "./index.module.less";
const { Header } = Layout;
function HeaderTitle(props) {
  const { nickname } = useSelector(state=>state.userInfoReducer.userInfo)
  return (
    <div>
      <Header className={styles.header}>
        <div>此处自定义,项目logo</div>
        <div>
          <span style={{marginRight:'10px'}}>欢迎回来 | <span>{nickname}</span> </span>
          <Space>
            <PoweroffOutlined onClick={props.handClick} />
          </Space>
        </div>
      </Header>
    </div>
  );
}
export default HeaderTitle;
