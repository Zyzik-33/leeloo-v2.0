import React from "react"
import styled from 'styled-components'
import Button from '../components/Button/Button'
import PageInfo from '../components/PageInfo/PageInfo'
import { Formik } from 'formik'
 
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
    <Formik
       initialValues={{ name: '', email: '', message: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor='name'>Name</StyledLabel>
          <StyledInput
             id='name'  
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name} 
          />
          <StyledLabel htmlFor='e-mail'>E-mail</StyledLabel>
          <StyledInput
             id='email'  
             type="e-mail"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email} 
          />
          <StyledLabel>Message</StyledLabel>
          <StyledInput 
             as='textarea'
             type='text' 
             name='message' 
             id='message' 
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
          />
          <Button>send message</Button>
        </form>
       )}
     </Formik>
  </>
);

export default ContactPage
