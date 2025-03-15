import './dropdown.css'
import { DropdownProps } from '../../../typescheck/interfaces';


export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    return (
        <div className="dropdown-sec">
            <div className="custom-dropdown">
                <div className="dropdown-selected">Select option</div>
                <div className="dropdown-options">
                    {options && options.map((item, index: number) => (
                        <div className="dropdown-option" key={index}>
                            <img src={item.imgSrc} alt="Volvo" />
                            <span>{item.label}</span>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
}