import React from 'react'
import './RecentActivity.css'
import data from './json'

class RecentActivity extends React.Component {
    constructor() {
        super()
        this.state = {
            items: data
        }
    }

    handleClickRight(e) {
        const a = document.getElementById("slider");
        a.scrollBy(197, 0)
    }

    handleClickLeft(e) {
        const a = document.getElementById("slider");
        a.scrollBy(-197, 0)
    }
    render() {
        const qoute = data.map(item =>
            <div className="recent-activity__slider-box">
                <div className="recent-activity__slider-box__status-title">{item.name}</div >
                <div className="recent-activity__slider-box__status-time">{item.status}</div>
                <div className="recent-activity__slider-box__status-pic" ><img src="image/edit.png" style={{ padding: '7px' }} /></div>
                <div className="recent-activity__slider-box__status-name">qoute {item.no}</div>
            </div>
        )
        return (<div className="container-content">
            <div className="recent-activity__statusBar">
                <div className="recent-activity__statusBar__tickMark" ></div>
                <div className="recent-activity__statusBar__contents">
                    <div className="recent-activity__statusBar__contents-time">Just now</div>
                    <div className="recent-activity__statusBar__contents-value">You have created a new Quote VLC-001</div>
                </div>
                <div className="recent-activity__statusBar__delete" ></div>
            </div>
            <div className="recent-activity__title" >
                <div className="recent-activity__text">Recent Activity </div>
                <div className="recent-activity__slider" id="slider" >
                    {qoute}
                </div>
                <div className="recent-activity__button-container">
                    <div>...</div>
                    <button class="recent-activity__button bRight" name="right" onClick={this.handleClickRight} style={{}}></button>

                    <button class="recent-activity__button bLeft" name="left" onClick={this.handleClickLeft} style={{}} ></button>
                </div>
            </div>
        </div >)
    }

}

export default RecentActivity;

