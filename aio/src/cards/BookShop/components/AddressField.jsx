import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
    const states = [
        {
            value: 'Andhra Pradesh',
            label: 'Andhra Pradesh',
        },
        {
            value: 'Arunachal Pradesh',
            label: 'Arunachal Pradesh',
        },
        {
            value: 'Assam',
            label: 'Assam',
        },
        {
            value: 'Bihar',
            label: 'Bihar',
        },
        {
            value: 'Chhattisgarh',
            label: 'Chhattisgarh',
        },
        {
            value: 'Goa',
            label: 'Goa',
        },
        {
            value: 'Gujarat',
            label: 'Gujarat',
        },
        {
            value: 'Haryana',
            label: 'Haryana',
        },
        {
            value: 'Himachal Pradesh',
            label: 'Himachal Pradesh',
        },
        {
            value: 'Jharkhand',
            label: 'Jharkhand',
        },
        {
            value: 'Karnataka',
            label: 'Karnataka',
        },
        {
            value: 'Kerala',
            label: 'Kerala',
        },
        {
            value: 'Madhya Pradesh',
            label: 'Madhya Pradesh',
        },
        {
            value: 'Maharashtra',
            label: 'Maharashtra',
        },
        {
            value: 'Manipur',
            label: 'Manipur',
        },
        {
            value: 'Meghalaya',
            label: 'Meghalaya',
        },
        {
            value: 'Mizoram',
            label: 'Mizoram',
        },
        {
            value: 'Nagaland',
            label: 'Nagaland',
        },
        {
            value: 'Odisha',
            label: 'Odisha',
        },
        {
            value: 'Punjab',
            label: 'Punjab',
        },
        {
            value: 'Rajasthan',
            label: 'Rajasthan',
        },
        {
            value: 'Sikkim',
            label: 'Sikkim',
        },
        {
            value: 'Tamil Nadu',
            label: 'Tamil Nadu',
        },
        {
            value: 'Telangana',
            label: 'Telangana',
        },
        {
            value: 'Tripura',
            label: 'Tripura',
        },
        {
            value: 'Uttar Pradesh',
            label: 'Uttar Pradesh',
        },
        {
            value: 'Uttarakhand',
            label: 'Uttarakhand',
        },
        {
            value: 'West Bengal',
            label: 'West Bengal',
        },
        {
            value: 'Andaman and Nicobar Islands',
            label: 'Andaman and Nicobar Islands',
        },
        {
            value: 'Chandigarh',
            label: 'Chandigarh',
        },
        {
            value: 'Delhi',
            label: 'Delhi',
        }
    ];

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='address-wrapper'>
            <TextField
                required
                id="filled-required"
                label="First Name"
                defaultValue=""
                size='small'
                style={{ width: '70%' }}
            />
            <TextField
                required
                id="filled-required"
                label="Last Name"
                defaultValue=""
                size='small'
                style={{ width: '70%' }}
            />
        
        <TextField
          required
          id="filled-required"
          label="Street Address"
          defaultValue=""
          size='small'
          style={{ width: '70%' }}
        />
        <TextField
          required
          id="filled-required"
          label="Town/City"
          defaultValue=""
          size='small'
          style={{ width: '70%' }}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="State"
          size='small'
          style={{ width: '70%' }}
        >
          {states?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="filled-required"
          label="PIN Code"
          defaultValue=""
          size='small'
          style={{ width: '70%' }}
        />
        <TextField
          required
          id="filled-required"
          label="Phone"
          defaultValue=""
          size='small'
          style={{ width: '70%' }}
        />

        <Stack spacing={2} direction="row">
            <Button variant="contained">Save & Continue</Button>
            <Button variant="outlined">Clear Address</Button>
        </Stack>
        
      </div>
    </Box>
  );
}
