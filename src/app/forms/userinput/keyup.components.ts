/* tslint:disable:class-name component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
//最简单的绑定组件处理方法，传递$event
export class KeyUpComponent_v1 {
  values = '';

  /*
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">  
    <p>{{values}}</p>
  `
}) // 通过box.value直接获取input的值

export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})//加上按键类型来判断
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})// ‘blur' means click whitespace area
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/