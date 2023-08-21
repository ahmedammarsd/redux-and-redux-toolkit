import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchData: [],
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

// update action
export const updateUser = createAsyncThunk("updateUser", async (data , {rejectWithValue}) => {
  const response = await fetch(
    `https://64e0ab7e50713530432c9001.mockapi.io/crud-users/${data[0].id}`,
    {
      method: "PUT",
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
// end update action

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

// delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id,{rejectWithValue}) => {
  const response = await fetch( `https://64e0ab7e50713530432c9001.mockapi.io/crud-users/${id}`, { method: "DELETE"}
  )

  try{;
      const result = await response.json();
      return result
  }
  catch (error) {
      return rejectWithValue(error)
  }
});
// end delete action
const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers:{
    searchUser: (state,action) => {
      state.searchData = action.payload
    }
  },
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
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state , action) => {
        state.loading = false;
       const {id} = action.payload
       if(id){
        state.users = state.users.filter( (ele) => ele.id !== id)
       }
       console.log("delete action ", action.payload)
    },
    [deleteUser.rejected]: (state , action) => {
        state.loading= false;
        state.error = action.payload
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state , action) => {
        state.loading = false;
       // state.users.push(action.payload)
       state.users = state.users.map( (ele) => (
        ele.id === action.payload.id ? action.payload : ele
       ))
    },
    [updateUser.rejected]: (state , action) => {
        state.loading= false;
        state.error = action.payload.message
    },
  }
});

export const { searchUser } = userDetail.actions
export default userDetail.reducer;
