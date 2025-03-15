import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.css';

type CardIconProps = {
    icon: any;
    className?: string;
}
export const CardIcon = (props: CardIconProps) => {

    return (
        <div className={`card-icon flex-grop-3 ${props.className}`}>
            <div className="icon">
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </div>
    );
}
