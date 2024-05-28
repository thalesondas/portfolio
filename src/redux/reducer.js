import { createSlice, combineReducers } from '@reduxjs/toolkit';

const descricaoSlice = createSlice({
    name: 'descricao',
    initialState: {
        descricao: '',
        titulo: ''
    },
    reducers: {
        setDescricao: (state, action) => { state.descricao = action.payload },
        setTitulo: (state, action) => { state.titulo = action.payload }
    }
})

const rootReducer = combineReducers({
    descricao: descricaoSlice.reducer
})

export const { setDescricao } = descricaoSlice.actions;
export const { setTitulo } = descricaoSlice.actions;

export default rootReducer;