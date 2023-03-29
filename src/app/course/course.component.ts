import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course = new Course;
}


export class Course{
  constructor(public Name:string = '', public Teacher:string = ''){
  }

}