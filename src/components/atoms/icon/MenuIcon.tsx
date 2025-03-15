import React from 'react';
import { IconProps } from '../../../typescheck/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MenuIcon: React.FC<IconProps> = ({ icon, className }) => {
    return (
        <div className={className} >
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default MenuIcon;