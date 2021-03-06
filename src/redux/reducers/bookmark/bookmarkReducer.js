import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.BOOKMARK_PENDING:
      return { ...state, bookmarkPending: true };
    case actionTypes.BOOKMARK_SUCCESS:
      return { ...state, bookmarkPending: false, bookmarkStatus: action.bookmarkStatus };
    case actionTypes.BOOKMARK_ERROR:
      return { ...state, bookmarkPending: false, bookmarkError: action.bookmarkError };
    case actionTypes.FETCH_MY_BOOKMARKS__FAIL:
      return { ...state, myBookmarkSuccess: 'fail' };
    case actionTypes.FETCH_MY_BOOKMARKS_SUCCESS:
      return { ...state, myBookmarks: action.bookmarks, myBookmarkSuccess: 'success' };
    default:
      return state;
  }
}
