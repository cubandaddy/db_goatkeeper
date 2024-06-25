import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GoatService } from '../services/goat.service';

@Component({
  selector: 'app-goat-form',
  templateUrl: './goat-form.component.html'
})
export class GoatFormComponent implements OnInit {
  goatForm: FormGroup;

  constructor(private fb: FormBuilder, private goatService: GoatService) {
    this.goatForm = this.fb.group({
      farmName: [''],
      farmCode: [''],
      goatName: [''],
      birthDate: [''],
      sex: [''],
      colors: [''],
      leftEarTattoo: [''],
      rightEarTattoo: [''],
      hornStatus: [''],
      medications: this.fb.array([]),
      procedures: this.fb.array([]),
      otherInformation: this.fb.array([]),
      pictures: this.fb.array([])
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.goatService.addGoat(this.goatForm.value).subscribe(response => {
      // Handle response
    });
  }
}
