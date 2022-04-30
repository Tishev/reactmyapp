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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessagesByChatIdWithFB } from "../middlewares/middleware";

const MessageList = () => {
  const allMessages = useSelector((state) => state.messages.messageList);
  const { name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  let { chatId } = useParams();
  useEffect(() => {
    dispatch(getMessagesByChatIdWithFB(chatId));
  }, [chatId]);

  // if (!allMessages[chatId]) return null;

  const messages = allMessages[chatId];

  function isAuthorBot(author) {
    return author === AUTHOR.bot;
  }

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {messages?.map((element, index) => (
          <div key={index}>
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
// 22
