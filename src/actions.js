// actions.js

// Action types
export const SET_QUOTE = 'SET_QUOTE';
export const SET_TAGS = 'SET_TAGS';
export const SET_BOOKMARKS = 'SET_BOOKMARKS';

// Action creators
export const setQuote = (quote) => ({
  type: SET_QUOTE,
  payload: quote,
});

export const setTags = (tags) => ({
  type: SET_TAGS,
  payload: tags,
});

export const setBookmarks = (quote) => ({
    type: SET_BOOKMARKS,
    payload: quote,
  });

