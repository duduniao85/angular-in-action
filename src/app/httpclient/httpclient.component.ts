import { Component }          from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="./heroes1" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./httpclient.component.css']
})
export class HttpClientComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/