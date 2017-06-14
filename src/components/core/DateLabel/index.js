import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledDate, StyledDay, StyledMonth } from './style';

const monthParser = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

class DateLabel extends Component {
  getDay() {
    const date = new Date(this.props.date);
    return date.getDate();
  }

  getMonth() {
    const date = new Date(this.props.date);
    return monthParser[date.getMonth()];
  }

  render() {
    return (
      <StyledDate className={this.props.className}>
        <StyledDay>{this.getDay()}</StyledDay>
        <StyledMonth>{this.getMonth()}</StyledMonth>
      </StyledDate>
    );
  }
}

DateLabel.propTypes = {
  className: PropTypes.string,
  date: PropTypes.number.isRequired
};

DateLabel.defaultProps = {
  className: ''
};

export default DateLabel;
