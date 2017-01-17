import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import UserForm from './components/user/UserFormPage';
import UserList from './components/user/UserListPage';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={UserList} />
        <Route path="users/edit" component={UserForm} />
        <Route path="users/create" component={UserForm} />
    </Route>
);