import React from 'react'
import logo from '../logo.svg'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'

const ContactCard = () => {
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
  return (
        <Box>
            <List>
             {user.map((contact)=>(
                 <ListItemButton key={contact.userName}>
                    <ListItemAvatar>
                    <Avatar alt={contact.userName} src='/logo' />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography>
                            {contact.userName}

                        </Typography>
                    </ListItemText>
                </ListItemButton>
            
             )) 
        }
            </List>
        </Box>
    )
}

export default ContactCard