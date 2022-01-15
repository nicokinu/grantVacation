import {EmailApi, grantVacation} from "./grantVacation";


class TestEmailApi implements EmailApi {
  async sendEmail(email: string, subject: string, body: string): Promise<void> {
    // TODO: Dummy function
    console.log(`email to ${email} is sent.`);
  }
}
let emailApi = new TestEmailApi();

let payroll = [
  {emp_id:"1", vacationDays:5},
  {emp_id:"2", vacationDays:7}
];

let addresses = [{
  emp_id: "1",
  first: "James",
  last: "Hudson",
  email: "james@company.com"
},
{
  emp_id: "2",
  first: "Henry",
  last: "Ma",
  email: "henry@company.com"
}];

let employees = [
  {
    id: "1",
    name: "James Hudson",
    startDate: new Date("2018-03-10"),
    endDate: null
  },
  {
    id: "2",
    name: "Henry Ma",
    startDate: new Date("2016-011-20"),
    endDate: null
  }
];

grantVacation(emailApi, payroll,addresses,employees);