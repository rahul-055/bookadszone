import React from 'react'
import { CommonContext } from '../../../content/commoncontext/CommonHeaderText';
interface DownloadBtnProps {
    text: string
    className?: string
    onClick?: () => void;
}
export default function DownloadBtn(props: DownloadBtnProps) {
    return (
        <button className={`common-btn ${props.className}`} onClick={props.onClick}>
            <i className="mdi mdi-download"></i> {`${CommonContext.importText} ${props.text}`}
        </button>
    )
}
