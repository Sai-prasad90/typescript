
// Program 6


class Employeesss {
    private salary: number;
    protected employeeName: string;
    public employeeId: number = 789;


    // Constructor takes parameters'empName empSalary 
    constructor(empName: string, empSalary: number) {
        this.employeeName = empName;
        this.salary = empSalary;
    }


    // Method to calculate and return the bonus
    Bonus(bonusPercentage: number): number {
        const annualBonus = (this.salary * bonusPercentage) / 100;
        return annualBonus;
    }
}


let myEmployee = new Employeesss("sai", 700000);

// Access and print various properties of the Employee instance
// console.log(myEmployee.employeeName);

// console.log(myEmployee.Bonus(); 
// console.log(myEmployee.employeeId);
