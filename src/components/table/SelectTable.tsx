import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

  export default function SelectTable(params: any) {
    const [defaults, setDefaults] = useState("全部")
    const handleMenuClick = (e: any) => {
        setDefaults(e.key)
      params.list.map((item: any, index: number) => {
        if (index > 0 && item[0] === e.key) {
            params.list[1](params.list[0],item[1])
        }
      })
    }
  
    const userInfoMenu = (
      <Menu onClick={handleMenuClick}>
        {
          params.list.map((item: any, index: number) => {
            if (index > 1) {
              return <Menu.Item key={item[0]}>{item[0]}</Menu.Item>
            }
          })
        }
      </Menu>
    );
    return (<Dropdown overlay={userInfoMenu}>
      <span className="ant-dropdown-link">
        ({defaults}) <DownOutlined />
      </span>
    </Dropdown>)
  }