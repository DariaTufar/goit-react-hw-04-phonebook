 
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {PropTypes} from 'prop-types'

import { Box } from '../Box';
import { InputText, InputTitle, ErrorText, ButtonForm } from './ContactForm.styled';


const initialValues = {
    name: '',
    number: '',
};

let schema = yup.object().shape({
    name: yup.string().required('Contact name is required'),
    number: yup.string().min(7, 'At lease 7 digits are required')
        .max(12, 'At most 12 digits are required')
            .required('Phone number is required'),
});


export const ContactForm  =({addContact}) => {
 
    const handleSubmit = (values, { resetForm }) => {
        addContact({
            name: values.name,
            number: values.number,
        });
        resetForm()
    };


     
    

    
        return (
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            
            >
                <Form>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gridGap={2}
                      
                    >
                        <InputTitle htmlFor='name'> Name</InputTitle>
                        <InputText
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            render={message => <ErrorText>{message}</ErrorText>}
                        />
                    {/* </Box> */}
                    {/* <Box
                        display="flex"
                        flex-direction="column"
                    bg="orange">                */}
                        <InputTitle > Number </InputTitle>
                            <InputText
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                            />
                            <ErrorMessage
                                name="number"
                                component="div"
                                render={message => <ErrorText>{message}</ErrorText>}>
                            </ErrorMessage>
                
                            <ButtonForm type='submit'> Add contact</ButtonForm>
                    </Box>
                </Form>
                        
               
            </Formik>
        );
    };


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};