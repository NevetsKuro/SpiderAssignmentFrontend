import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-portal',
  templateUrl: './teacher-portal.component.html',
  styleUrls: ['./teacher-portal.component.css']
})
export class TeacherPortalComponent implements OnInit {
  teacherform = new FormGroup({
    firstName: new FormControl('Maria'),
    lastName: new FormControl('Fernandes'),
    age: new FormControl(40),
    classAssigned: new FormControl('Class-1'),
    subjects: new FormControl('English'),
    experience: new FormControl(12),
    qualification: new FormControl('MBA')
  });
  teachers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTeachers()
  }

  getTeachers() {
    const url = `http://localhost:3000/teachers/`;
    this.http.get(url).subscribe((res) => {
      this.teachers = res;
      // console.log(res);
    });
  }

  submitForm() {
    // console.log(this.teacherform.value);
    this.http.post('http://localhost:3000/teachers/add', this.teacherform.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTeachers();
        },
        (error) => console.log(error)
      )
  }
}
