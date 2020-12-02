import { Component } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const InputStyle = styled.input`
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
  font-size: 21px;
  margin: 10px;
  outline: none;
  &:focus{
    border: 4px solid green;
    border-radius: 20px;
  }
`;

export default InputStyle;
