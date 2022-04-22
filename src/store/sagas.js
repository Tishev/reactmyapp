import { delay, put, takeLatest } from "redux-saga/effects";
import { AUTHOR } from "../constants/common";
import { addMessage, ADD_MESSAGE_WITH_SAGA } from "./messages/actions";

function* onAddMessageWithSaga(action) {
  yield put(addMessage(action.payload.chatId, action.payload.message));
  if (action.payload.message.author !== AUTHOR.bot) {
    const botMessage = { text: "Привет, как дела?", author: AUTHOR.bot };
    yield delay(2000);
    yield put(addMessage(action.payload.chatId, botMessage));
  }
}

function* mySaga() {
  yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;
