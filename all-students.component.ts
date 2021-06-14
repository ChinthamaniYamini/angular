import { StudentsService } from './../students.service';
import { StudentDetails } from './../student-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {


 __studentService:StudentsService;
 concerncount:number = 0; 

 

 constructor(ps:StudentsService) { 
   this.__studentService = ps;
 }

 ngOnInit(): void {
  }

  getAllStudents():StudentDetails[]
  {
    return this.__studentService.getAllStudents();
  }

  addconcern()
  {
    this.concerncount++;
    console.log(this.concerncount);
  }
}//end Component class