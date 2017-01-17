
export const USER_CREATE = 'USER_CREATE';
export const USER_SELECT = 'USER_SELECT';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';

export function userCreate(user) {

    return {
        type: USER_CREATE,
        user
    }
}

export function userSelect(user) {

    return {
        type: USER_SELECT,
        user
    }
}

export function userEdit(user) {

    return {
        type: USER_EDIT,
        user
    }
}

export function userDelete(user) {

    return {
        type: USER_DELETE,
        user
    }
}