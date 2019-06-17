export class Employee {
    firstName: string = null;
    lastName: string = null;
    dateOfBirth: string = null;
    gender: string = null;
    department: string = null;

    constructor(firstName,lastName,dateOfBirth,gender,department) 
    {
        this.dateOfBirth=dateOfBirth;
        this.department=department;
        this.firstName=firstName;
        this.gender=gender;
        this.lastName=lastName;
    }
}