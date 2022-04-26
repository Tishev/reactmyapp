import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { addChat } from "../store/chats/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Imports end
const ChatList = () => {
  const chats = useSelector((state) => state.chats.chatList);
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState("");
  const dispatch = useDispatch();

  const handleChatName = (e) => {
    setChatName(e.target.value);
  };
  const handleClose = () => {
    setVisible(false);
  };

  const handleAdd = () => {
    setVisible(true);
  };
  const handleSave = () => {
    dispatch(addChat(chatName));
    setChatName("");
    handleClose();
  };
  return (
    <div>
      <List>
        {chats?.length > 0 ? (
          chats.map((chat) => (
            <Link to={`/chats/${chat.id}`} key={chat.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={chat.name} />
              </ListItem>
            </Link>
          ))
        ) : (
          <div>Chats not found</div>
        )}
      </List>

      <Button onClick={handleAdd}>Add chat</Button>
      <Dialog open={visible} onClose={handleClose}>
        <Paper style={{ padding: "10px" }}>
          <DialogTitle>Enter a name for a new chat</DialogTitle>
          <TextField
            value={chatName}
            onChange={handleChatName}
            placeholder={"Chat name"}
            autoFocus
            fullWidth
          />
          <Button onClick={handleSave} variant={"outlined"}>
            Save chat
          </Button>
        </Paper>
      </Dialog>
    </div>
  );
};
export default ChatList;
// 1 34 28
