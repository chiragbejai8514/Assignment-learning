import React from 'react';
import './SalesGraph.css';
import Highcharts, { Point } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



function SalesGraph() {
    var a = 0;

    const options = {
        chart: {
            type: 'spline',
            inverted: false,
            backgroundColor: 'rgba(89,12,149,1)',
            height: 260,
            width: 1000,
            marginLeft: -75,
            scrollablePlotArea: {
                minWidth: 300,
                scrollPositionX: 1
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['0', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            lineColor: 'null',
            labels: {
                style: {
                    color: 'rgba(173,179,255,1)',
                }
            }
        },

        yAxis: {
            gridLineColor: 'null',
            title: {
                text: ''
            },
            labels: {
                format: '{null}'
            },
            lineWidth: 0
        },
        legend: {
            enabled: false
        },
        tooltip: {
            animation: true,
            outside: true,
            useHTML: true,
            followPointer: false,
            shared: true,
            shadow: false,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: 0,


            crosshairs: {
                color: '#5D5D5D',
                dashStyle: 'solid',
                width: 2,
            },
            borderWidth: 10,



            formatter: function () {
                const temp = this.points.reduce(function (month, point) {
                    //console.log(point.point.clientX)

                    a = point.point.clientX;
                    return `<div  class="company-sales__tooltip-body">
                    
                        <div class="company-sales__tooltip-body__month"> ` + month + ` </div>
                         <div class="company-sales__tooltip-body__content">
                            <div class="company-sales__tooltip-body__content-head">` + point.series.name + `</div>
                            <div class="company-sales__tooltip-body__content-value">` + point.y + `$</div>
                         </div>
                    </div>
                    `;
                }, this.x);
                return (`<b><div class="company-sales__tooltip" >` + temp + `</div></b>`)

            },
            positioner: function (width, height, point) {
                console.log(a - 187)
                if (a > 187) {
                    a = a - 187
                }

                return {

                    x: 250,
                    y: 100,
                }
            },

        },


        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            lineColor: 'red',
            name: 'Inc',
            data: [0, 298.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        },
        {
            lineColor: 'white',

            name: 'Exp  ',
            data: [0, 238.9, 41.5, 406.4, 149.2, 134.0, 276.0, 435.6, 58.5, 216.4, 194.1, 95.6, 54.4]
        }]
    }

    const companySalesTitle = () => {
        return (<div className="company-sales__title">Your sales

            <div style={{ position: 'relative', bottom: '-140px' }}>...</div></div>
        );
    };

    const companySalesGraph = () => {
        return (<div className="company-sales__graph">
            <HighchartsReact highcharts={Highcharts} options={options} style={{ overflow: "none" }} />
        </div>
        );
    };

    return (

        <div className="company-sales__container">
            {companySalesTitle()}
            {companySalesGraph()}
        </div>

    );
}

export default SalesGraph;
