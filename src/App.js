import React, { useState } from 'react';
import './App.css';
import InputElement from './Input';
import styled from 'styled-components'

const P = styled.p`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
`

const A = styled.a`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-decoration-line: underline;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #9F9F9F;
`

const aDress = "Долинное, ул. Фонтанная 5";

function App() {

  return (
    <div className="App">
       <h1>Корзина</h1>
       <P>Есть аккаунт? <A>Войти</A></P>
       <InputElement type="text" name="name"></InputElement>
    </div>
  );
}

export default App;
