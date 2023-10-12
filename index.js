/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  
  function createTimeInEvent(dateStamp) {
    // Split the dateStamp into date and time components
    const [date,hour] = dateStamp.split(" ");
  
    // Split the time into hour and minute components
 
  
    // Create a new time in event object
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    };
  
    // Add the time in event to the employee record's timeInEvents array
    this.timeInEvents.push(timeInEvent);
  
    // Return the updated employee record
    return this;
  }
  
  
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date:date

     
    });
    
  
    return this;
  }

 

  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  

  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this,date);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
  }
  
  
  function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
   
  }
  
 
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
 
  function calculatePayroll(employeeRecords) {
  

    return employeeRecords.reduce((total, num) => total + allWagesFor.call(num), 0);
  }

