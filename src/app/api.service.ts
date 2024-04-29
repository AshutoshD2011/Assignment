import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postData(data:any){
    return this.http.post('http://localhost:3000/person',data)
  }

  getData(){
    return this.http.get('http://localhost:3000/person');
  }

  getDataById(id:any){
    return this.http.get('http://localhost:3000/person/'+id);
  }

  removePerson(id:any){
    return this.http.delete('http://localhost:3000/person/'+id);
  }

  updatePrsonData(id:any,data:any){
    return this.http.put('http://localhost:3000/person/'+id,data);
  }

}
