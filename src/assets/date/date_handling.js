const weekdayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function thisWeeksMonday() {
  var today = new Date();
  var dayOfWeek = today.getDay();
  return new Date(
    today.setDate(today.getDate() - (dayOfWeek ? dayOfWeek - 1 : -6))
  )
    .toISOString()
    .split("T")[0];
}

function todaysWeekDay() {
  var today = new Date();
  return weekdayName[today.getDay()];
}

module.exports = {
  thisWeeksMonday,
  todaysWeekDay,
  weekdayName,
  monthName
};
