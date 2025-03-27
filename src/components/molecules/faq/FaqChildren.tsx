import React from 'react'
import Input from '../../atoms/input/Input';
import './faqchildren.css';


export default function FaqChildren() {
  return (
    <div className='Faq-children'>
        <Input type={'text'} placeholder='Question'/>
        <Input type={'text'} placeholder='Answare'/>
    </div>
  )
}
