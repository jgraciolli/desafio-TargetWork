import { db } from "@/src/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const listCategoriaThunk = createAsyncThunk(
  "categorias/list",
  async (_, { rejectWithValue }) => {
    try {
      return await db.query.categoria.findMany();
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao buscar as categorias";
      Alert.alert("Erro", message);
      throw rejectWithValue(message);
    }
  },
);
