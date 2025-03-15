import React from "react";
import "./popup.css";

interface PopupProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const PopUp: React.FC<PopupProps> = ({ isOpen, onClose, children , title }) => {
    return (
        <div className={`popup-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="title-close flex-grop-2 ">
                    <h4>{title}</h4>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="content">
                {children}
                </div>
            </div>
        </div>
    );
};

export default PopUp;
