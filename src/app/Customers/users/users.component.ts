import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any;
  currentUser: Users = {
    Id: 0,
    Name: '',
    Email: '',
    Age: 0,
    DateOfBirth: '',
  };
  constructor(private http: HttpClient) {
    this.sendGetRequest();
  }
  editMe = (id: number) => {
    console.log(id);
    const t = [];

    let u = this.users.find((x: Users) => x.Id === id);

    this.currentUser.Id = u.Id;
    this.currentUser.Name = u.Name;
    this.currentUser.Email = u.Email;
    this.currentUser.Age = u.Age;
    this.currentUser.DateOfBirth = u.DateOfBirth;
  };
  EditSave =()=>{
    let id = this.currentUser.Id
    let u = this.users.find((x: Users) => x.Id === id);

    u.Name = this.currentUser.Name;
    u.Email = this.currentUser.Email;
    u.Age = this.currentUser.Age;
    u.DateOfBirth = this.currentUser.DateOfBirth;
    u.id = this.currentUser.Id;

  }
  sendGetRequest() {
    this.http.get('/assets/Users.json').subscribe((res) => {
      // this.users =res;

      // console.log(this.users);
      // console.log(JSON.parse(res));
      this.users = res;
    });
  }

  // ngOnInit(): void {
  //   this.getUsersData();
  // }

  // getUsersData() {
  //   fetch('./Users.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.users = data;
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching users data:', error);
  //     });
  // }

  // constructor(http: Http) {
  //   http.get('people.json')
  //     // Call map on the response observable to get the parsed people object
  //     .map(res => res.json())
  //     // Subscribe to the observable to get the parsed people object and attach it to the
  //     // component
  //     .subscribe(people => this.people = people);
  // }
  // constructor() {
  //   // You can add Users objects to the users array here
  //   this.users.push({
  //     Id: 1,
  //     Name: 'John',
  //     Email: 'john@example.com',
  //     Age: 25,
  //     DateOfBirth: '1998-01-01',
  //   });
  //   this.users.push({
  //     Id: 2,
  //     Name: 'Jane',
  //     Email: 'jane@example.com',
  //     Age: 30,
  //     DateOfBirth: '1993-01-01',
  //   });
  // }
}

function getUsers() {}

export interface Users {
  Id: number;
  Name: string;
  Email: string;
  Age: number;
  DateOfBirth: string;
}
