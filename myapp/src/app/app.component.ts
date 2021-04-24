import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{

  title = 'myapp';
  user = {
    name:'a',
    age:'23',
    id:0
  }
  tests:any = [];
  posts:any = this.service.getRequest('https://jsonplaceholder.typicode.com/posts');
  constructor(
      private service:HttpService
  ){

  }
   teste = (a:any)=>{

  }

  ngOnInit(){
    //this.getPosts();
    this.getPosts1();
  }

  httpClick = () =>{
    this.service.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(response => {
      console.log(response);
    })
  }

  handleEvent = (event:any) =>{
    console.log(event);
  }

  getPosts(){
    this.service.getRequest('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
    })
  }

  async getPosts1(){
   console.log( await this.service.getRequest('https://jsonplaceholder.typicode.com/posts').toPromise());
  }
}
