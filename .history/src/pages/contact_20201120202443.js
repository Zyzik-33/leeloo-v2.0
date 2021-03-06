import React from "react"
import styled from 'styled-components'
import Button from '../components/Button/Button'
import PageInfo from '../components/PageInfo/PageInfo'

const StyledInput = styled.input`
    display: block;
    border: 2px solid black;
    background: none;
    font-family: Montserrat;
    font-size: 20px;
    height: ${({ as }) => as ? '200px' : 'auto'};
    width: ${({ as }) => as ? '500px' : '300px'};
    margin-bottom: ${({ as }) => as && '40px'};
`;

const StyledLabel = styled.label`
    margin: 30px 0 10px;
    display: block;
    font-size: 14px;
    font-weight: bold;
    font-family: Montserrat;
`;

const pageData = {
    title: 'contact',
    paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <form>
      <StyledLabel htmlFor='name'>Name</StyledLabel>
      <StyledInput type='text' name='name' id='name'/>
      <StyledLabel>E-mail<StyledLabel/>
      <StyledInput/>
      <StyledLabel>Message<StyledLabel/>
      <StyledInput/>
      <Button>send message</Button>
    </form>
  </>
);

export default ContactPage
