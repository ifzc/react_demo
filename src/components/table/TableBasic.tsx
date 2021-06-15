import React from 'react';
import { Table, Button } from 'antd';
import PaginationNum from './Pagination'

export default function TableBasic(params: any) {
    const changeSize = (size: any) => {
        params.props.changeSize(size)
    }
    return (
        <div>
            <Table style={{marginTop:"20px"}} columns={params.props.columns} dataSource={params.props.data} pagination={false} rowKey="id" expandable={
                    params.props.ifExpand && {
                      expandedRowRender: (record: any) => <p>{record[params.props.name]}</p>,
                      expandIconColumnIndex:params.props.index,//ant-table-row-expand-icon-cell
                      expandIcon: ({ expanded, onExpand, record }) => <Button type="primary" size="small" onClick={e =>onExpand(record, e)}>查看</Button>
                    }
                  }/>
            {!params.props.isShow &&
                <PaginationNum change={changeSize} />
            }
        </div>
    );
};