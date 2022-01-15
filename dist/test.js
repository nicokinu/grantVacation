"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grantVacation_1 = require("./grantVacation");
class TestEmailApi {
    sendEmail(email, subject, body) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Dummy function
            console.log(`email to ${email} is sent.`);
        });
    }
}
let emailApi = new TestEmailApi();
let payroll = [
    { emp_id: "1", vacationDays: 5 },
    { emp_id: "2", vacationDays: 7 }
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
(0, grantVacation_1.grantVacation)(emailApi, payroll, addresses, employees);
//# sourceMappingURL=test.js.map