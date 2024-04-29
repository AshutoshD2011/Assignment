import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit{

  constructor(private api:ApiService){}

  @Input() sendDataToCard:any

  personList:any;
  jsonData: any[] = [];
  searchText: string = '';

  ngOnInit(){
    this.api.getData().subscribe((res:any)=>
    {
      this.personList=res;
      console.log(res);
    });

    this.api.getData().subscribe((res:any)=>{
      this.jsonData = res;
      console.log(this.jsonData);
    })

  }

  deletePerson(id:any){
    this.api.removePerson(id).subscribe((res:any)=>{
      confirm("Are You Sure..?")
      this.ngOnInit();
    })
  }

}
