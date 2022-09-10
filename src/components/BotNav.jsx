import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  ChatTwoTone,
  SearchTwoTone,
  MoreVertTwoTone,
  ChatRounded,
  SearchRounded,
  MoreVertRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import SearchInput from "./SearchInput";

const BotNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box  sx={{boxShadow:'0 2.47px 4.99px 0 gainsboro  '}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
            variant='contained' 
            color='primary'
            icon={<ChatRounded />} />
        <BottomNavigationAction
         variant='contained' 
         color='primary'
          onClick={() => setIsOpen(prev => !prev)}
          icon={<SearchRounded />}
        />
        <BottomNavigationAction
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant='contained' 
          color='primary'
          icon={<MoreVertRounded />}
        />
      </BottomNavigation>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      {isOpen && <SearchInput />}
    </Box>
  );
};

export default BotNav;
