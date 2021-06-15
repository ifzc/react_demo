import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default function Time() {
  const onChange=(dates:any, dateStrings:any)=> {
      if(dates!=null && dateStrings!=null){
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      }
  }
    return(
        <Space direction="vertical" size={12}>
          <RangePicker
      ranges={{
        '昨天': [moment().subtract('days', 1), moment()],
        '最近一周': [moment().subtract('days', 6), moment()],
        '最近一个月': [moment().subtract('days', 30), moment()],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
        </Space>
      );
}
