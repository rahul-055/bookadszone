import React, { useState } from 'react';
import MenuCardLeftAlign from '../../molecules/menucard/MenuCardLeftAlign';
import { MENU_CARD_ALIGN_LEFT_DATA } from '../../../data/MenuCardAlignLeftData';
import FunnelChart from '../../atoms/chart/FunnelChart';
import './dashboard.css'
import CommonHeader from '../../atoms/commonheader/CommonHeader';
import Table from '../../molecules/table/Table';
import { HEADERS, HEADERS1, TABLE_DATA, TABLE_DATA1 } from '../../../data/TableData';
import PopUp from '../../atoms/popup/PopUp';
import ExpoBtn from '../../atoms/button/ExpoBtn';
import CommonListHeader from '../../atoms/commonheader/CommonListHeader';

export const Dashboard = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
    return (
        <div className='dashboard-com'>
            <div className="menu-card-sec">
                {MENU_CARD_ALIGN_LEFT_DATA.map(item => {
                    return <MenuCardLeftAlign title={item.tile} subtilte={item.subtilte} icon={item.icon} className={'card-with'} />
                })}
            </div>
            <div className='chart-recent-sec '>
                <div className='chart-sec'>
                    <FunnelChart />
                </div>
                {/* <div className="recent">
                    <CommonHeader isViewAll={true} header='Recent Products'/>
                    <Table headers={HEADERS} data={TABLE_DATA} isAction={false} />
                </div> */}
            </div>
            {/* <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={'hiiiii'}>
                <h5>Popup Content</h5>
                <p>This is a reusable popup!</p>
            </PopUp> */}
            {/* <ExpoBtn type='pdf'/> */}
            <CommonListHeader
                header='Product List'
                subHeader='Manage your products'
            />
            
        </div>
    );
}