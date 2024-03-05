/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SDK {
  sdk: any;
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const sdk = createSlice({
  name: 'sdk',
  initialState: { sdk: null }, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    getSDK(state, action: PayloadAction<SDK>) {
      state.sdk = action.payload.sdk;
      return state;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { getSDK } = sdk.actions;
export default sdk.reducer;
