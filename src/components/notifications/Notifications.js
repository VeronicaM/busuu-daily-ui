import React from 'react';
import './notifications.scss';
import axios from 'axios';

import CommentIcon from '../icons/CommentIcon.js';
import FollowerIcon from '../icons/FollowerIcon.js';
import LikeIcon from '../icons/LikeIcon.js';

const filename = 'NotificationsFeed.js';

const iconsClasses = {
    'comment': <CommentIcon />,
    'follower': <FollowerIcon />,
    'like': <LikeIcon />
}
export default class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            isLoading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        const onError = (ex) => {
            console.log('Something when wrong -', filename, ' ', ex.response);
            this.setState({ isLoading: false, error: true });
        }

        const onSuccess = (response) => {
            this.setState({ notifications: response.data.notifications, isLoading: false });
        }

        axios.get(`data.json`)
            .then(onSuccess).catch(onError);
    }

    render() {
        const notifications = Object.keys(this.state.notifications).map((day, dayIndex)=>{
            
            const notificationsPerDayTemplate = this.state.notifications[day].map((notification, index) => {
                
                const iconType = iconsClasses[notification.type] || iconsClasses.like ;

                return (<div className="notifications__item" key={index}>
                            <div className="notification__text-container"> 
                                <div className="notification__title"> <strong> {notification.author} </strong> {notification.title} </div>
                                <div className="notification__timestamp"> {notification.timestamp} </div> 
                            </div>
                            <div className="notification__type"> {iconType} </div>
                    </div>
                );
            });

            return <div key={dayIndex}>
               <div className="notifications__header"> {day} </div>
               <div> {notificationsPerDayTemplate} </div>
            </div>
        });

        return (<div className="notifications__wraper">
            {this.state.error && <div> Could not fetch data </div>}
            {this.state.isLoading && <div className="main__loader"> Loading... </div>}
            <div className="notifications__list">
                {notifications}
            </div>
        </div>
        );
    }
}



