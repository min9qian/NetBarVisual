//高峰时段
function high_time_24(specificDayLine, Options){

    var myChart = echarts.init(document.getElementById('pic1'),'dark');


    let option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoplay: true,
                playInterval: 1000,
                data: specificDayLine,

            },
            title: {
                text: "上网高峰时段"
            },
            legend: {
                show: true,
                data: ['A']
            },
            angleAxis: {
                type: 'category',
                data: oclock,
                boundaryGap: false
            },
            radiusAxis: {
                type: "value",
                min: 0,
                // max: 3000,
                interval: 500

            },
            polar: {},
            tooltip: {},
            series: [
                {
                    type: 'bar',
                    coordinateSystem: 'polar',
                    name: oclock,
                    stack: oclock,
                    color: "#1E90FF",
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
        },
        options:Options
    };

    myChart.clear();
    myChart.setOption(option);

}

//热度日历
function number_calendar(CalendarData) {
    var myChart = echarts.init(document.getElementById('pic2'),'dark');

    let Options = []



    for(let i=0; i<calendar_timeline.length; i++){
        Options.push(
            {
                series:[
                    {data:CalendarData[i]}
                ],
                calendar:[
                    {range:calendar_timeline[i]}
                ],
                visualMap:[
                    {max: Math.max(...CalendarData[i].map(d=>d[1]))}
                ]
            }
        )
    }

    let option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoplay: true,
                playInterval: 1000,
                data: calendar_timeline
            },
            title: {
                text: "上网人数热度日历"
            },
            visualMap: {
                show: false,
                min: 0,
                inRange: {
                    color: ['#0000CD'],
                    opacity: [0, 0.8]
                }
            },
            tooltip: {
                formatter: function (p) {
                    let format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
                    return '时间：' + format + '\n上网人数：' + p.data[1];
                }
            },
            calendar: {
                orient: 'vertical',
                cellSize: 43,
                left: 'center',
                yearLabel: {
                    show: false
                },
                dayLabel:{
                    color: 'white',
                    fontSize: 20
                },
                monthLabel:{
                    color: 'white',
                    fontSize: 30
                }
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
            }
        },
        options:Options
    };

    myChart.clear();
    myChart.setOption(option);
}


