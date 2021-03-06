import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return { ...state, articleDeleted: true };
    case actionTypes.DELETE_ARTICLE_FAIL:
      return { ...state, articleDeleted: false };
    case actionTypes.RATE_ARTICLE_SUCCESS:
      return { ...state, articleRated: true };
    case actionTypes.RATE_ARTICLE_FAIL:
      return { ...state, articleRated: false };
    default:
      return state;
  }
};
export default ArticleReducer;
