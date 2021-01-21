import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsState } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import PaginationNum from './Pagination'

export default function TableList(params: any) {

    useEffect(() => {
        setColumnsStateMap(params.props.columnsStateMap)
    }, [params])

    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({});
    //分页
    const changeSize = (size: any) => {
        params.props.changeSize(size)
    }
    //选择列
    const onChange = (selectedRowKeys: any, selectedRows: any) => {
        params.props.selectedChange(selectedRowKeys, selectedRows)
    }

    const rowSelection = {
        onChange: onChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT]
    }

    return (
        <div>
            <ProTable
                rowKey="key"
                columns={params.props.columns}
                columnsStateMap={columnsStateMap}
                rowSelection={rowSelection}
                tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
                    <Space size={24}>
                        <span>
                            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>取消选择</a>
                        </span>
                    </Space>
                )}
                tableAlertOptionRender={false}
                dataSource={params.props.data}
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