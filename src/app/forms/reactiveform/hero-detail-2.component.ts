/* tslint:disable:component-class-suffix */
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-detail-2',
  templateUrl: './hero-detail-2.component.html'
})
export class HeroDetailComponent2 {
  // FormGroup 与  模板当中的 [formGroup] 相对应
  heroForm = new FormGroup({
    firstname: new FormControl(), lastname: new FormControl()
  });
}
