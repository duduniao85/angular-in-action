import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">
    <img height="500" alt="Angular Logo" src="/assets/logo.png">    
    angular实战
    </h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">危机中心</a>
      <a routerLink="/superheroes" routerLinkActive="active">英雄</a>
      <a routerLink="/admin" routerLinkActive="active">管理</a>
      <a routerLink="/login" routerLinkActive="active">登录</a>
      <a routerLink="/forms" routerLinkActive="active">表单学习</a>
      <a routerLink="/httpclient" routerLinkActive="active">http请求后端演示</a>
      <!--用于访问二级路由，不影响主路由，处理弹出框等场景-->
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">联系（多层路由样例）</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
    <menu-overview-example></menu-overview-example>
  `
})
export class AppComponent {
}
