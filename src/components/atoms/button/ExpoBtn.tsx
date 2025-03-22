import './expobtn.css'
import pdf from '../../../assets/images/commonIcons/pdf.png'
import xls from '../../../assets/images/commonIcons/xls.png'
import refresh from '../../../assets/images/commonIcons/referesh.png'
interface ButtonProps {
    onClick?: () => void;
    type: "xls" | "pdf" | "refresh";

}

export default function ExpoBtn(props: ButtonProps) {
    return (
        <button className={`expo-btn flex-grop-3`} onClick={props.onClick}>
            {props.type && <img src={props.type === 'pdf' ? pdf : props.type === 'xls' ? xls : refresh} alt="button-icon" className="btn-icon " />}
        </button>
    )
}
