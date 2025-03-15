import React, { useState } from 'react';

interface CustomSelectProps {
    options: string[];
    value: string;
    onChange?: (value: string) => void;
}

function SelectOption(props: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (selectedValue: string) => {
        if (props.onChange) {
            props.onChange(selectedValue);
            setIsOpen(false);
        }
    };

    return (
        <div className="custom-dropdown">
            <div className="dropdown-header lbl-title-4" onClick={() => setIsOpen(!isOpen)}>
                {props.value || 'Select'}
                <span className={`arrow ${isOpen ? "up" : "down"}`}>&#9662;</span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {props?.options.map((option: string, index: number) => (
                        <li
                            key={index}
                            className={`dropdown-item lbl-title-4 ${option === props.value ? "selected" : ""}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SelectOption;