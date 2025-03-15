import React from 'react';
import { CardIcon } from '../../atoms/icon/CardIcon';
import './menucard.css'
type MenuCardLeftAlignProps = {
    title?: string,
    subtilte?: string,
    icon?: any,
    className? : string
}

const MenuCardLeftAlign = (props: MenuCardLeftAlignProps) => {
    return (
        <div className={`menu-card-left ${props.className}`}>
            <div className="icon-count">
                <div className="icon">
                    <CardIcon icon={props.icon} />
                </div>
                <div className="count">
                    <h2 className='lbl-title-1'>{props.title}</h2>
                    <p className='lbl-title-4'>{props.subtilte}</p>
                </div>
            </div>
        </div>
    );
}

export default MenuCardLeftAlign;