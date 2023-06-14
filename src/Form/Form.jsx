import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';
import generateId from '../tools/idRandomize';
import { useState } from 'react';
import { FormSection } from './Form.styled';

const inputIdName = generateId();
const inputIdNTel = generateId();

const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = ({ target: { value, name } }) => {
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onSubmit(formData);
        setName('');
        setNumber('');
    };

    return (
        <FormSection onSubmit={handleSubmitForm}>
            <TextField
                id={inputIdName}
                label="Name"
                variant="outlined"
                onChange={handleInput}
                name="name"
                pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                required
            />
            <TextField
                id={inputIdNTel}
                label="Phone"
                variant="outlined"
                onChange={handleInput}
                value={number}
                type="tel"
                name="number"
                pattern="^(\+?[0-9.\(\)\-\s]*)$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <Button variant="contained" type="submit">
                Add Contact
            </Button>
        </FormSection>
    );
};

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func,
};