import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
export default function Test002() {
  const location = useLocation();
  const ulRef = useRef(null)
  const [list, setList] = useState([
    {
      name: '张三',
      age: 10
    },
    {
      name: '里斯',
      age: 20
    }
  ])
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log(ulRef.current.offsetHeight)
    console.log(location)
  }, [list])
  const handleClick = (e) => {
    console.log(e)
  }
  const deleteItem = (i) => {
    list.splice(i, 1)
    setList([...list])
  }
  const add = (e) => {
    setNum(num + e)
  }
  return (
    <div>
      <div>{num}</div>
      <button onClick={()=>add(5)}>递增</button>
      <ul ref={ulRef}>
        {
          list.map((item, index) => (
            <li key={item.name} style={{ lineHeight: "30px" }}>
              <span onClick={() => handleClick(item)}>{item.name}</span>
              <button onClick={() => deleteItem(index)}>删除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
