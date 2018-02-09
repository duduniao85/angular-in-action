//定义表单模块

// 导入基础模块

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
// 导入路由模块

import { MyFormsRoutingModule } from './myforms-routing.module';
import { MyFormsComponent }    from './myforms.component';

//一般用户输入处理
import { UserInputComponent }    from './userinput/user-input.component';
import { ClickMeComponent } from './userinput/click-me.component';
import { ClickMe2Component } from './userinput/click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './userinput/keyup.components';
import { LittleTourComponent } from './userinput/little-tour.component';
import { LoopbackComponent } from './userinput/loop-back.component';

//模板验动表单设计用例
import { TemplateDrivenFormComponent } from './templatedrivenform/template-driven-form.component';
import {HeroFormComponent} from  './templatedrivenform/hero-form.component';

// 表单验证
import { ValidationDemoComponent } from './validation/validation-demo.component';
import { HeroFormReactiveComponent } from './validation/reactive/hero-form-reactive.component';
import { HeroFormTemplateComponent } from './validation/template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './validation/shared/forbidden-name.directive';
// 响应式表单
import { DemoComponent } from './reactiveform/demo.component';
import { HeroDetailComponent } from './reactiveform/hero-detail.component';
import { HeroDetailComponent1 } from  './reactiveform/hero-detail-1.component';
import { HeroDetailComponent2 } from  './reactiveform/hero-detail-2.component';
import { HeroDetailComponent3 } from  './reactiveform/hero-detail-3.component';
import { HeroDetailComponent4 } from  './reactiveform/hero-detail-4.component';
import { HeroDetailComponent5 } from  './reactiveform/hero-detail-5.component';
import { HeroDetailComponent6 } from  './reactiveform/hero-detail-6.component';
import { HeroDetailComponent7 } from  './reactiveform/hero-detail-7.component';
import { HeroDetailComponent8 } from  './reactiveform/hero-detail-8.component';
import { HeroListComponent } from  './reactiveform/hero-list.component';
// 动态表单
import {  DynamicComponent } from  './dynamicform/dynamic.component';
import {  DynamicFormQuestionComponent } from  './dynamicform/dynamic-form-question.component';
import { DynamicFormComponent }         from './dynamicform/dynamic-form.component';

//需要注入的服务
import { HeroService } from  './reactiveform/hero.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MyFormsRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
      MyFormsComponent,
      //处理一般用户输入
      UserInputComponent,
      ClickMeComponent,
      ClickMe2Component,
      KeyUpComponent_v1,
      KeyUpComponent_v2,
      KeyUpComponent_v3,
      KeyUpComponent_v4,
      LittleTourComponent,
      LoopbackComponent,
      // 数据模型驱动的表单 自已编写的组件 应该放在这一栏里面
      TemplateDrivenFormComponent, 
      HeroFormComponent ,
      // 表单验证
      ValidationDemoComponent,
      HeroFormReactiveComponent,
      HeroFormTemplateComponent,
      ForbiddenValidatorDirective,
      // 响应式表单 reactiveform
      DemoComponent,
      HeroListComponent,
      HeroDetailComponent,
      HeroDetailComponent1,
      HeroDetailComponent2,
      HeroDetailComponent3,
      HeroDetailComponent4,
      HeroDetailComponent5,
      HeroDetailComponent6,
      HeroDetailComponent7,
      HeroDetailComponent8,
      //
      DynamicComponent,
      DynamicFormQuestionComponent,
      DynamicFormComponent
    ],
    providers:[HeroService]
  })
  export class MyFormsModule { }
  