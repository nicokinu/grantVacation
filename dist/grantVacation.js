"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grantVacation = void 0;
function yearsSince(startDate, endDate) {
    const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
    return (endDate.getTime() - startDate.getTime()) / millisecondsPerYear;
}
/**
* We haved decided to grant bonus vacation to every employee, 1 day per year of experience
* we need to email them a notice.
*/
function grantVacation(emailApi, payroll, addresses, employees) {
    let addressMap = new Map(addresses.map(x => [x.emp_id, x]));
    let employeesMap = new Map(employees.map(x => [x.id, x]));
    let promises = payroll.map(payrollInfo => {
        let addressInfo = addressMap.get(payrollInfo.emp_id);
        let empInfo = employeesMap.get(payrollInfo.emp_id);
        if (addressInfo == null || empInfo == null) {
            return null;
        }
        let today = new Date();
        const yearsEmployed = yearsSince(empInfo.startDate, today);
        let newVacationBalance = yearsEmployed + payrollInfo.vacationDays;
        return emailApi.sendEmail(addressInfo.email, "Good news!", `Dear ${empInfo.name}\n` +
            `based on your ${yearsEmployed} years of employment, you have been granted ${yearsEmployed} days of vacation, bringing your total to ${newVacationBalance}`);
    }).filter((item) => item != null);
    Promise.all(promises)
        .then(result => {
        console.log('all done');
    });
}
exports.grantVacation = grantVacation;
//# sourceMappingURL=grantVacation.js.map