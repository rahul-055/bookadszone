import React, { useState } from 'react';
import ComIcon from '../../atoms/icon/ComIcon';
import { Notification } from '../../atoms/notification/Notification';
import { ICONS } from '../../../data/Icon';
import { notifications } from '../../../data/NotificationList';
import './iconwithdropdown.css'

export const IconWithDropDown = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {
        setIsShow(true);
    }
    const handleSelect = (item: any) => {
        setIsShow(false);
    }
    return (
        <div className='icon-with-drop-down-sec'>
            <ComIcon icon={ICONS.notification} onSHowOrRedirect={handleShow} className='border-icon-backround border-radius border-icon is-show' badge={true} />
            {isShow &&
                <div className="list">
                    <Notification list={notifications} onNotificationSelect={handleSelect} />
                </div>
            }
        </div>
    );
}

export default IconWithDropDown;