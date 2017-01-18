import React from 'react';
import Router from '../../helpers/Router';
import {connect} from 'react-redux';

import {userSelect, userDelete} from '../../actions/user';
import {trans} from '../../dictionary';
import TableComponent from '../general/TableComponent';

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.toUserEditPage = this.toUserEditPage.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }

    toUserEditPage(user) {
        this.props.userSelect(user);
        Router.redirectTo('users/edit');
    }

    toUserCreatePage() {
        this.props.userSelect(null);
        Router.redirectTo('users/create');
    }

    userDelete(user) {
        this.props.userDelete(user);
    }

    render() {

        const tableHead = [
            trans('first_name'),
            trans('last_name'),
            trans('second_name'),
            trans('city'),
            trans('address'),
            trans('phone'),
        ];

        const tableActions = [
            {
                icon: 'glyphicon-pencil',
                handler: this.toUserEditPage
            },
            {
                icon: 'glyphicon-remove',
                handler: this.userDelete
            },
        ];

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

                <TableComponent
                    head={tableHead}
                    body={this.props.userStore.users}
                    actions={tableActions}
                />
            </div>
        )
    }
}

export default connect((state) => {
    return {
        userStore: state.user
    }
}, {userSelect,userDelete})(UserList);