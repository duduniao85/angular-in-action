import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule }   from '@angular/common';

import { HttpClientRoutingModule } from './httpclient-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HttpClientComponent }         from './httpclient.component';
import { HeroesComponent1 }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    //InMemoryWebApiModule.forFeature(InMemoryDataService),// 仿真API服务
    HttpClientRoutingModule
  ],
  declarations: [
    HttpClientComponent,
    HeroDetailComponent,
    HeroesComponent1
  ],
  providers: [ HeroService ]
})
export class HttpClientModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/