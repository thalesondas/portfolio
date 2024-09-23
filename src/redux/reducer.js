import { createSlice, combineReducers } from '@reduxjs/toolkit';

const descricaoSlice = createSlice({
    name: 'descricao',
    initialState: {
        descricao: 'Coloque o mouse sobre o ícone para saber sobre a tecnologia específica.',
        titulo: 'Saiba sobre a tecnologia',
        habilidadeAtiva: ''
    },
    reducers: {
        setDescricao: (state, action) => { state.descricao = action.payload },
        setTitulo: (state, action) => { state.titulo = action.payload },
        setHabilidadeAtiva: (state, action) => { state.habilidadeAtiva = action.payload }
    }
})

const rootReducer = combineReducers({
    descricao: descricaoSlice.reducer
})

export const { setDescricao, setTitulo, setHabilidadeAtiva } = descricaoSlice.actions;

export default rootReducer;