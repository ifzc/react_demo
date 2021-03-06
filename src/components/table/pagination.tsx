import { Pagination } from 'antd';

export default function PaginationNum(params: any) {
    let num = {
        current: 1,
        pageSize: 10,
    }
    //pageSize 变化的回调
    const onShowSizeChange = (current: number, pageSize: number) => {
        console.log(current, pageSize);
        num.current = current
        num.pageSize = pageSize
        params.change.changeSize(num)
    }
    //	页码改变的回调，参数是改变后的页码及每页条数
    const onChange = (current: number, pageSize: any) => {
        console.log(current, pageSize);
        num.current = current
        num.pageSize = pageSize
        params.change.changeSize(num)
    }
    return (
        <Pagination
            total={params.change.count}
            showSizeChanger
            showQuickJumper
            showTotal={(total: any) => `共${total}条`}
            onShowSizeChange={onShowSizeChange}
            onChange={onChange}
            className="table-pagination"
            style={{marginTop:"20px"}}
        />
    );
};