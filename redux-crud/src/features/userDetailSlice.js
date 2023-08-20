import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// create action
export const createUser = createAsyncThunk("createUser", async (data , {rejectWithValue}) => {
  const response = await fetch(
    "https://64e0ab7e50713530432c9001.mockapi.io/crud-users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.response)
  }
});
// end create action

// read action
 export const showUser = createAsyncThunk("showUser", async (data,{rejectWithValue}) => {
    const response = await fetch( "https://64e0ab7e50713530432c9001.mockapi.io/crud-users"
    )

    try{;
        const result = await response.json();
        return result
    }
    catch (error) {
        return rejectWithValue(error)
    }
 });
// end read action
const userDetail = createSlice({
  name: "userDetail",
  initialState,
  extraReducers: {
    [createUser.pending]: (state) => {
        state.loading = true;
    },
    [createUser.fulfilled]: (state , action) => {
        state.loading = false;
        state.users.push(action.payload)
    },
    [createUser.rejected]: (state , action) => {
        state.loading= false;
        state.error = action.payload.message
    },
    [showUser.pending]: (state) => {
        state.loading = true;
    },
    [showUser.fulfilled]: (state , action) => {
        state.loading = false;
        state.users = action.payload
    },
    [showUser.rejected]: (state , action) => {
        state.loading= false;
        state.error = action.payload
    }
  }
});

export default userDetail.reducer;
