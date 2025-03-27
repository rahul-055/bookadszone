import React, { useState } from 'react'
import './faq.css'
import CommonListHeader from '../../atoms/commonheader/CommonListHeader'
import { CommonHeaderText } from '../../../content/commoncontext/CommonHeaderText'
import Table from '../../molecules/table/Table'
import { FAQ_HEADER, TABLE_FAQ_DATA } from '../../../data/TableData'
import PopUp from '../../atoms/popup/PopUp'
import FaqChildren from '../../molecules/faq/FaqChildren'
export default function Faq() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleDisplayPoup = () => {
    setIsShow(true);
  }
  const handleHidePoup = () => {
    setIsShow(false);
  }
  return (
    <div className='faq-section flex-grop-5'>
      <CommonListHeader header={CommonHeaderText.faq.title} subHeader={CommonHeaderText.faq.subTitle} onAddUpdate={handleDisplayPoup} />
      <div className="data-list">
        <Table headers={FAQ_HEADER} data={TABLE_FAQ_DATA} isAction={true} />
      </div>
      <PopUp isOpen={isShow} title={'Add FAQ'} onClose={handleHidePoup} children={<FaqChildren />} isBtn={true} />

    </div>
  )
}
