import { Autocomplete, Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import logo from '../logo.svg'

function SearchInput() {
    const user=[
        {userAvatar:logo,
        userName:'Sheeraz Ali'
    },
        {userAvatar:logo,
        userName:'Sadam Khan'
    },
        {userAvatar:logo,
        userName:'Ali'
    },
        {userAvatar:logo,
        userName:'John'
    },
        {userAvatar:logo,
        userName:'Siri'
    },
    ]
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Box p={2}
        open={isOpen}>
    <Autocomplete 
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={user.map((option) => option.userName)}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search Contacts"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
           />
           )}
      />
    </Box>
  )
}

export default SearchInput