import React, { useState, useEffect } from "react";
import data from "./json";
import './ContentFour.css';

function ContentFour() {
    const [profiles, setProfiles] = useState(data.profiles);
    const [orders, setOrders] = useState(data.orders);
    const [activeId, setActiveId] = useState(1);

    useEffect(() => {
        const container = document.getElementById('friends-scroll');
        const profileBoxes = document.getElementsByClassName('friends__list-scroll__profile-box');
        container.addEventListener("scroll", (event) => {
            let parentDimension = event.target.getBoundingClientRect();
            let leftRange = parentDimension.left;
            let rightRange = parentDimension.right;
            let midPoint = ((leftRange + rightRange) / 2);
            let childBoxLeft = midPoint - 100;
            let childBoxRight = midPoint + 100;

            let profilesToMove = 0;
            for (let profileBox of profileBoxes) {
                let childDimension = profileBox.getBoundingClientRect();
                if (childBoxLeft < childDimension.left && childBoxRight > childDimension.right) {
                    setActiveId(profileBox.id);
                }
            };

            let reachedEnd = false;
            var newScrollLeft = event.target.scrollLeft;
            var divWidth = event.target.offsetWidth;
            var scrollwidth = event.target.scrollWidth;
            if (newScrollLeft > 790) {
                reachedEnd = true;
                const a = document.getElementById("friends-scroll");
                a.scrollTo(0, 0);
            }
        });
    }, [])


    const profilesView = profiles.map((item, index) =>

        <div className={`friends__list-scroll__profile-box ${parseInt(activeId) === item.id ? 'friends__list-scroll__profile-box--active' : ''}`} key={`p_${index}`} id={item.id} title={item.id}><div>

            <img src={item.backImage} className="friends__list-scroll__profile-box__image" /></div></div>)

    const ordersView = orders.map((item, index) =>
        <div className="newOrder-itemView">
            <div className="pic">
                <img src={item.profilePicture} className="pic-item" />
            </div>
            <div className="name"><div className="name-item">{item.name}</div></div>
            <div className="friends">
                <div className="newOrder-friends-list">1</div>
                <div className="newOrder-friends-list"></div>
            </div>
            <div className="cash"><div className="cash-item">${item.totalPrice}</div></div>
        </div>
    )

    return (<div className="container-content" >
        <div className="friendsa">
            <div className="friends__list">
                <div className="friends__list-action">
                    <div className="friends__list-action--call"></div>
                    <div className="friends__list-action--text"></div>
                </div>
                <div className="friends__list-scroll" id="friends-scroll">
                    {profilesView}
                </div>
                <div className="friends__list-chat"><div className="friends__list-chat-title">chat</div></div>
            </div>
        </div>


        <div className="newOrder">
            <div className="newOrder-header"><div className="name-ite">New Orders</div></div>
            <div className="newOrder-body">
                {ordersView}
            </div>
        </div >
    </div>)
}

export default ContentFour