// //男女柱状图
// function specific_male_female_barPic(male, female, daytime) {
//     var myChart = echarts.init(document.getElementById('pic3'),'dark');
//
//     var option = {
//         backgroundColor:'rgba(50, 50, 50, 0)',
//         title:{
//             text: '男女比例堆积条形图'
//         },
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         legend: {
//             data: ['男性', '女性']
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         xAxis: {
//             type: 'category',
//             data: daytime
//         },
//         yAxis: {
//             type: 'value'
//         },
//         dataZoom: [
//             {
//                 type: 'inside'
//             }
//         ],
//         series: [
//             {
//                 name: '男性',
//                 type: 'bar',
//                 stack: '总量',
//                 data: male
//             },
//             {
//                 name: '女性',
//                 type: 'bar',
//                 stack: '总量',
//                 data: female
//             }
//         ]
//     };
//     myChart.clear();
//     myChart.setOption(option);
// }


// //男女比例柱状堆叠图
// function male_female_barPic(male, female, daytime) {
//     var myChart = echarts.init(document.getElementById('pic3'),'dark');
//
//     var option = {
//         backgroundColor:'rgba(50, 50, 50, 0)',
//         title:{
//             text: '男女比例堆积条形图'
//         },
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         legend: {
//             data: ['男性', '女性']
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         xAxis: {
//             type: 'category',
//             data: daytime
//         },
//         yAxis: {
//             type: 'value'
//         },
//         dataZoom: [
//             {
//                 type: 'inside'
//             }
//         ],
//         series: [
//             {
//                 name: '男性',
//                 type: 'bar',
//                 stack: '总量',
//                 data: male
//             },
//             {
//                 name: '女性',
//                 type: 'bar',
//                 stack: '总量',
//                 data: female
//             }
//         ]
//     };
//     myChart.clear();
//     myChart.setOption(option);
// }

//不同年龄阶段上网Pic
function age_barPic(daytime, age, lenged_data) {
    var myChart = echarts.init(document.getElementById('pic4'),'dark');
    var COLORS = ['#ffffff', '#b4e0f3', '#70b4eb', '#1482e5', '#1c3fbf', '#070093'];
    var series = [];
    for(var i=0; i<lenged_data.length; i++){
        series.push({
            name: lenged_data[i],
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: age[i],
            color: COLORS[i]
        })
    }

    // 指定图表的配置项和数据
    var option = {
        backgroundColor:'rgba(50, 50, 50, 0)',
        title: {
            text: '年龄分布堆积折线图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: lenged_data,
            padding:[35,35,100,100]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: daytime
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: series
    };
    myChart.clear();
    myChart.setOption(option);
}

function province_riverPic(hometown_data, hometown_links) {


    var myChart = echarts.init(document.getElementById('pic1'),'dark');

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '本市外来人口数量桑基图'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },

        series: {
            type: 'sankey',
            lineStyle: {
                color: '#FF0000'
            },
            layout: 'none',
            focusNodeAdjacency: 'allEdges',
            data: hometown_data,
            links: hometown_links
        }
    };
    myChart.clear();
    myChart.setOption(option);
}

function province_riverPic_2(hometown_data, hometown_links) {

    var myChart = echarts.init(document.getElementById('pic2'),'dark');

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '本网吧外来人口数量桑基图'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: {
            type: 'sankey',
            lineStyle: {
                color: '#FF0000'
            },
            layout: 'none',
            focusNodeAdjacency: 'allEdges',
            data: hometown_data,
            links: hometown_links
        }
    };
    myChart.clear();
    myChart.setOption(option);
}

function minorPic(x, y1, y2) {
    var myChart = echarts.init(document.getElementById('pic1'));

    maxNum_1 = d3.max(y1)
    maxNum_2 = d3.max(y2)
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '未成年人接纳关系',
            align: 'right'
        },
        backgroundColor:'rgba(50, 50, 50, 0)',
        grid: {
            bottom: 80
        },
        legend: {
            data: ['人数', '时长'],
            padding:[35,35,100,100]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#505765'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: false},
                data: x.map(function (str) {
                    return str.replace(' ', '\n');
                })
            }
        ],
        yAxis: [
            {
                name: '人数(个)',
                type: 'value',
                max: maxNum_1
            },
            {
                name: '时长(s)',
                max: maxNum_2,
                type: 'value'
            }
        ],
        series: [
            {
                name: '人数',
                type: 'line',
                animation: false,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                data: y1
            },
            {
                name: '时长',
                type: 'line',
                yAxisIndex: 1,
                animation: false,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                data: y2
            }
        ]
    };

    myChart.clear();
    myChart.setOption(option);
}

function minorPic_2(x, y1, y2) {
    var myChart = echarts.init(document.getElementById('pic2'),'dark');


    option = {
        title:{
          text: '接纳未成年上网人数与时长'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['Time', 'People']
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: x,
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Time',
                min: 0,
                max: 500,
                interval: 100,
                axisLabel: {
                    formatter: '{value} s'
                }
            },
            {
                type: 'value',
                name: 'People',
                min: 0,
                max: 10,
                interval: 2,
                axisLabel: {
                    formatter: '{value} people'
                }
            }
        ],
        series: [
            {
                name: 'Time',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' s';
                    }
                },
                data: y2
            },
            {
                name: 'People',
                type: 'bar',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' people';
                    }
                },
                data: y1
            }
        ]
    };


    myChart.clear();
    myChart.setOption(option);
}

function social_group_barchart(x, y){
    var myChart = echarts.init(document.getElementById('pic1'),'dark');


    option = {
        title:{
            text: '团伙内个人上网时长'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Time']
        },
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                // data: [120, 200, 150, 80, 70, 110, 130],
                data: y,
                type: 'bar'
            }
        ]
    };


    myChart.clear();
    myChart.setOption(option);
}

function hot_net_rank(x, y){
    var myChart = echarts.init(document.getElementById('pic3'),'dark');


    option = {
        title:{
            text: '热门网吧柱状图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        // legend: {
        //     data:
        // },
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '上网人数',
                // data: [120, 200, 150, 80, 70, 110, 130],
                data: y,
                type: 'bar',
                color: "#1E90FF",
            }
        ]
    };


    myChart.clear();
    myChart.setOption(option);
}