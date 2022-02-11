import React, { useState } from 'react'
import styled from 'styled-components'
import SelectElement from './Select'

const Div = styled.div`
    width: 505px;
    display: flex;
    justify-content:  space-between;
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #9F9F9F;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #9F9F9F;
    width: 100%;
    padding: 9px 0;
    margin-top: 29px;
    &:focus {
        outline: none;
    }
`

const InputHalf = styled.input`
    border: none;
    border-bottom: 1px solid #9F9F9F;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #9F9F9F;
    width: 46.5%;
    padding: 9px 0;
    margin-top: 29px;
    &:focus {
        outline: none;
    }
`

const Baba = styled.div`
    width: 505px;
    margin-left: auto;
    margin-right: auto;
`


const InputElement = ({type, name}) => {
    const [adress, setadress] = useState('');
    const [customerName, setname] = useState('');
    const [telephone, settelephone] = useState('');
    const [email, setemail] = useState('');
    const [comment, setcomment] = useState('');

    const onFormSubmit = () => {
        let contact = {adress, customerName, telephone, email, comment};
        console.log(contact);
    };

  return (
      <Baba>
        <Input type={type} name="adress" placeholder='Ваш Адрес' onChange={(evt)=>setadress(evt.currentTarget.value)}/>
        <Div>
            <InputHalf type={type} name={name} placeholder='Ваше Имя' onChange={(evt)=>setname(evt.currentTarget.value)}/>
            <InputHalf type={type} name={name} placeholder='Ваш Телефон' onChange={(evt)=>settelephone(evt.currentTarget.value)}/>
        </Div>
        <Input type={type} name={name} placeholder='Ваш Eemail' onChange={(evt)=>setemail(evt.currentTarget.value)}/>
        <SelectElement></SelectElement>
        <Input type={type} name={name} placeholder='Введите комментарий' onChange={(evt)=>setcomment(evt.currentTarget.value)}/>
        <br/><br/>
        <button onClick={onFormSubmit}>OnSubmit</button>

      </Baba>
  )
}

export default InputElement