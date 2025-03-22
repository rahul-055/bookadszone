import React from 'react'
import './nodata.css'
import nodata from '../../../assets/images/commonIcons/no-data.png'
import { CommonContext } from '../../../content/commoncontext/CommonHeaderText'
export default function NoData() {
    return (
        <div className='no-data'>
            <div className='img-size'>
                <img src={nodata} alt="not found" />
            </div>
            <div className="context">
                <h3>{CommonContext.nodata}</h3>
            </div>
            
        </div>
    )
}
