interface AddressBook {
  emp_id: string|null;
  first: string;
  last: string;
  email: string;
}
interface Payroll {
  emp_id: string;
  vacationDays: number;
}
interface Employee {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date|null;
}
export interface EmailApi {
  sendEmail(email: string, subject: string, body: string): Promise<void>
}
function yearsSince(startDate: Date, endDate: Date): number {
  const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
  return ( endDate.getTime() - startDate.getTime() ) / millisecondsPerYear;
}
/**
* We haved decided to grant bonus vacation to every employee, 1 day per year of experience
* we need to email them a notice.
*/
export function grantVacation(
  emailApi: EmailApi,
  payroll: Payroll[],
  addresses: AddressBook[],
  employees: Employee[],
) {
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
      return emailApi.sendEmail(
          addressInfo.email,
          "Good news!",
          `Dear ${empInfo.name}\n` +
          `based on your ${yearsEmployed} years of employment, you have been granted ${yearsEmployed} days of vacation, bringing your total to ${newVacationBalance}`
      );
  }).filter((item) => item != null);

  Promise.all(promises)
  .then(result => {
    console.log('all done');
  });
}

