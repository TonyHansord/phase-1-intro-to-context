// Your code here
function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(employees) {
  return employees.map((employee) => {
    return createEmployeeRecord(employee);
  });
}

function createTimeInEvent(record, dateStamp) {
  let [date, hour] = dateStamp.split(' ');

  let timeInEvent = {
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date,
  };
  record.timeInEvents.push(timeInEvent);
  return record;
}

function createTimeOutEvent(record, dateStamp) {
  let [date, hour] = dateStamp.split(' ');

  let timeOutEvent = {
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date,
  };
  record.timeOutEvents.push(timeOutEvent);
  return record;
}

function hoursWorkedOnDate(employee, date) {
  let timeIn = employee.timeInEvents.find((event) => event.date === date);
  let timeOut = employee.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
  let wages = hoursWorkedOnDate(employee, date) * employee.payPerHour;
  return wages;
}

function allWagesFor(employeeRecord) {
  let datesWorked = employeeRecord.timeInEvents.map((element) => element.date);

  return datesWorked.reduce();
}

// let gray = createEmployeeRecord(['Gray', 'Worm', 'Security', 13]);
// createTimeInEvent(gray, '2014-02-28 0800');
// createTimeOutEvent(gray, '2014-02-28 1400');
// createTimeInEvent(gray, '2014-02-29 0800');
// createTimeOutEvent(gray, '2014-02-29 1400');
// hoursWorkedOnDate(gray, '2014-02-28');
// allWagesFor(gray);
