import React from "react";
import { Space, Spin } from "antd";
import styles from "./index.module.less";
const SpinLoading = () => (
  <div className={styles.wrap}>
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
);
export default SpinLoading;
