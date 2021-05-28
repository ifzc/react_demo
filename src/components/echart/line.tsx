import React from 'react';
// import {Card} from 'antd';
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default function Line(prop:any) {
        // 绘制图表
        const getOption=()=>{
            let option = {
                tooltip: {
                  trigger: 'axis',
                  /* formatter: function (param:Array<number>) {
                    let val = timeArrYear[param[0].dataIndex] + '<br/>' + param[0].marker + param[0].seriesName +
                      '：' + (param[0].value) + '%';;
                    return val;
                  } */
                },
                legend: {
                  x: 'left',
                  data: ['cpu使用率']
                },
                calculable: true,
                dataZoom: {
                  show: true,
                  realtime: true,
                  start: 0,
                  end: 100
                },
                xAxis: [{
                  type: 'category',
                  boundaryGap: false,
                  data:  [
                    '2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00']
                }],
                yAxis: [{
                  type: 'value',
                  scale: true,
                  max: 100,
                  min: 0,
                  splitNumber: 2,
                }],
                series: [{
                  name: 'cpu使用率',
                  smooth: true,
                  type: 'line',
                  data: [10,20,40,0,30,100,80,90,10,20,40,0,30,100,80,90,60,2,5,100]
                },],
              };
        return option
        }

    return ( 
        <div title="折线图表之一" style={{width:'100%'}}>
        <ReactEcharts option={getOption()} theme="Imooc" style={{height:'228px',width:'100%'}}/>
    </div>
    );
    }