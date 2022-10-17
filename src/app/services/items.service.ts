import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get('http://localhost:5000/api/items')
  }
  fetchOne(id:string){
    return this.http.post('http://localhost:5000/api/item/single-item/?'+id,'')
  }
  insertOne(obj:any){
    return this.http.post('http://localhost:5000/api/items/insert', JSON.stringify(obj))
  }
  updateOne(obj:any){
    return this.http.post('http://localhost:5000/api/items/update', JSON.stringify(obj),{headers: new HttpHeaders({'Content-Type': 'application/json','Request-Method': 'UPDATE'})})
  }
  delete(id:String){
    return this.http.delete('http://localhost:5000/api/items/delete',{body:id})
  }
  uploadFile(obj:any){
    return this.http.post('http://localhost:5000/api/items/file',obj)
  }


}
