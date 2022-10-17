import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileForm = new FormGroup({
    n: new FormControl('', Validators.required),
    s: new FormControl('', Validators.required),
  }); 

  constructor(private service: ItemsService) { }
  items:any = []
  modal:boolean=false
  edit:boolean=false
  file:any
  imgLoaded:boolean=false
  newImagePath:string=""

  ngOnInit(): void {
    this.service.fetchData().subscribe((data)=>{
      this.items = data
    })

  }

  getFile(event:any){
    this.file = event.target.files[0] 
    this.imgLoaded=true
  }

  uploadAndSubmit(){
    let formData = new FormData()
    formData.set('file',this.file)
    this.service.uploadFile(formData).subscribe((res:any)=>{
      console.log("file uploaded")
      this.newImagePath = res.__filename
      this.service.insertOne({name:this.profileForm.value.n,surname:this.profileForm.value.s,img:this.newImagePath}).subscribe((e)=>{
        console.log({name:this.profileForm.value.n,surname:this.profileForm.value.s,img:this.newImagePath})
        this.modal=!this.modal
        setTimeout(()=>{
          this.ngOnInit()
          this.profileForm.reset()
        },100)
      })
    }) 
   
  }
  onSubmit(){
    // this.service.insertOne({name:this.profileForm.value.n,surname:this.profileForm.value.s}).subscribe((e)=>{
    //   this.modal=!this.modal
    //   setTimeout(()=>{
    //     this.ngOnInit()
    //     this.profileForm.reset()
    //   },100)
    // })
  }
  upload(){
    // let formData = new FormData()
    // formData.set('file',this.file)
    // this.service.uploadFile(formData).subscribe((res:any)=>{
    //   console.log("file uploaded")
    //   this.newImagePath = res.__filename
    // }) 
  }
  
  onEnter(){
    this.onSubmit()
  }

  triggerInit() {
    this.ngOnInit()
  }

  c(i:any){
    console.log(i)
  }
}
