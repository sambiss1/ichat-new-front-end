import { configureStore } from "@reduxjs/toolkit";
import { recentsMessagesSlice } from "./features/recentsMessages/recentsMessagesSlice";
// import { conversationSlice } from "./features/conversaions/conversationsSlice";
import { conversationSlice } from "./features/conversations/conversationSlice";
// import { contactPersonSlice } from "./features/contactPerson/contactPersonSlice";

import { contactPersonSlice } from "./features/contactPerson/contactPersonSlice";
// import { socketSlice } from "./features/socket/socketSlice";
import { messageSlice } from "./features/messages/messageSlice";

export const store = configureStore({
  reducer: {
    recentsMessages: recentsMessagesSlice.reducer,
    contactPerson: contactPersonSlice.reducer,
    conversation: conversationSlice.reducer,
    messages: messageSlice.reducer,

    // socket: socketSlice.reducer,
  },
});

export default store;
