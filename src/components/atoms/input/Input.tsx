import React from 'react';
import { InputProps } from '../../../typescheck/interfaces';
import './input.css'

const Input: React.FC<InputProps> = ({ className, value, onChange, placeholder, type, name ,id,disabled=false ,pattern , }) => {
     console.log(className,"className")
    return (
        <React.Fragment>
            
                <input type={type} className={`lbl-title-3 ${className} `} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled} name={name} id={id} pattern={pattern} required/>
            
        </React.Fragment>
    );
}

export default Input; 