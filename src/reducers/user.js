
import Storage from '../storage';
import {
    USER_CREATE,
    USER_SELECT,
    USER_EDIT,
    USER_DELETE
} from '../actions/user';

const INITIAL_STATE = {
    users: Storage.allUsers(),
    selectedUser: null
};

export default function (state = INITIAL_STATE, action) {


    switch (action.type) {

        case USER_CREATE:
            Storage.storeUser(action.user);
            state.users.push(action.user);
            return Object.assign({}, state, {users: state.users});

        case USER_EDIT:
            const usersEdited = state.users.map((user) => {
                if (user.id === action.user.id) {
                    return action.user;
                }

                return user;
            });

            Storage.storeUser(action.user);
            return Object.assign({}, state, {users:usersEdited});
        case USER_SELECT:
            return Object.assign({}, state, {selectedUser: action.user});

        case USER_DELETE:
            const usersDeleted = state.users.filter((user) => {
                return user.id !== action.user.id;
            });

            Storage.deleteUser(action.user);

            return Object.assign({}, state, {users:usersDeleted});
        default:
            return state;
    }
}