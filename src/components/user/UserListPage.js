import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {userSelect, userDelete} from '../../actions/user';
import {trans} from '../../dictionary';

class UserList extends React.Component {

    toUserEditPage(user) {
        this.props.userSelect(user);
        browserHistory.push('users/edit');
    }

    toUserCreatePage() {
        this.props.userSelect({});
        browserHistory.push('/users/create')
    }

    userDelete(user) {
        this.props.userDelete(user);
    }

    buildUserList() {
        return this.props.userStore.users.map((user, i) => {
            return (
                <tr key={i}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.secondName}</td>
                    <td>{user.city}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td onClick={(e) => this.toUserEditPage(user)}>
                        <i className="glyphicon glyphicon-pencil"/>
                    </td>
                    <td onClick={(e) => this.userDelete(user)}>
                        <i className="glyphicon glyphicon-remove"/>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="pull-right">
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={() => this.toUserCreatePage()}
                        >{trans('button.create_user')}</button>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>{trans('first_name')}</th>
                            <th>{trans('last_name')}</th>
                            <th>{trans('second_name')}</th>
                            <th>{trans('city')}</th>
                            <th>{trans('address')}</th>
                            <th>{trans('phone')}</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.buildUserList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        userStore: state.user
    }
}, {userSelect,userDelete})(UserList);