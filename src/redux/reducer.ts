import { createSlice, combineReducers } from '@reduxjs/toolkit';

const descriptionSlice = createSlice({
    name: 'description',
    initialState: {
        description: 'Passe o mouse (em dispositivos maiores) ou clique (em dispositivos menores) no ícone para saber sobre a tecnologia específica.',
        title: 'Saiba sobre a tecnologia',
        activeSkill: ''
    },
    reducers: {
        setDescription: (state, action) => { state.description = action.payload },
        setTitle: (state, action) => { state.title = action.payload },
        setActiveSkill: (state, action) => { state.activeSkill = action.payload },
        resetActiveSkill: (state) => { state.activeSkill = '' }
    }
})

const rootReducer = combineReducers({
    description: descriptionSlice.reducer
})

export const { setDescription, setTitle, setActiveSkill, resetActiveSkill } = descriptionSlice.actions;

export default rootReducer;