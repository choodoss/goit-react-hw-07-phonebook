import PropTypes from 'prop-types';
import { List, Box, Avatar, ListItem, IconButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { IoIosContact } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import generateId from '../tools/idRandomize';

export default function ContactList({ contacts, handleContactRemove }) {
    return (
        <Box maxWidth={400} margin={'0 auto'}>
            <List>
                {contacts.length !== 0 &&
                    contacts.map((item) => (
                        <ListItem sx={{padding:0, paddingBottom: '0.3rem'}} key={generateId()} secondaryAction={<IconButton edge="end" aria-label="delete" id={item.id} onClick={handleContactRemove}><RiDeleteBin6Line /></IconButton>}>
                            <ListItemAvatar>
                                <Avatar fontSize="large">
                                    <IoIosContact size={30}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1" component="span" style={{ fontSize: '1.1rem' }}>
                                    {item.name}: {item.phone}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );
}

ContactList.propTypes = {
    handleContactRemove: PropTypes.func,
    getFilterContacts: PropTypes.array,
};






