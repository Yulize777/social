import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const findAllUser = createAsyncThunk(
    'findUser/findAllUser',
    async (filter,{rejectWithValue}) => {
        try {
            const res = await axios(`/users?not=${filter.login}&search=${filter.search}`)
            if (res.statusText !== 'OK') {
                throw new Error('data cant be found')
            }

            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const findUser = createSlice({
    name: 'findUser',
    initialState: {
        data: [],
        status: '',
        error: '',
        filter: {
            search: ''
        }
    },
    reducers: {
        changeUser: (state, action) => {
            state.filter = {
                ...state.filter,
                search: action.payload
            }
        }
    },
    extraReducers: {
        [findAllUser.pending]: (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [findAllUser.rejected]: (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [findAllUser.fulfilled]: (state,action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }
})
export const {changeUser} = findUser.actions
export default findUser.reducer