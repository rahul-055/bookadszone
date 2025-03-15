import React from 'react';
import ComIcon from '../icon/ComIcon';
import { ICONS } from '../../../data/Icon';
import './commonheader.css';
type CommonHeaderProps = {
    isViewAll: boolean,
    header: string,
    viewAllRedirectUrl?: string,
}
function CommonHeader(props: CommonHeaderProps) {
    return (
        <div className='common-header flex-grop-2'>
            <h2 className='lbl-title-1'>{props.header}</h2>
            {props.isViewAll &&<div className="view-url flex-grop-2">
                 <a href={props.viewAllRedirectUrl} className='view lbl-title-4'>View All </a>
                <ComIcon badge={false} icon={ICONS.setting} />
            </div>}
        </div>
    );
}

export default CommonHeader;