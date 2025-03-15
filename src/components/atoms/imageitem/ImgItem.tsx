import React from 'react';
import './imgItem.css';
import dummy from '../../../assets/images/logo/logo.png'
import { ImgItemProps } from '../../../typescheck/interfaces';
const ImgItem: React.FC<ImgItemProps> = ({ className, onDrop }) => {
    return (
        <div className={`img-drop `} onClick={onDrop} >
            <div className={`${className} img_size`} >
                <img src={dummy} alt="" />
            </div>
        </div >
    );
}
export default ImgItem;