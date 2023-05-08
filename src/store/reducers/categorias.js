import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriaService from 'services/categorias';

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriaService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (state, {payload}) => {
        return payload;
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, {payload}) => {

      }
    )
    .addCase (
      buscarCategorias.rejected,
      (state, {payload}) => {
        
      }
    )
  }
});

export default categoriasSlice.reducer;