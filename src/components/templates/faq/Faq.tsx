import React from 'react'
import './faq.css'
import CommonListHeader from '../../atoms/commonheader/CommonListHeader'
import { CommonHeaderText } from '../../../content/commoncontext/CommonHeaderText'
import Table from '../../molecules/table/Table'
import { FAQ_HEADER, TABLE_FAQ_DATA } from '../../../data/TableData'
export default function Faq() {
  return (
    <div className='faq-section flex-grop-5'>
      <CommonListHeader header={CommonHeaderText.faq.title} subHeader={CommonHeaderText.faq.subTitle} />
      <div className="data-list">
        <Table headers={FAQ_HEADER} data={TABLE_FAQ_DATA} isAction={true} />
      </div>

    </div>
  )
}
