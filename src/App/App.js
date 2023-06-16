import { AppContainer } from './App.styled';
import Form from '../Form/Form';
import Search from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { allsSelector } from '../storage/selectors';
import ContactList from '../List/ContactList';
import { createNotification } from '../tools/nofications';
import { NotificationContainer } from 'react-notifications';
import { addFilter } from '../storage/filterSlice';
import { useEffect } from 'react';
import { addContactThunk, deleteContactThunk, getItemsThunk } from '../storage/Thunks';
import { GetAllContact } from '../storage/FetchFn/getDataContacts';
import { Triangle } from 'react-loader-spinner';

export default function App() {
  const { contacts, filter, isLoading, error } = useSelector(allsSelector);
  const dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch(addFilter(value));
  };
  const handleContactRemove = ({ currentTarget: { id } }) => {
    dispatch(deleteContactThunk(id));
  };

  const handleSubmitForm = (formData) => {
    const findErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase());
    if (findErr) {
      createNotification();
      return;
    }
    dispatch(addContactThunk(formData));
  };

  useEffect(() => {
    dispatch(getItemsThunk(GetAllContact))
  }, [dispatch])

  const app =
    <AppContainer>
      {error ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh' }}>ERROR: <span style={{ color: 'red' }}>{error}</span> , звернітся до адміністраторі сайта за телефоном: +8516461684646</div> : null}
      <Typography sx={{ fontSize: 'clamp(4rem, 6rem, 100%)' }} variant="h1">Phonebook</Typography>
      <Form onSubmit={handleSubmitForm} />
      <Typography sx={{ marginBottom: '0.2rem', fontSize: 'clamp(3rem, 5rem, 100%)' }} variant="h2">Contacts</Typography>
      <Search handleFilter={handleFilter} filter={filter} />
      {isLoading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh' }}>
        <Triangle
          height="80"
          width="80"
          color="#1976d2"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div> : null}
      <ContactList contacts={contacts} handleContactRemove={handleContactRemove} />
      <NotificationContainer />
    </AppContainer>;

  return app;
}






