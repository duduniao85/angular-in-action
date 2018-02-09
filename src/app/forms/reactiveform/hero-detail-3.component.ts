/* tslint:disable:component-class-suffix */
import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail-3',
  templateUrl: './hero-detail-3.component.html'
})
export class HeroDetailComponent3 {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    // group 方法，用于生产formgroup，里面包含键值对，以及验证器函数
    this.heroForm = this.fb.group({ 
      name: ['', Validators.required ],
    });
  }
}
