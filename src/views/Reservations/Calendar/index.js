import React, { Component, Fragment } from "react";
import moment from "moment";
import styled from "styled-components";

const WeekDays = () => {
  let weeks = [];
  for (let i = 1; i <= 7; i++) {
    console.log(
      "weekdays",
      moment()
        .day(i)
        .format("ddd")
    );
    weeks.push(
      <WeekDay key={moment().day(i)}>
        {moment()
          .day(i)
          .format("ddd")}
      </WeekDay>
    );
  }

  return weeks;
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment()
    };
    this.selectDate = this.selectDate.bind(this);
    this.getPreviousMonth = this.getPreviousMonth.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
  }

  selectDate() {}

  getPreviousMonth() {}

  getNextMonth() {}

  render() {
    return (
      <CalendarContainer>
        <SelectedDate>{moment().format("DD-MM-YYYY")}</SelectedDate>
        <WeekDays />
      </CalendarContainer>
    );
  }
}

export default Calendar;

const WeekDay = styled.div`
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
`;

const CalendarContainer = styled.div``;

const SelectedDate = styled.div``;
