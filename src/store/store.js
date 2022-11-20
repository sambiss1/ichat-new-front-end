import { configureStore } from "@reduxjs/toolkit";
import { recentsMessagesSlice } from "./features/recentsMessages/recentsMessagesSlice";
// import { conversationSlice } from "./features/conversaions/conversationsSlice";
// import { contactPersonSlice } from "./features/contactPerson/contactPersonSlice";

import {contactPersonSlice} from "./features/contactPerson/contactPersonSlice";
// import { socketSlice } from "./features/socket/socketSlice";

export const store = configureStore({
  reducer: {
    recentsMessages: recentsMessagesSlice.reducer,
    contactPerson: contactPersonSlice.reducer,
    // socket: socketSlice.reducer,
  },
});

export default store;
