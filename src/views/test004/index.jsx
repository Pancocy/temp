import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Row, Col } from 'antd';
import Search from '@/components/search/Index';

const Test004 = () => {
    const navigate = useNavigate()
    const searchRef = useRef({})
    // useEffect(() => {
    //   // console.log(getInfo())
    //   console.log(searchRef)
    // }, [])
    const getParams = () => {
        console.log(searchRef);
    }

    return (
        <>
            <button onClick={getParams}>获取</button>
            <Form
                ref={searchRef}            >
                <Col span={6}>
                    <Form.Item
                        name="note"
                        label="Note"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="notea"
                        label="Note"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="notea"
                        label="Note"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="note"
                        label="Note"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="note"
                        label="Note"
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Form>
            <Search ref={searchRef}>
            </Search>
        </>
    );
};
export default Test004;