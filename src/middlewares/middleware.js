import { AUTHOR } from "../constants/common";
import { addMessage, ADD_MESSAGE } from "../store/messages/actions";

const middleware = (store) => (next) => (action) => {
  if (
    action.type === ADD_MESSAGE &&
    action.payload.message.author !== AUTHOR.bot
  ) {
    const newMessage = { text: "Привет, как дела?", author: AUTHOR.bot };
    setTimeout(
      () => store.dispatch(addMessage(action.payload.chatId, newMessage)),
      1500
    );
  }

  return next(action);
};

export default middleware;
