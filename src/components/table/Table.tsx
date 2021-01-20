
import {useState} from 'react';
import { Tooltip, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { ColumnsState } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

export type TableListItem = {
    id: number;
    name: string;
    containers: number;
    creator: string;
    status: string;
    createdAt: number;
    progress: number;
    money: number;
    memo: string;
  };
  const tableListDataSource: TableListItem[] = [{
      id: 1,
      name: "test1",
      containers: 1,
      creator: "test1",
      status: "test1",
      createdAt: 2,
      progress: 2,
      money: 5,
      memo: "test1",
    }];
  
    const columns =[
    {
      title: '排序',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '应用名称',
      dataIndex: 'name',
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      valueEnum: {
        all: { text: '全部' },
        付小小: { text: '付小小' },
        曲丽丽: { text: '曲丽丽' },
        林东东: { text: '林东东' },
        陈帅帅: { text: '陈帅帅' },
        兼某某: { text: '兼某某' },
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: (
        <>
          创建时间
          <Tooltip placement="top" title="这是一段描述">
            <QuestionCircleOutlined style={{ marginLeft: 4 }} />
          </Tooltip>
        </>
      ),
      width: 140,
      dataIndex: 'createdAt',
      valueType: 'date',
    },
    {
      title: '备注',
      dataIndex: 'memo',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '操作',
      width: 180,
      valueType: 'option',
      render: () => [
        <a key="link">链路</a>,
        <a key="link2">报警</a>,
        <a key="link3">监控</a>,
      ],
    },
  ];
  export default function Table () {
    const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>({
      name: {
        show: false,
        order: 2,
      },
    });

    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const onSelectChange = (selectedRowKeys:any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
      };
    const rowSelection = {
        selectedRowKeys,
        onChange:onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          Table.SELECTION_NONE,
        ],
      };
    return (
      <ProTable
        columns={columns}
        rowSelection={rowSelection}
          tableAlertRender={({ selectedRowKeys, selectedRows, onCleanSelected }) => (
            <Space size={24}>
              <span>
                已选 {selectedRowKeys.length} 项
                <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
                  取消选择
                </a>
              </span>
              <span>{`容器数量: ${selectedRows.reduce(
                (pre, item) => pre + item.containers,
                0,
              )} 个`}</span>
              <span>{`调用量: ${selectedRows.reduce(
                (pre, item) => pre + item.callNumber,
                0,
              )} 次`}</span>
            </Space>
          )}
          tableAlertOptionRender={() => {
            return (
              <Space size={16}>
                <a>批量删除</a>
                <a>导出数据</a>
              </Space>
            );
          }}
        request={(params) =>
          Promise.resolve({
            data: tableListDataSource.filter((item) => {
              if (!params?.keyWord) {
                return true;
              }
              if (item.name.includes(params?.keyWord) || item.status.includes(params?.keyWord)) {
                return true;
              }
              return false;
            }),
            success: true,
          })
        }
        rowKey="id"
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={(map) => setColumnsStateMap(map)}
        search={false}
        dateFormatter="string"
        pagination={false}
        options={{
        //搜索
        search: false,
        //密度
        density:false,
        //全屏
        fullScreen:false,
        //刷新
        reload:false,
        //列设置
        setting:true
      }}
      />
    );
  };