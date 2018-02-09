import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>表单样例</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">用户输入样例</a>
      <a routerLink="./ddf" routerLinkActive="active">模板驱动表单样例</a>
      <a routerLink="./validation" routerLinkActive="active">表单验证</a>
      <a routerLink="./reactiveform" routerLinkActive="active">响应式表单</a>
      <a routerLink="./dynamicform" routerLinkActive="active">动态表单</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class MyFormsComponent {
}
