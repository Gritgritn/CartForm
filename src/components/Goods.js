import React, { useState } from 'react'
import styled from 'styled-components'
import present from '../img/present.png';

const GoodsContainer = styled.div`
  width: 100%;
  max-width: 471px;
  position: relative;
  display: flex;
  margin: 25px 0 25px 0;
  @media (min-width: 541px) {
  margin: 25px 35px 25px 0;
  }
`

const DescriptionContainer = styled.div`
  width: 150px;
  max-height: 110px;
`

const GoodTitle = styled.h3`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
  margin: 0 0 10px 0;
`

const Description = styled.div`
  @media (min-width: 461px) {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 120%;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #9F9F9F;
  }
  @media (max-width: 460px) {
    display: none;
  }
`

const Img = styled.img`
  @media (min-width: 461px) {
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }
  @media (max-width: 460px) {
    width: 80px;
    height: 80px;
    margin-right: 12px;
  }
`

const CountContainer = styled.div`
  width: 81px;
  height: 34px;
  display: flex;
  position: absolute;
  bottom: 0;
  border: 1px solid #000000;
  box-sizing: border-box;
`
const CountMinus = styled.span`
  width: 27px;
  height: 32px;
  display: flex;
  &:after {
    content: '';
    width: 16px;
    height: 2px;
    background-color: #000000;
    margin: 15px 7px;
  }
`
const CountPlus = styled.span`
  width: 27px;
  height: 32px;
  display: flex;
  &:before {
    content: '';
    width: 2px;
    height: 12px;
    background-color: #000000;
    position: absolute;
    top: 10px;
    left: 64px;
  }
  &:after {
    content: '';
    width: 12px;
    height: 2px;
    background-color: #000000;
    margin: 15px 8px;
  }
`
const CountNumber = styled.p`
    width: 38px;
    height: 38px;
    margin: 0;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    font-feature-settings: 'tnum' on,'lnum' on;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Price = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;

  line-height: 23px;
  text-align: right;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
  @media (min-width: 461px) {
    font-size: 20px;
  }
  @media (max-width: 460px) {
    font-size: 16px;
  }
`

const Delete = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  text-align: right;
  text-decoration-line: underline;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #9F9F9F;
  @media (min-width: 461px) {
    font-size: 14px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
`

const Goods = ({name, description, count, price}) => {
  const [goodCount, setgoodCount] = useState(count)
  const handleCountInc = () => {
    setgoodCount(Number(goodCount) + 1);
  }
  const handleCountDec = () => {
    setgoodCount(Number(goodCount) - 1);
  }

  return (
    <GoodsContainer>
         <Img src={present}></Img>
         <DescriptionContainer>
            <GoodTitle>{name}</GoodTitle>
            <Description>{description}</Description>
            <CountContainer>
              <CountMinus onClick={handleCountDec}></CountMinus>
              <CountNumber>{goodCount}</CountNumber>
              <CountPlus onClick={handleCountInc}></CountPlus>
            </CountContainer>

            <Price>
              {price} руб.
            </Price>
            <Delete>
              Удалить
            </Delete>
         </DescriptionContainer>
    </GoodsContainer>
  )
}

export default Goods