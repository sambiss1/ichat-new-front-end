import { configureStore } from "@reduxjs/toolkit";
import { recentsMessagesSlice } from "./features/recentsMessages/recentsMessagesSlice";
import { conversationSlice } from "./features/conversations/conversationSlice";
import { contactPersonSlice } from "./features/contactPerson/contactPersonSlice";
import {userSlice} from "./features/user/userSlice";

import { messageSlice } from "./features/messages/messageSlice";

export const store = configureStore({
  reducer: {
    recentsMessages: recentsMessagesSlice.reducer,
    contactPerson: contactPersonSlice.reducer,
    conversation: conversationSlice.reducer,
    messages: messageSlice.reducer,
    users: userSlice.reducer
  },
});

export default store;
