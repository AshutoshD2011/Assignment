import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrl: './new-person.component.scss'
})
export class NewPersonComponent {

  constructor(private api:ApiService,private router:Router){}

  newPerson = new FormGroup({
    'person_name':new FormControl(''),
    'person_email':new FormControl(''),
    'person_dob':new FormControl(''),
    'person_country':new FormControl(''),
  });

  person_avtar:any;

  setImage(evt:any){
    var file= evt.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      this.person_avtar = event.target?.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  saveData(){
    var form= new FormData();
    var obj:any = {
      'p_name':this.newPerson.value.person_name,
      'p_email':this.newPerson.value.person_email,
      'p_dob':this.newPerson.value.person_dob,
      'p_country':this.newPerson.value.person_country,
      'p_avtar':this.person_avtar
    };
    // console.log(obj);
    this.api.postData(obj).subscribe((res:any)=>{
      this.router.navigate(['/person-list'])
      
    })

  }

}
