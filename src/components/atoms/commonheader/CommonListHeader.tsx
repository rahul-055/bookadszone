import React from 'react'
import './commonheader.css';
import ExpoBtn from '../button/ExpoBtn'
import Button from '../button/Button'
import DownloadBtn from '../button/DownloadBtn';
interface CommonListHeaderProps {
  header: string
  subHeader: string
  onAddUpdate?: ()=> void;
}
export default function CommonListHeader(props: CommonListHeaderProps) {
  return (
    <div className='common-list-header'>
      <div className="title-btns flex-grop-2">
        <div className="title">
          <h4>{props.header}</h4>
          <span>{props.subHeader}</span>
        </div>
        <div className="right-btns flex-grop-3">
          <ExpoBtn type='xls' />
          <ExpoBtn type='pdf' />
          <ExpoBtn type='refresh' />
          <Button type='button' text='Add Faq' onClick={props.onAddUpdate}/>
          <DownloadBtn text={'FAQ'} />
        </div>
      </div>
    </div>
  )
}
