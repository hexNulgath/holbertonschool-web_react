namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class Subject {
        protected teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}