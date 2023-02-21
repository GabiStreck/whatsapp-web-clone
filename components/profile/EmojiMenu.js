import { useState } from "react";
import { IconButton, Menu } from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import Picker from "emoji-picker-react";

export default function EmojiMenu({ onEmojiClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? "account-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
      >
        <EmojiEmotionsOutlinedIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        id="account-menu"
        onClose={handleClose}
        open={open}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Picker onEmojiClick={onEmojiClick} />
      </Menu>
    </>
  );
}
