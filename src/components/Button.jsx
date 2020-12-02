import { Component } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const ButtonStyle = styled.button`
  background: ${props => props.background ? "#8A2387" : "none"};
  border: none;
  border: 2px solid white;
  color: white;
  margin: 10px;
  padding: 20px;
  border-radius: 15px;
  font-weight: bold;
`;

class Button extends Component {
  
  render(){
    return (
        <ButtonStyle background onClick={this.props.onClick}>
          {this.props.text}
        </ButtonStyle>
    );
  };
}

export default Button;
