import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup' // 带命名的路由信息
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',//惰性加载
    canLoad: [AuthGuard]// CANLOAD守卫，用于判断权限
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',//惰性加载
    data: { preload: true }//指定惰性加载策略
  },
  {
    path: 'forms', loadChildren: 'app/forms/myforms.module#MyFormsModule'
  },//惰性加载,加载表单学习模块
  {
    path: 'httpclient', loadChildren: 'app/httpclient/httpclient.module#HttpClientModule'
  },//惰性加载,加载表单学习模块
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },//默认路由
  { path: '**', component: PageNotFoundComponent }//其它地址时，出错路由
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,//选择性预加载策略，只加载data:{preload:true}的路由

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
