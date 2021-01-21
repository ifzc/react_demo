import React from 'react';
import { Table } from 'antd';
import PaginationNum from './Pagination'

export default function TableBasic(params: any) {
    const changeSize = (size: any) => {
        params.props.changeSize(size)
    }
    return (
        <div>
            <Table columns={params.props.columns} dataSource={params.props.data} pagination={false} />
            {!params.props.isShow &&
                <PaginationNum change={changeSize} />
            }
        </div>
    );
};