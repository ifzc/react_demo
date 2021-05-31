import React from 'react';
// import {Card} from 'antd';
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default function Bar(prop:any) {
        // 绘制图表
        const getOption=()=>{
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: prop.data.xdata
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: prop.data.ydata,
                type: 'bar',
                 label: {
                show: true,
                position: 'top'
            },
            }]
        };
        return option
        }

    return ( 
        <div title="折线图表之一" style={{width:'100%'}}>
        <ReactEcharts option={getOption()} theme="Imooc" style={{height:'330px',width:'100%'}}/>
    </div>
    );
}