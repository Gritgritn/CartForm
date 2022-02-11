import React, { useState } from 'react'
import styled from 'styled-components'

const SelectWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 38px;
    color: #444;
    background: transparent;
    border: none;
    border-radius: 0;
    margin: 29px 0 0 0;
    padding: 0;
`
const SelectContainer = styled.select`
    width: 100%;
    height: 37px;
    background: transparent;
    border: 0;
    appearance: none;
    z-index: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:-ms-expand {
        display: none;
    }
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
    margin: 0;
    &:focus {
        outline: none;
        color: black;
    }
`
const SelectArrow = styled.div`
    position: absolute;
    z-index: -1;
    border: 8px solid transparent;
    border-bottom: 0;
    right: 11px;
    &:nth-child(2) {
        top: 15px;
        border-top-color: #000000;
    }
    &:nth-child(3) {
        top: 13px;
        border-top-color: #fff;
    }
`

const SelectElement = () => {
  return (
    <SelectWrapper>
        <SelectContainer defaultValue={""} onClick={(e) => console.log(e.target.value)}>
            <option value="" disabled hidden>Тип упаковки</option>
            <option value="without-pack">Без упаковки</option>
            <option value="standart-pack">Стандартная</option>
            <option value="present-pack">Подарочная</option>
        </SelectContainer>
        <SelectArrow/>
        <SelectArrow/>
  </SelectWrapper>
  )
}

export default SelectElement