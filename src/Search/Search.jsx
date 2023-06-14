import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';

export default function Search({ handleFilter, filter }) {
    const handleInputChange = (event) => {
        handleFilter(event.target.value);
    };

    return (
        <Box maxWidth={400} margin={'0 auto'} sx={{ marginBottom: '1rem',  }}>
            <TextField
                sx={{ width: '100%' }}
                name="name"
                autoComplete="on"
                label="Find contact by name"
                value={filter}
                onChange={handleInputChange}
                variant="outlined"
            />
        </Box>
    );
}

Search.propTypes = {
    handleFilter: PropTypes.func,
    filter: PropTypes.string,
};
