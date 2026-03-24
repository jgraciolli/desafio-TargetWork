import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "./app";
import { categoriasSlice } from "./categorias";
import { clientesSlice } from "./clientes";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    clients: clientesSlice.reducer,
    categories: categoriasSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
