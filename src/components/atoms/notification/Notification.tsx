import React from 'react';
import { NotificationProps } from '../../../typescheck/interfaces';
import './notification.css'

export const Notification: React.FC<NotificationProps> = ({ list, onNotificationSelect }) => {
    return (
        <>
            <div className="top-notification-spa">
                <div className="lt-rt flex-grop-4">
                    <p>Notification</p>
                    <a href="#">Clear All</a>
                </div>
                <div className="over-scroll">
                    {list && list.map((item: any, index: number) => (
                        <div className='notification-list-sec cursor' key={index} onClick={() => onNotificationSelect && onNotificationSelect(item)}>
                            <div className="user-img">
                                <img src={item.userImage} alt="" />
                            </div>
                            <div className="context">
                                <p>{item.message}</p>
                                <span>{item.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="view-all flex-grop-3">
                    <a href="#">View all Notifications</a>
                </div>
            </div>
        </>
    )
}
