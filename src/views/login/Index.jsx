import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setUserInfo } from "@/utils/app-util";
import { login } from "@/apis/index";
import { useDispatch } from 'react-redux'
import styles from './index.module.less'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const onFinish = (values) => {
    login({ ...values }).then(res => {
      if (res.code == '000000') {
        navigate('/');
        setUserInfo(res.data)
        dispatch({
          type: 'setInfo',
          payload: {
            ...res.data
          }
        })
      }
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={styles.wrap}>
        <Form
          style={{ width: "300px" }}
          // initialValues={{
          //   account: true,
          //   password: true
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="account"
            initialValue="17751267600"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            initialValue="admin123456"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password prefix={ <LockOutlined />}  />
          </Form.Item>
          <Form.Item
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          >
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Login;
