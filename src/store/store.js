import { createStore } from 'redux'

const initialState = {
  recentSearches: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SEARCH': {
      const q = (action.payload || '').trim()
      if (!q) return state
      const filtered = state.recentSearches.filter(
        (s) => s.toLowerCase() !== q.toLowerCase()
      )
      const updated = [q, ...filtered].slice(0, 5)
      return { ...state, recentSearches: updated }
    }
    case 'CLEAR_SEARCHES':
      return { ...state, recentSearches: [] }
    case 'SET_SEARCHES':
      return { ...state, recentSearches: Array.isArray(action.payload) ? action.payload : [] }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
