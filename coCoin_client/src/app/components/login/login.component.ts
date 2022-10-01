import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@Angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({});
  allDataInserted = false;
  buttonClicked = false;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.form.valid){
      this.buttonClicked = true;
      this.allDataInserted = false;
    } 
    if(this.buttonClicked && this.form.valid){
      this.allDataInserted = true;
    }
  }
  
}