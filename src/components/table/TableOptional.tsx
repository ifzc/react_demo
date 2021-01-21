import React, { useState } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsState } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import PaginationNum from './Pagination'

const data = [
    {
        key: 1,
        name: 'Edward King 1',
        age: 32,
        address: `London, Park Lane no.1`,
    }
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
];

export default function TableList(props: any) {
    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
        address: {
            show: false,
            order: 2,
        },
    });
    const changeSize = (size: any) => {
        console.log(size)
    }
    return (
        <div>
            <ProTable
                rowKey="key"
                columns={columns}
                columnsStateMap={columnsStateMap}
                rowSelection={{
                    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
                }}
                tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
                    <Space size={24}>
                        <span>
                            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>取消选择</a>
                        </span>
                    </Space>
                )}
                tableAlertOptionRender={false}
                dataSource={data}
                options={{
                    //搜索
                    search: false,
                    //密度
                    density: false,
                    //全屏
                    fullScreen: false,
                    //刷新
                    reload: false,
                    //列设置
                    setting: true
                }}
                onColumnsStateChange={(map) => setColumnsStateMap(map)}
                dateFormatter="string"
                pagination={false}
                search={false}
            />
            <PaginationNum change={changeSize} />
        </div>
    );
};