import React, { forwardRef, useImperativeHandle, useState } from "react";

import { Button, Form, Input, Row, Col, } from 'antd';

import Pubsub from 'pubsub-js'

const Search = forwardRef((props,ref) => {
    const [form] = Form.useForm();
    const [params, setParams] = useState({})
    const onFinish = (values) => {
        setParams({ ...values })
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <>
            <Form onFinish={onFinish} ref={ref}>
                <Form.Item name='name' lable='姓名'>
                    <Input />
                </Form.Item>
                <Form.Item name='age' lable='年龄'>
                    <Input />
                </Form.Item>
                <Button
                    htmlType="button"
                    style={{
                        margin: '0 8px',
                    }}
                    onClick={onReset}>
                    重置
                </Button>
                <Button type="primary" htmlType="submit">
                    查询
                </Button>
            </Form>
        </>
    )
})
export default Search