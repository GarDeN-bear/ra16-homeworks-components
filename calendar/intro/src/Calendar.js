import "./css/main.css";

import React from "react";

const Calendar = ({ date }) => {
  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  const months = [
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
    "Декабря",
  ];
  const monthNames = [
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
    "Декабрь",
  ];

  const dayOfMonth = daysOfWeek[date.getDay() - 1];
  const monthName = monthNames[date.getMonth() - 1];
  const monthsName = months[date.getMonth() - 1];
  const lastDayOfPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    0
  );
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  let monthInfo = [];
  let firstDayOfMonth = date.getDay() - 1;

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
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
