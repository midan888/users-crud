import React from 'react';
import uuidV4 from 'uuid/v4';

import {trans} from '../../dictionary';
import Input from '../general/Input';
import {validate} from '../../helpers/validator';
import BirthdayDropdown from '../general/BirthdayDropdown';

class UserForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            user: {
                firstName:null,
                lastName:null,
                secondName:null,
                birthday:null,
                address:null,
                city:null,
                phone: null
            },

            validationErrors:{},
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.setBirthday = this.setBirthday.bind(this);
    }

    componentDidMount() {
        if (this.props.user) {
            this.setState({user:this.props.user, isEditMode: true});
        }
    }

    componentWillUnmount() {
        this.state.isDirty = false;
        this.state.user = null;
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.isFormValid()) {
            return;
        }

        const {user} = this.state;

        if (!this.state.isEditMode) {
            user.id = uuidV4();
        }

        this.props.onUserSubmit(this.state.user, this.state.isEditMode);
        this.setState({user:{}})
    }

    onFieldChange(event) {

        const field = event.target.name;
        const value = event.target.value;
        let {user, validationErrors} = this.state;
        const error = this.fieldIsInvalid(field, value);

        if (error) {
            validationErrors[field] = error;
        } else {
            validationErrors[field] = null;
        }

        user[field] = value;
        this.setState({user, validationErrors});
    }

    fieldIsInvalid(field, value) {
        const rules = this.validationRules()[field];
        if (!rules) {
            return false;
        }

        const result = validate(value, rules);
        return result ? false : rules.message;
    }

    validationRules() {

        return {
            firstName:{
                type:'string',
                required:true,
                maxLength: 10,
                message: 'First name is invalid'
            },
            lastName:{
                type:'string',
                required:true,
                maxLength: 100,
                message: 'Last name is invalid'
            },
            secondName:{
                type:'string',
                required:true,
                maxLength: 100,
                message: 'Second name is invalid'
            },
            phone: {
                type:'string',
                regex: '^((\\+7|7|8)+9([0-9]){9})$',
                required:true,
                message: 'Phone number is invalid'
            }
        }
    }

    isFormValid() {
        const errors = {};
        for (const field in this.state.user) {
            errors[field] = this.fieldIsInvalid(field, this.state.user[field]);
        }

        this.setState({validationErrors: errors});

        for (const field in errors) {
            if (errors[field]) {
                return false;
            }
        }

        return true;
    }

    setBirthday(date) {

        const {user} = this.state;
        user.birthday = date;

        this.setState({
            user
        })
    }

    render() {

        return (
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    <Input label={trans('first_name')}
                        value={this.state.user.firstName}
                        name="firstName"
                        placeholder={trans('example.first_name')}
                        error={this.state.validationErrors.firstName}
                        onInputChange={this.onFieldChange}/>

                    <Input label={trans('last_name')}
                           value={this.state.user.lastName}
                           name="lastName"
                           placeholder={trans('example.last_name')}
                           error={this.state.validationErrors.lastName}
                           onInputChange={this.onFieldChange} />

                    <Input label={trans('second_name')}
                           value={this.state.user.secondName}
                           name="secondName"
                           placeholder={trans('example.second_name')}
                           error={this.state.validationErrors.secondName}
                           onInputChange={this.onFieldChange} />

                    <Input label={trans('address')}
                           value={this.state.user.address}
                           name="address"
                           placeholder={trans('example.address')}
                           error={this.state.validationErrors.address}
                           onInputChange={this.onFieldChange} />

                    <Input label={trans('city')}
                           value={this.state.user.city}
                           name="city"
                           placeholder={trans('example.city')}
                           error={this.state.validationErrors.city}
                           onInputChange={this.onFieldChange} />

                    <Input label={trans('phone')}
                           value={this.state.user.phone}
                           name="phone"
                           placeholder={trans('example.phone')}
                           error={this.state.validationErrors.phone}
                           onInputChange={this.onFieldChange} />

                    <BirthdayDropdown onDateChange={this.setBirthday} birthday={this.state.user.birthday}/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserForm;

