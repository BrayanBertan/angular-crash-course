import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pt2';

  form = new FormGroup({
    firstName:  new FormControl(''),
    lastName:  new FormControl(''),
  });
  testProp = new FormControl('');
// profileTwo =  this.fb.group({

// });
  constructor(
    private router:Router,
    private formBuiilder:FormBuilder
    ){
    this.router.events.subscribe(event => console.log(event));
  }

  goToRoute = (route:string = '/fourth'):void =>{
    this.router.navigateByUrl(route).then(() => console.log(this.router.url));
  }
}
