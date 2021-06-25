import React, { useState, useEffect } from 'react';
import { Space, Table, Button } from 'antd';
import type { ColumnsState } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import PaginationNum from './Pagination'

export default function TableOptional(params: any) {
    useEffect(() => {
        setColumnsStateMap(params.props.columnsStateMap)
        setSelectedId(params.props.selectedId)
    }, [params])

    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({});
    const [selectedId, setSelectedId] = useState(params.props.selectedId);

    //分页
    const changeSize = (size: any) => {
        params.props.changeSize(size)
    }
    let TableProps={
        changeSize:changeSize,
        count:params.props.count
    }
    //选择列
    const onChange = (selectedRowKeys: any, selectedRows: any) => {
        params.props.selectedChange(selectedRowKeys, selectedRows)
    }
    //全选
    const onChangeAll = (selectedRowKeys: any, selectedRows: any) => {
        params.props.selectedChangeAll(selectedRowKeys, selectedRows)
    }
    //控制是否可选择
    let rowSelection = {}
    if(params.props.ifRowSelection){
        rowSelection = {
            selectedRowKeys:selectedId,
            onChange: onChange,
            onSelectAll:onChangeAll,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: '全选所有',
                    onSelect: (changableRowKeys:any) => {
                      /* let newSelectedRowKeys = [];
                      newSelectedRowKeys = changableRowKeys.filter((key:any, index:number) => {
                        if (index % 2 !== 0) {
                          return false;
                        }
                        return true;
                      }); */
                      console.log(changableRowKeys)
                      setSelectedId(changableRowKeys);
                    },
                  },
                  {
                    key: 'even',
                    text: '取消所有',
                    onSelect: () => {
                      setSelectedId([]);
                      return false;
                    },
                },
            ]
        }
    }else{
        rowSelection=false
    }
    return (
        <div>
            <ProTable
                rowKey="id"
                columns={params.props.columns}
                columnsStateMap={columnsStateMap}
                expandable={
                    params.props.ifExpand && {
                      expandedRowRender: (record: any) => <p>{record[params.props.name]}</p>,
                      expandIconColumnIndex:params.props.index,//ant-table-row-expand-icon-cell
                      expandIcon: ({ expanded, onExpand, record }) => <Button type="primary" size="small" onClick={e =>onExpand(record, e)}>查看</Button>
                    }
                  }
                rowSelection={rowSelection}
                tableAlertRender={({ selectedRowKeys, onCleanSelected }) => (
                    <Space size={24}>
                        <span>
                            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected} href='##'>取消选择</a>
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
            <PaginationNum change={TableProps} />
        </div>
    );
};