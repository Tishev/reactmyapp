import { useParams } from "react-router-dom";
import {
  ListItem,
  List,
  Divider,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import { AUTHOR } from "../constants/common";
import { AccountCircle, Android } from "@mui/icons-material";
import { useSelector } from "react-redux";

const MessageList = () => {
  const allMessages = useSelector((state) => state.messages.messageList);
  const { name } = useSelector((state) => state.profile);
  let { chatId } = useParams();
  const messages = allMessages[chatId];
  if (!allMessages[chatId]) return null;

  function isAuthorBot(author) {
    return author === AUTHOR.bot;
  }
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {messages.map((element) => (
          <div key={element.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp">
                  {isAuthorBot(element.author) ? (
                    <Android />
                  ) : (
                    <AccountCircle />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={isAuthorBot(element.author) ? AUTHOR.bot : name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {element.text}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <p>{element.text}</p>
            <sup>{element.author}</sup>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </>
  );
};
export default MessageList;
