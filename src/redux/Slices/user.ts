/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  address: string;
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const user = createSlice({
  name: 'address',
  initialState: { address: '' }, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    getAddress(state, action: PayloadAction<User>) {
      state.address = action.payload.address;
      // 업데이트 되는 State 를 return 해준다.
      return state;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { getAddress } = user.actions;
export default user.reducer;
