export const ADD_CHAT = "CHAT::ADD_CHAT";

export const DEL_CHAT = "CHAT::DEL_CHAT";

export const addChat = (name) => ({
  type: ADD_CHAT,
  payload: name, //{name, surname}
});
