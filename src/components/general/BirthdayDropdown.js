import React from 'react';

class BirthdayDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day: null,
            month: null,
            year: null,
        };

        this.onYearChange = this.onYearChange.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onDayChange = this.onDayChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const bday = new Date(nextProps.birthday);
        this.setState({
            day: bday.getDate(),
            month: bday.getMonth(),
            year: bday.getFullYear(),
        });
    }


    onDayChange(e) {

        this.setState({
            day:e.target.value,
        }, () => this.updateDate());
    }

    onMonthChange(e) {

        this.setState({
            month:e.target.value
        }, () => this.updateDate());
    }

    onYearChange(e) {

        this.setState({
            year:e.target.value
        }, () => this.updateDate());
    }

    drawNumberDropdownOptions(start, end) {
        const options = [];

        for (let i=start; i<=end; i++) {
            options.push((
                <option key={i} value={i}>{i}</option>
            ));
        }

        return options;
    }

    updateDate() {

        const {day, month, year} = this.state;
        if (day && month && year) {
            const date = new Date();
            date.setMonth(month);
            date.setFullYear(year);
            date.setDate(day);
            this.props.onDateChange(date);
        }
    }

    render() {

        let {day, month, year} = this.state;

        return (
            <div className="form-group">
                <label>Birthday</label>
                <select onChange={this.onDayChange} value={day || 0}>
                    <option value="">please select</option>
                    {this.drawNumberDropdownOptions(1,31)}
                </select>
                <select onChange={this.onMonthChange} value={month || 0}>
                    <option value="">please select</option>
                    {this.drawNumberDropdownOptions(1,12)}
                </select>
                <select onChange={this.onYearChange} value={year || 0}>
                    <option value="">please select</option>
                    {this.drawNumberDropdownOptions(1915,2017)}
                </select>
            </div>
        )
    }
}

export default BirthdayDropdown;