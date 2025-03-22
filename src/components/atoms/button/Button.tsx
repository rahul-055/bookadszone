interface ButtonProps {
    text: string
    type: "button" | "submit"
    className?: string
    onClick?: () => void;
}
export default function Button(props: ButtonProps) {
    return (
        <button type={props.type}className={`common-btn ${props.className}`} onClick={props.onClick}>
            <i className="mdi mdi-plus-circle-outline"></i> {props.text}
        </button>
    );
}