import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getdoctor = createAsyncThunk("doctor/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/doctor/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const adddoctor = createAsyncThunk("doctor/add", async (newdoctor) => {
  try {
    let result = axios.post("http://localhost:5000/doctor/add", newdoctor);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deletedoctor = createAsyncThunk("doctor/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/doctor/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const editdoctor = createAsyncThunk("doctor/edit", async ({ id, edited }) => {
  try {
    let result = axios.put(`http://localhost:5000/doctor/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {

  status: null,
  doctors: null
}

export const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {

  },
  extraReducers: {


    //doctor
    [getdoctor.pending]: (state) => {
      state.status = "pending";
    },
    [getdoctor.fulfilled]: (state, action) => {
      state.status = "success";
      state.doctors = action.payload.data.doctors;
    },
    [getdoctor.rejected]: (state) => {
      state.status = "fail";
    },
    [adddoctor.pending]: (state) => {
      state.status = "pending";
    },
    [adddoctor.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [adddoctor.rejected]: (state) => {
      state.status = "fail";
    },
    [deletedoctor.pending]: (state) => {
      state.status = "pending";
    },
    [deletedoctor.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletedoctor.rejected]: (state) => {
      state.status = "fail";
    },
    [editdoctor.pending]: (state) => {
      state.status = "pending";
    },
    [editdoctor.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editdoctor.rejected]: (state) => {
      state.status = "fail";
    },
  }
},
)

// Action creators are generated for each case reducer function
export const { } = DoctorSlice.actions

export default DoctorSlice.reducer