import React from 'react';
import DonutChart from 'react-donut-chart';
import { Doughnut } from 'react-chartjs-2';
import './OrderSlider.css';
import data from './json.js'
import Chart from 'chart.js';


class OrderSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            items: data,

            chartData: {
                labels: ['a', 'b', 'c', 'd', 'e', 'f'],
                width: 100,
                height: 100,
                datasets: [
                    {

                        labels: 'pop',
                        data: [
                            40,
                            48,
                            78,
                            79,

                        ],
                        backgroundColor: [
                            'rgba(158,28,148,0.75)',
                            'rgba(71,0,103,0.75)',
                            'red'

                        ],
                        borderWidth: 3,
                        borderColor: 'transparent'
                    }

                ]
            }


        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickL = this.handleClickL.bind(this);

    }

    handleClick(e) {
        const a = document.getElementById("a");
        a.scrollBy(348, 0)
    }

    handleClickL(e) {
        const a = document.getElementById("a");
        a.scrollBy(-348, 0)
    }

    render() {
        const orderItems = data.map(item =>
            <div className="OrderBox-category">
                <div className="OrderBox-category__catName">{item.name}</div>
                <div className="OrderBox-category__total">
                    <div className="OrderBox-category__totalPrice"><small>$</small> {item.totalPrize}</div>
                    <div className="OrderBox-category__totalTitle">Total Orders</div>
                    <div className="OrderBox-category__dChart">
                        <Doughnut
                            data={{
                                labels: ['a ', 'b', 'c', 'd', 'e', 'f'],
                                datasets: [
                                    {
                                        data: item.adata,
                                        backgroundColor: [
                                            'purple',
                                            'blue',
                                            'green'
                                        ],

                                        borderWidth: 3,
                                        borderColor: 'transparent'
                                    }

                                ]
                            }
                            }
                            width={50}
                            height={50}
                            options={{
                                cutoutPercentage: 90,

                                legend: {
                                    display: false
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        )
        return (

            <div className="container-content">
                <div className="OrderBox">
                    <div className="OrderBox__text">Orders</div>
                    <div className="OrderBox__Card-container">
                        <div className="OrderBox__Card-content" id="a">
                            {orderItems}
                        </div>
                    </div>
                    <div className="OrderBox__nav-button-container">
                        <button class="OrderBox__nav-button buttonLeft" name="left" onClick={this.handleClickL}  ></button>
                        <button class="OrderBox__nav-button buttonRight" name="right" onClick={this.handleClick} ></button>

                    </div>
                </div>


            </div>

        );
    }
}

export default OrderSlider;
