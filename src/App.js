import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import Goods from './components/Goods';
import ButtonComponent from './components/Button';
import Form from './components/Form';

const AppContainer = styled.div`
  max-width: 1100px;
  position: relative;
  @media (min-width: 1100px) {
    margin: auto;
  }
`
const Container = styled.div`
  @media (max-width: 540px) {
    width: calc(100% - 32px);
    margin: 0 16px;
  }
  @media (min-width: 1100px) {
    width: 505px;
  }
  @media (min-width: 541px) and (max-width: 1099px) {
    width: 505px;
    margin: auto;
  }
`
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
const H1 = styled.h1`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
`
const H2 = styled.h2`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
`
const Line = styled.div`
  content: '';
  width: 100%;
  height: 1px;
  background-color: #DEDEDE;
`

function App() {
  const [getContactData, setgetContactData] = useState(false);
  const getData = (value) => {
    alert(JSON.stringify(value));
  }

  return (
    <AppContainer>
      <Container>
        <H1>Корзина</H1>
        <P>Есть аккаунт? <A>Войти</A></P>
        <Form onContactSubmit={getData} getData={getContactData}></Form>
        <H2>Выбранные товары:</H2>
        <Goods name="Товар 1" description="Описание товара, которое может быть длинным" count='1' price="1090"></Goods>
        <Line></Line>
        <Goods name="Товар 2" description="Описание товара, которое может быть очень-очень длинным" count="1" price="700"></Goods>
        <Line></Line>
        <Goods name="Товар 3" description="Краткое описание товара" count="2" price="2000"></Goods>
        <ButtonComponent onButton={()=>setgetContactData(true)}></ButtonComponent>
       </Container>
    </AppContainer>
  );
}

export default App;
