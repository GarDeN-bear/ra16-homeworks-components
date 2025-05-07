import "./css/main.css";

import React from "react";

const Calendar = ({ date }) => {
  const daysOfWeek = [
    ["Понедельник", "Пн"],
    ["Вторник", "Вт"],
    ["Среда", "Ср"],
    ["Четверг", "Чт"],
    ["Пятница", "Пт"],
    ["Суббота", "Сб"],
    ["Воскресенье", "Вс"],
  ];

  const months = [
    "Декабря",
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
  ];

  const monthNames = [
    "Декабрь",
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
  ];

  const dayOfMonth = daysOfWeek[date.getDay()][0];
  const monthName = monthNames[date.getMonth()];
  const monthsName = months[date.getMonth()];
  const lastDayOfPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    0
  );
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  let monthInfo = [];
  let firstDayOfMonth = lastDayOfPreviousMonth.getDay();

  while (firstDayOfMonth > 0) {
    monthInfo.push({
      day: lastDayOfPreviousMonth.getDate() - firstDayOfMonth + 1,
      week: 1,
      dayClass: "ui-datepicker-other-month",
    });
    --firstDayOfMonth;
  }
  for (let i = 1; i < lastDayOfMonth.getDate() + 1; ++i) {
    if (i === date.getDate()) {
      monthInfo.push({
        day: i,
        week: Math.ceil((monthInfo.length + 1) / 7),
        dayClass: "ui-datepicker-today",
      });
    } else {
      monthInfo.push({
        day: i,
        week: Math.ceil((monthInfo.length + 1) / 7),
        dayClass: "",
      });
    }
  }
  let lastDayOfWeek = 1;
  while (monthInfo.length < 7 * monthInfo[monthInfo.length - 1].week) {
    monthInfo.push({
      day: lastDayOfWeek++,
      week: monthInfo[monthInfo.length - 1].week,
      dayClass: "ui-datepicker-other-month",
    });
  }

  const renderRows = () => {
    const month = [];
    for (let i = 0; i < Math.ceil(monthInfo.length / 7) + 1; ++i) {
      const weeks = [];
      monthInfo.forEach((info, index) => {
        if (info.week === i) {
          weeks.push(
            <td key={index} className={info.dayClass}>
              {info.day}
            </td>
          );
        } else {
          return;
        }
      });
      month.push(<tr key={i}>{weeks}</tr>);
    }
    return month;
  };

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{dayOfMonth}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthsName}</div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{monthName}</span>&nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} scope="col" title={day[0]}>
                {day[1]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
