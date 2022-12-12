
import React, { useEffect, useRef, useState,forwardRef } from 'react';
import { Button } from 'antd';
import Search from '@/components/search/Index';
const Test004 = () => {
  const myRef = useRef()
  const getIns= ()=>{
    console.log(myRef.current.getFieldValue());
  }

  return (
    <>
      <Button onClick={getIns} style={{marginBottom:20}}>获取</Button>
      <Search ref = {myRef} ></Search>
    </>
  )
}
export default Test004;