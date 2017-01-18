
import React from 'react';

class TableComponent extends React.Component {

    buildHead() {
        return this.props.head.map((field, i) => {
            return (<th key={i}>{field}</th>)
        })
    }

    buildEntityRow(entity) {
        let row = [];

        let i = 0;
        for (let property in entity) {
            row.push((
                <td key={property}>{entity[property]}</td>
            ));
            i++;

            if (this.props.head.length === i) {
                break;
            }
        }

        row = row.concat(this.buildActions(entity));

        return row;
    }

    buildBody() {
        return this.props.body.map((user, i) => {
            return (
                <tr key={i}>
                    {this.buildEntityRow(user)}
                </tr>
            )
        })
    }

    buildActions(entity) {

        return this.props.actions.map((action,i) => {
            return (
                <td key={i} onClick={(e) => action.handler(entity)}>
                    <i className={`glyphicon ${action.icon}`}/>
                </td>
            )
        });
    }

    render() {

        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.buildHead()}
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.buildBody()}
                </tbody>
            </table>
        );
    }
}

export default TableComponent;