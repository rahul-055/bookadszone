import React from 'react';
import { InputProps } from '../../../typescheck/interfaces';
import './input.css'

const Input: React.FC<InputProps> = ({ className, value, onChange, placeholder, type, disabled }) => {
    return (
        <React.Fragment>
            <div className="input-sec">
                <input type={type} className={`lbl-title-3 ${className} `} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} />
            </div>
        </React.Fragment>
    );
}

export default Input; 