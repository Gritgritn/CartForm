import React, { useState } from 'react'
import styled from 'styled-components'
import SelectElement from './Select'
import YandexMap from './Map';

const InputHalfContainer = styled.div`
    @media (min-width: 540px) {
        width: 505px;
        display: flex;
        justify-content:  space-between;
    }
    @media (max-width: 539px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

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
    padding: 9px 0;
    margin-top: 29px;
    &:focus {
        outline: none;
    }

    @media (min-width: 540px) {
        width: 46.5%;
    }
    @media (max-width: 530px) {
        width: 100%;
    }
`

const Form = ({onContactSubmit, getData}) => {
    const [adress, setadress] = useState('Долинное, Фонтанная, 5');
    const [inputAdress, setInputAdress] = useState('');
    const [customerName, setname] = useState('');
    const [telephone, settelephone] = useState('');
    const [email, setemail] = useState('');
    const [comment, setcomment] = useState('');
    const [pack, setpack] = useState('');

    const getMapData = (value) => {
        setInputAdress(value);
    }

    const setRed = (target) => {
        target.classList.add("Red");
    }

    const setValue = (target) => {
            if (target.name === "adress" ) {setInputAdress(target.value);}
            if (target.name === "name" ) {setname(target.value);}
            if (target.name === "telephone" ) {settelephone(target.value);}
            if (target.name === "email" ) {setemail(target.value);}
            if (target.name === "comment" ) {setcomment(target.value);}
    }

    const handleSubmit = (event) => {
        if (inputAdress && customerName && telephone && email && pack === '') {
            alert('ERrroR: ');
        } else {
            event.preventDefault();
            if (getData === true) {
                let contact = {adress, customerName, telephone, email, pack, comment};
                onContactSubmit(contact);
            }
        }
      }


  return (
      <form id="contact" onSubmit={handleSubmit}>
        <Input type="text" name="adress" placeholder='Ваш Адрес' onChange={(evt)=>setInputAdress(evt.currentTarget.value)} value={inputAdress} onBlur={(evt)=> setadress(evt.currentTarget.value)} required onInvalid={(evt) => setRed(evt.currentTarget)}/>
        <YandexMap adress={adress} getMapData={getMapData} />
        <InputHalfContainer>
            <InputHalf type="text" name="name" placeholder='Ваше Имя' onChange={(evt)=>setValue(evt.currentTarget)} required onInvalid={(evt) => setRed(evt.currentTarget)}/>
            <InputHalf type="tel" name="telephone" placeholder='Ваш Телефон' onChange={(evt)=>setValue(evt.currentTarget)} required onInvalid={(evt) => setRed(evt.currentTarget)}/>
        </InputHalfContainer>
        <Input type="email" name="email" placeholder='Ваш Eemail' onChange={(evt)=>setValue(evt.currentTarget)} required onInvalid={(evt) => setRed(evt.currentTarget)}/>
        <SelectElement onSelectChange={setpack}></SelectElement>
        <Input type="text" name="comment" placeholder='Введите комментарий' onChange={(evt)=>setValue(evt.currentTarget)}/>
      </form>
  )
}

export default Form;