import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  person_id: any;
  person_data: any;
  update_person_form: any;
  avatar: any;

  constructor(private api: ApiService, private activatedrout: ActivatedRoute, private router:Router) {
    this.activatedrout.params.subscribe((res: any) => {
      this.person_id = res.id;

      this.api.getDataById(res.id).subscribe((res2: any) => {
        this.person_data = res2

        this.update_person_form = new FormGroup({
          'p_name': new FormControl(this.person_data.p_name),
          'p_email': new FormControl(this.person_data.p_email),
          'p_dob': new FormControl(this.person_data.p_dob),
          'p_country': new FormControl(this.person_data.p_country),
          'p_avtar': new FormControl('')
        });
        this.avatar = this.person_data.p_avtar;
      });
    })


  }
  onAvatarSelected(evt: any) {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const target = e.target as FileReader;
      if (target) {
        this.avatar = target.result;
      }
    };
    reader.readAsDataURL(file);
  }

  update() { 
    this.update_person_form.value.p_avtar = this.avatar
    console.log(this.update_person_form.value);

    this.api.updatePrsonData(this.person_id,this.update_person_form.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/person-list']);
    })
  }


  }
