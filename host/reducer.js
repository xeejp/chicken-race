const initialState = {
  started: false,
  experiment_type: "no_interaction",
  users: [],
  prize: 0,
  exitedUsers: 0,
  limit: 100,
  exitFunction: () => 1,
  log: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_LIMIT':
      return Object.assign({}, state, {
        limit: action.limit
      })
    case 'UPDATE_EXIT_FUNCTION':
      return Object.assign({}, state, {
        exitFunction: action.exitFunction
      })
    case 'UPDATE_EXITED_USER':
      return Object.assign({}, state, {
        exitedUsers: action.exited_users
      })
    case 'UPDATE_PRIZE':
      return Object.assign({}, state, {
        prize: action.prize
      })
    case 'CHANGE_TYPE':
      return Object.assign({}, state, {
        started: false,
        experiment_type: action.experiment_type
      })
    case 'UPDATE_CONTENTS':
      return Object.assign({}, state, {
        started: action.started,
        experiment_type: action.experiment_type,
        users: action.users,
        prize: action.prize,
        exitedUsers: action.exited_users,
        log: action.log
      })
    case 'UPDATE_LOG':
      return Object.assign({}, state, {
        log: action.log
      })
    case 'SET_USERS':
      return Object.assign({}, state, {
        users: action.users
      })
    case 'ADD_USER':
      var user = {}
      user[action.id] = action.user
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, user)
      })
    case 'UPDATE_USER':
      var user = {}
      user[action.id] = action.user
      let users = action.users
      if (users) {
        return Object.assign({}, state, {
          users: users
        })
      }
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, user)
      })
    case 'START':
      return Object.assign({}, state, {
        exitedUsers: 0,
        started: true,
        users: action.users,
        prize: 0
      })
    case 'STOP':
      return Object.assign({}, state, {
        started: false
      })
    case 'EXIT':
      return Object.assign({}, state, {
        exitedUsers: action.exited_users
      })
    default:
      return state
  }
}

export default reducer
