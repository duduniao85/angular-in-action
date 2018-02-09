/* tslint:disable:component-class-suffix */
import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from './data-model';

@Component({
  selector: 'app-hero-detail-4',
  templateUrl: './hero-detail-4.component.html'
})
export class HeroDetailComponent4 {
  heroForm: FormGroup; // 与formGroup对应 [formGroup]
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    // heroform对象与模板的form对象完全对应，包含模板层面的字段
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}
