import moment from 'moment'

const initialState = {
    users: 0,
    exitedUsers: 0,
    started: false,
    started_time: null,
    answerd: false,
    program: [], // list of times computer will leave
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ANSWER':
            return Object.assign({}, state, {
                answered: true
            })
        case 'CHANGE_TYPE':
            return Object.assign({}, state, {
                started: false,
                started_time: moment(),
                experiment_type: action.experiment_type
            })
        case 'UPDATE_CONTENTS':
            return Object.assign({}, state, {
                experiment_type: action.experiment_type,
                started: action.started,
                answerd: action.answerd,
                users: action.users,
                exitedUsers: action.exited_users
            })
        case 'UPDATE_USERS':
            return Object.assign({}, state, {
                users: action.users,
                exitedUsers: action.exited_users
            })
        case 'START':
            return Object.assign({}, state, {
                started: true,
                started: false,
                started_time: moment(),
                users: action.users,
                exitedUsers: action.exited_users
            })
        case 'STOP':
            return Object.assign({}, state, {
                started: false
            })
        default:
            return state
    }
}

export default reducer