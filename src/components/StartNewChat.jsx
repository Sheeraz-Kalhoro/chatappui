import { Box, Fab } from "@mui/material";
import { ChatRounded, Edit } from "@mui/icons-material";
import React from "react";

function StartNewChat() {
  return (
    <Box sx={{position:'fixed', bottom:0,right:0, padding:5}}>
      <Fab color="primary" aria-label="Start Chat">
        <ChatRounded />
      </Fab>
    </Box>
  );
}

export default StartNewChat;
