import { configureStore } from "@reduxjs/toolkit";
import { recentsMessagesSlice } from "./features/recentsMessages/recentsMessagesSlice";
import { conversationSlice } from "./features/conversations/conversationSlice";
import { contactPersonSlice } from "./features/contactPerson/contactPersonSlice";
import { contactListSlice } from "./features/contactList/contactListSlice";
import { messageSlice } from "./features/messages/messageSlice";
import { userSlice } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    recentsMessages: recentsMessagesSlice.reducer,
    contactPerson: contactPersonSlice.reducer,
    conversation: conversationSlice.reducer,
    messages: messageSlice.reducer,
    contactList: contactListSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
