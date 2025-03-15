import React from 'react';
import './expobtn.css'
import pdf from '../../../assets/images/commonIcons/pdf.png'
import xls from '../../../assets/images/commonIcons/xls.png'
interface ButtonProps {
    onClick?: () => void;
    type: "xls" | "pdf";

}

export default function ExpoBtn(props: ButtonProps) {
    return (
        <button className={`expo-btn`} onClick={props.onClick}>
            {props.type && <img src={props.type === 'pdf' ? pdf : xls} alt="button-icon" className="btn-icon" />}
        </button>
    )
}
