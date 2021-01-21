import React from 'react';
import { Table } from 'antd';
import PaginationNum from './Pagination'

export default function TableBasic(props: any) {
    const changeSize = (size: any) => {
        console.log(size)
    }
    return (
        <div>
            <Table columns={props.columns} dataSource={props.data} pagination={props.false} />
            <PaginationNum change={changeSize} />
        </div>
    );
};