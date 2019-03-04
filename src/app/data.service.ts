import { Injectable } from '@angular/core';
import { Student } from './student';
import { Course } from './course';
import {Storage} from "@ionic/storage";
import { store } from '@angular/core/src/render3';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

//imports for observables
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  studentsCollection : AngularFirestoreCollection<Student>;
  students : Observable<Student[]>;  //when an items is added, it notifies everyone else
  coursesCollection : AngularFirestoreCollection<Course>;
  courses : Observable<Course[]>;


  constructor(private storage : Storage, private db : AngularFirestore) { 

  //read data from firebase (fb)
this.studentsCollection = db.collection<Student>('students');
this.students = this.studentsCollection.snapshotChanges().pipe(
  map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  })
);
//courses
this.coursesCollection = db.collection<Course>('courses');
this.courses = this.coursesCollection.snapshotChanges().pipe(
  map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  })
);
  }
  //students
saveStudent(student: Student) {

  var item = Object.assign({}, student); // convert the student to a simpler object
  this.studentsCollection.add(item); // save the item (student) to database
}
getStudents() {
  return this.students;
}
//courses
saveCourse(course: Course) {

  var item = Object.assign({}, course); // convert the student to a simpler object
  this.coursesCollection.add(item); // save the item (student) to database
}
getCourses() {
  return this.courses;
}

updateStudent(student : Student){
  this.studentsCollection.doc(student.id).update(student); 
}
}

