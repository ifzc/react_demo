import React, { useState }from 'react'
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
      var lineSeries:any =[]
    for (let i = 0; i < prop.data.ydata.length; i++) {
        const element = prop.data.ydata[i];
        lineSeries.push({
            name: prop.data.legend[i],
            smooth: true,
            type: 'line',
            data: element
          })
    }
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
                  data: prop.data.legend
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
                  data:  prop.data.xdata
                }],
                yAxis: [{
                  type: 'value',
                  scale: true,
                  /* max: 100,
                  min: 0, */
                  splitNumber: 2,
                }],
                series: lineSeries,
              };
        return option
        }

    return ( 
        <div style={{width:'100%'}}>
        <ReactEcharts option={getOption()} theme="Imooc" style={{height:'228px',width:'100%'}}/>
    </div>
    );
    }