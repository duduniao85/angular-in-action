// 定义表单模块的路由
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserInputComponent } from './userinput/user-input.component';
import { TemplateDrivenFormComponent } from './templatedrivenform/template-driven-form.component';
import { ValidationDemoComponent } from './validation/validation-demo.component';
import { DemoComponent } from './reactiveform/demo.component';
import { MyFormsComponent } from './myforms.component';
//动态表单，数据驱动的表单
import { DynamicComponent } from './dynamicform/dynamic.component';


const myformsRoutes: Routes = [
    {
        path: '', component: MyFormsComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', component: UserInputComponent },
                    { path: 'ddf', component: TemplateDrivenFormComponent },
                    { path: 'validation', component: ValidationDemoComponent },
                    { path: 'reactiveform', component: DemoComponent },
                    { path: 'dynamicform', component: DynamicComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(myformsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MyFormsRoutingModule { }
