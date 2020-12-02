import { Component } from 'react';
import styled from 'styled-components';
import Row from './Row';
import Column from './Column';
import Button from './Button';
import FormContainer from './FormContainer';
import Image from './../image.svg' ;
import Title from './Title';
import Input from './Input';
import Select from './Select';

//redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { book } from './../redux/action';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
`;

class Main extends Component {
  constructor(props){
     super(props);
     this.state={
       book: false,
       type: null,
       onceOff: false,
       date: null,
       name: null,
       email: null,
       address: null,
     }
     this.handleNameChange = this.handleNameChange.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handleAddressChange = this.handleAddressChange.bind(this);
     this.handleOtherChange = this.handleOtherChange.bind(this);
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }

  handleAddressChange(event){
    this.setState({address: event.target.value});
  }

  handleOtherChange(event){
    this.setState({other: event.target.value});
  }

  Post(name, email){
    alert(name, email);
  }

  render(){
   const { isBooking, book } = this.props;

   return (
     <MainStyle>
      {!isBooking ?
        <Row reverse>
          <Column>
            <FormContainer background>
              <Row>
                <Title text={'Walk A Doggy'} />
              </Row>
              <br/>
              <Row>Use Walk A Doggy to find a friendly, dependable pet sitter, dog walker or dog boarder when you need one. Request service with the tap of a button and your pet will be smiling in no time!</Row>
              <Row>
                <Button text={'Place Booking'} onClick={() => book(true)}/>
              </Row>
            </FormContainer>
          </Column>
          <Column>
            <img src={Image} alt={'landing image'} width={'400px'}/>
          </Column>
        </Row>
      :
        <Row>
          <FormContainer background>
            <Row>
              <Input placeholder={'Prefered Name'} onChange={this.handleNameChange}/>
            </Row>
            <Row>
              <Input placeholder={'Email'} onChange={this.handleEmailChange}/>
            </Row>
            <Row>
              <Input placeholder={'Address'} onChange={this.handleAddressChange}/>
            </Row>
            <Row>
              <Input placeholder={'Other'} onChange={this.handleOtherChange}/>
            </Row>
            <Row>
            </Row>
            <Row>
              <Button text={'Place Booking'} onClick={() => this.Post(this.state.name, this.state.email)}/>
            </Row>
          </FormContainer>
        </Row>
      }
      <Row>
      </Row>
     </MainStyle>
   );
 }
}

Main.propTypes = {
  isBooking: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  book: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.states.name,
  isBooking: state.states.isBooking,
});

export default connect(mapStateToProps, {book})(Main);
