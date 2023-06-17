import { AppContainer } from './App.styled';
import Form from '../Form/Form';
import Search from '../Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { selectAllState } from '../storage/selectors';
import ContactList from '../List/ContactList';
import { addFilter } from '../storage/filterSlice';
import { useEffect } from 'react';
import { addContactThunk, deleteContactThunk, getItemsThunk } from '../storage/Thunks';
import { Triangle } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { contacts, filter, isLoading, error } = useSelector(selectAllState);
  const dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch(addFilter(value));
  };
  const handleContactRemove = ({ currentTarget: { id } }) => {
    dispatch(deleteContactThunk(id));
  };

  const notify = () => toast.info('A contact with the same name already exists in the Phonebook', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const handleSubmitForm = (formData) => {
    const findErr = contacts.find(contact => contact.name.toLowerCase() === formData.get('name').toLowerCase());
    if (findErr) {
      notify()
      return;
    }
    dispatch(addContactThunk(formData));
  };

  useEffect(() => {
    dispatch(getItemsThunk())
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
      <ToastContainer />
      <ContactList contacts={contacts} handleContactRemove={handleContactRemove} />
    </AppContainer>;

  return app;
}






