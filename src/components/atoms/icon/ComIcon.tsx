import React from 'react';
import { ComIconProps } from '../../../typescheck/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.css';
const ComIcon: React.FC<ComIconProps> = ({ icon, className, badge ,onSHowOrRedirect}) => {
    return (
        <div className="icon-drop" onClick={onSHowOrRedirect}>
            <div className={`common-icon flex-grop-3 ${className}`} >
                <FontAwesomeIcon icon={icon} />
            </div>
            {badge && <div className="badge border-radius-50 "><span className='flex-grop-3'>10</span></div>}
        </div>
    );
}

export default ComIcon;