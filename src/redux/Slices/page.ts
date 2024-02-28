/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Page {
  curPage: string;
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const page = createSlice({
  name: 'page',
  initialState: { page: 'Home' }, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    pageChange(state, action: PayloadAction<Page>) {
      state.page = action.payload.curPage;
      return state;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { pageChange } = page.actions;
export default page.reducer;
