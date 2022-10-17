import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../interfaces/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() name:string | undefined
  @Input() surname:string | undefined
  @Input() _id:string | undefined
  @Input() img:string | undefined

  @Output() trigger = new EventEmitter<string>()
 
  public editMode:boolean = false

  private item?:Item;
  public onDelete?:boolean=false;

  constructor(private service:ItemsService) { }

  ngOnInit(): void {
    
    // this.img = 'http://localhost:5000/api/images/'+this.img
    // console.log(this.img)
    if(this._id && this.name && this.surname && this.img)
      this.item = new Item(this._id,this.name,this.surname,this.img)
  }  
  submit(){
    if(this._id && this.name && this.surname && this.img){
      this.item = new Item(this._id,this.name,this.surname,this.img)
      console.log(JSON.stringify(this.item))
      this.editMode=!this.editMode
    }
  }
  
  getDetails(){
    this._id!=undefined ? this.service.fetchOne(this._id).subscribe((res)=>{
      console.log('got details', res)
    }) : console.log('error: no ID found')
   
  }

  edit(){
    this.editMode=!this.editMode
  }

  cancel(){
    this._id = this.item?.id
    this.name = this.item?.name
    this.surname = this.item?.surname
    this.editMode=!this.editMode
  }
  update(){
    if(this._id && this.name && this.surname && this.img)
      this.service.updateOne(new Item(this._id,this.name,this.surname,this.img)).subscribe(()=>{
        this.editMode=!this.editMode
        setTimeout(()=>{
          this.triggerInit()
        },500)
    })
  }

  delete(){
    console.log("deleted "+this._id)
    this.service.delete(this._id?this._id:"").subscribe(()=>{
      this.triggerInit()
      this.onDelete=!this.onDelete
    })
  }

  triggerInit() {
    this.trigger.emit();
  }
}
