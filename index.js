
const createEmployeeRecord = (employeeArray) => {
    let employee = {
        firstName : employeeArray[0],
        familyName : employeeArray[1],
        title : employeeArray[2],
        payPerHour : employeeArray[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee;
}

const createEmployeeRecords = (employeeArrays) => {
    return employeeArrays.map((employeeArray) => { return createEmployeeRecord(employeeArray) })
    // return createEmployeeRecord()
}

function createTimeInEvent(timeIn){
    let newTimeInEvent = {
        type: 'TimeIn',
        hour: parseInt(timeIn.split(' ')[1]),
        date: timeIn.split(' ')[0], 
    }
    this.timeInEvents.push(newTimeInEvent)
    return this
}

function createTimeOutEvent(timeOut){
    let newTimeOutEvent = {
        type: 'TimeOut',
        hour: parseInt(timeOut.split(' ')[1]),
        date: timeOut.split(' ')[0], 
    }
    this.timeOutEvents.push(newTimeOutEvent)
    return this
}

function hoursWorkedOnDate(date){
    let timeOutOnDate = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    let timeInOnDate = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    return (timeOutOnDate.hour - timeInOnDate.hour)/100
}

function wagesEarnedOnDate(date){
    let payableHours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * payableHours
}

function payrollExpense(listOfEmployees){
    listOfEmployees.reduce((emmployee) => {
        allWagesFor.call(employee)
    },acc)

}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}