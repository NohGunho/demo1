import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import Drilldown from 'highcharts-drilldown';
Drilldown(Highcharts);

// Create the chart
const config = {
    chart: {
        type: 'column'
    },
    title: {
        text: '2020년 01월 29일'
    },
    subtitle: {
        text: '전체:1,611,688 (메인 9,565 | 섹션 553,148 | 기사 1,048,979).'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'percent(%)'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:red">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '정치',
            y: 56.33,
            drilldown: 'Microsoft Internet Explorer'
        }, {
            name: '사회',
            y: 24.03,
            drilldown: 'Chrome'
        }, {
            name: '국제',
            y: 10.38,
            drilldown: 'Firefox'
        }, {
            name: '문화',
            y: 4.77,
            drilldown: 'Safari'
        }, {
            name: '오피니언',
            y: 0.91,
            drilldown: 'Opera'
        }, {
            name: '전국',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '스포츠',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '연예',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '라이프',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: 'WWW홈',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '포토조선',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '조선경제i',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: 'TV조선 뉴스',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '프리미엄',
            y: 0.2,
            drilldown: 'Opera'
        }, {
            name: '미생탈출',
            y: 0.2,
            drilldown: 'Opera'
        }]
    }],
    drilldown: {
        animation: false,
        series: [{
            name: 'Microsoft Internet Explorer',
            id: 'Microsoft Internet Explorer',
            data: [
                [
                    'v11.0',
                    24.13
                ],
                [
                    'v8.0',
                    17.2
                ],
                [
                    'v9.0',
                    8.11
                ],
                [
                    'v10.0',
                    5.33
                ],
                [
                    'v6.0',
                    1.06
                ],
                [
                    'v7.0',
                    0.5
                ]
            ]
        }, {
            name: 'Chrome',
            id: 'Chrome',
            data: [
                [
                    'v40.0',
                    5
                ],
                [
                    'v41.0',
                    4.32
                ],
                [
                    'v42.0',
                    3.68
                ],
                [
                    'v39.0',
                    2.96
                ],
                [
                    'v36.0',
                    2.53
                ],
                [
                    'v43.0',
                    1.45
                ],
                [
                    'v31.0',
                    1.24
                ],
                [
                    'v35.0',
                    0.85
                ],
                [
                    'v38.0',
                    0.6
                ],
                [
                    'v32.0',
                    0.55
                ],
                [
                    'v37.0',
                    0.38
                ],
                [
                    'v33.0',
                    0.19
                ],
                [
                    'v34.0',
                    0.14
                ],
                [
                    'v30.0',
                    0.14
                ]
            ]
        }, {
            name: 'Firefox',
            id: 'Firefox',
            data: [
                [
                    'v35',
                    2.76
                ],
                [
                    'v36',
                    2.32
                ],
                [
                    'v37',
                    2.31
                ],
                [
                    'v34',
                    1.27
                ],
                [
                    'v38',
                    1.02
                ],
                [
                    'v31',
                    0.33
                ],
                [
                    'v33',
                    0.22
                ],
                [
                    'v32',
                    0.15
                ]
            ]
        }, {
            name: 'Safari',
            id: 'Safari',
            data: [
                [
                    'v8.0',
                    2.56
                ],
                [
                    'v7.1',
                    0.77
                ],
                [
                    'v5.1',
                    0.42
                ],
                [
                    'v5.0',
                    0.3
                ],
                [
                    'v6.1',
                    0.29
                ],
                [
                    'v7.0',
                    0.26
                ],
                [
                    'v6.2',
                    0.17
                ]
            ]
        }, {
            name: 'Opera',
            id: 'Opera',
            data: [
                [
                    'v12.x',
                    0.34
                ],
                [
                    'v28',
                    0.24
                ],
                [
                    'v27',
                    0.17
                ],
                [
                    'v29',
                    0.16
                ]
            ]
        }]
    }
};

const HighCharts = () => {
    return (
           <ReactHighcharts config={config} ></ReactHighcharts>
    );
}

export default HighCharts;