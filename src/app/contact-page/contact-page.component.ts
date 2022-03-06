import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    company: new FormControl(''),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    check: new FormControl(false, Validators.required)

  }); 

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log("submit: " + this.profileForm.value.firstName)
  }

}
