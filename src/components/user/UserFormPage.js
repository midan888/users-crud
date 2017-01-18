import React from 'react';
import {connect} from 'react-redux';
import Router from '../../helpers/Router';

import UserForm from './UserForm';
import {userCreate, userEdit} from '../../actions/user';

class UserFormPage extends React.Component {

    constructor(props) {
        super(props);

        this.onUserSubmit = this.onUserSubmit.bind(this);
    }

    onUserSubmit(user, isEdit) {

        if (isEdit) {
            this.props.userEdit(user)
        } else {
            this.props.userCreate(user)
        }

        Router.redirectTo('/');
    };

    render() {

        return (
          <div className="container">
              <UserForm user={this.props.userStore.selectedUser} onUserSubmit={this.onUserSubmit}/>
          </div>
        );
    }
}

export default connect((state) => {
    return {
        userStore: state.user
    }
},{userCreate, userEdit})(UserFormPage);