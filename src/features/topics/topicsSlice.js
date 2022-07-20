import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      }
    },
      addQuizIdToTopic: (state, action) => {
        const { topicId, quizId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      }
  }
})

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics
export default topicsSlice.reducer