// Define the Teacher interface
interface Teacher {
    readonly firstName: string; 
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    const firstInitial = firstName.charAt(0).toUpperCase(); 
    return `${firstInitial}. ${lastName}`;
};

// Define an interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Define an interface for the StudentClass
interface Student {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the class
class StudentClass implements Student {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}