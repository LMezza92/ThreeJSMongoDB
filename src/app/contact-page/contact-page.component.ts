import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

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
    check: new FormControl(false, Validators.requiredTrue)
  }); 
  
  public emailSent:boolean=false
  public outcome:string=""
  public response?:number

  constructor(private emailService:EmailService, private router:Router) { }

  ngOnInit(): void {
    this.avoidPaste()
  }

  onSubmit(){
    this.emailService.sendMessage(this.profileForm.value).subscribe((res)=>{
        this.outcome = res.outcome
        this.response=res.res 
        this.emailSent= true
    })
  }

  ok(){
    if(this.response==0){
      this.profileForm.reset()  
      this.router.navigateByUrl('/')
    } else{
      this.emailSent= false
    }
  }

  avoidPaste(){
    const input = document.getElementById('email');
    input?.addEventListener("paste", (e)=>{
      e.preventDefault();
      alert("cannot paste")
    })
  }
}
