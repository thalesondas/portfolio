import { createSlice, combineReducers } from '@reduxjs/toolkit';

const descricaoSlice = createSlice({
    name: 'descricao',
    initialState: {
        descricao: 'Coloque o mouse sobre o ícone para saber sobre a tecnologia específica.',
        titulo: 'Saiba sobre a tecnologia'
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