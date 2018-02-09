export class Hero {
      
      constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string // optional 声明和初始化放一起
      ) {  }
    
    }
    /*  可以采用如下方式同时完成初始化
    let myHero =  new Hero(42, 'SkyDog',
    'Fetch any object at any distance',
    'Leslie Rollover');
console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog" */
    
    /*
    Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */