import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {
  studentform = new FormGroup({
    firstName: new FormControl('Steve'),
    lastName: new FormControl('Ferns'),
    age: new FormControl(12),
    class: new FormControl('Class-1'),
    rollno: new FormControl(21001)
  });
  students: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getStudents()
  }
  getHeader() {
    return new HttpHeaders({
      'x-api-key': `94dcc7a1-0ad3-49b1-a128-13c58a178b72`,
    });
  }
  getStudents() {
    const url = `http://localhost:3000/students/`;
    const headers = this.getHeader()
    this.http.get(url, { headers: headers }).subscribe((res) => {
      this.students = res;
      // console.log(res);
    });
  }


  submitForm() {
    // console.log(this.studentform.value);
    const headers = this.getHeader()
    this.http.post('http://localhost:3000/students/add', this.studentform.value, {
      headers: headers
    }).subscribe(
      (response) => {
        console.log(response)
        this.getStudents()
      },
      (error) => console.log(error)
    )
  }
}
