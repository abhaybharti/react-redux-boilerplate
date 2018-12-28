// src/reducers/index.js
import { ADD_ARTICLE } from '../constants/action-type';


const initialState = {
    articles: []
  };
  
  const rootReducer =( state = initialState, action) =>{
    let reminder;

  switch(action.type){
    case ADD_ARTICLE: 
      console.log('Add_Article Reducer added');
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    default:
      return state;
  }
}
export default rootReducer;
