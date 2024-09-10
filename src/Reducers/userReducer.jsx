// src/Slice/userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deletUser, getAllUserService, insertUser } from '../Services/SignupService';
import { useNavigate } from 'react-router-dom';
import { getuserservice } from '../Services/LoginService';

// Async thunk to fetch all users
export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUserService();
      return response.data; // Return the data as payload
    } catch (error) {
      return rejectWithValue(error.message); // Handle the error
    }
  }
);

// Async thunk to add a new user

export const addUser = createAsyncThunk(
  
  'user/addUser',
  
  async (user, { rejectWithValue }) => {
    try {
           const response = await insertUser(user);
      alert("User Registered Successfully")
      return response.data; // Return the added user data as payload
    } catch (error) {
      alert("Error Occurred")
      return rejectWithValue(error.message); // Handle the error
    }
  }
);

export const getOneUser = createAsyncThunk(
  'emailid/getOneUser',
  async(emailid,{rejectWithValue})=>{
    try
    {
      const response = await getuserservice(emailid)
      return response.data;
    }
    catch(error)
    {
      return rejectWithValue(error.value)
    }
  }
)

    export const deleteuser = createAsyncThunk(
  'id/deleteuser',
  async(id,{rejectWithValue})=>{
    try
    {
      const response = await deletUser(id)
      return response.data
    }
    catch(error)
    {
      return rejectWithValue(error.value)
    }
  }
)
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneUser.pending,(state)=>{
        state.loading = true;
        state.error=null;
      })
      .addCase(getOneUser.fulfilled,(state,action)=>{
        state.loading =false;
        state.users=action.payload;
      })
      .addCase(getOneUser.rejected,(state,action)=>{
        state.loading =false;
        state.error=action.payload;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    
  },
});

export default userSlice.reducer;
