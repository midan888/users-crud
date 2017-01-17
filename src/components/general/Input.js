import React from 'react';
import classnames from 'classnames';

class Input extends React.Component {

    render() {

        const groupClassName = classnames({
            'form-group': true,
            'has-error': this.props.error
        });

        return (
            <div className={groupClassName}>
                <label className="control-label">{this.props.label}</label>
                <input
                    type="text"
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.placeHolder}
                    value={this.props.value || ''}
                    onChange={this.props.onInputChange}
                />
                <span className="help-block">{this.props.error}</span>
            </div>
        )
    }
}

Input.propTypes = {
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    placeHolder: React.PropTypes.string,
    optionalValue: React.PropTypes.string,
    onInputChange: React.PropTypes.func
};

export default Input;