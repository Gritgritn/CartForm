import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 70px;
    background: transparent;
    border: 1px solid #000000;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #000000;
    &:hover {
        background: black;
        color: white;
    }
`

const ButtonComponent = ({onButton}) => {
  return (
    <Button form="contact" type="submit" onClick={onButton}>Купить</Button>
  )
}

export default ButtonComponent