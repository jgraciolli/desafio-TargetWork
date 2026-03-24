import { CategoriaProdutoDto } from "@/src/@DTO/CategoriaProdutoDto";
import { createSlice } from "@reduxjs/toolkit";
import { listCategoriaThunk } from "./thunks";

const initialState = {
  loading: false,
  list: [] as CategoriaProdutoDto[],
};

export const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCategoriaThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(listCategoriaThunk.rejected, (state) => {
        state.loading = false;
      });
    builder.addCase(listCategoriaThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
  },
});

export const {} = categoriasSlice.actions;
