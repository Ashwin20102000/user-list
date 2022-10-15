import {  configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import usersSlice from "./usersSlice";


let sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    users:usersSlice
  },
  middleware:[sagaMiddleware]
});

sagaMiddleware.run(saga);

export default store;
