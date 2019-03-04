export class Student {

    constructor(
        public Id? : number, 
        public FirstName?: string, 
        public LastName? : string, 
        public Email? : string,
        public Courses: string[] = []
    ){}
    }

