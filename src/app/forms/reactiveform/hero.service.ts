import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Hero, heroes } from './data-model';

//模拟返回英雄列表和更新英雄的方法，用到了rxjs的一些方法，以及数据模型的深度复制

@Injectable()
export class HeroService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(hero: Hero): Observable<Hero>  {
    const oldHero = heroes.find(h => h.id === hero.id);
    // Demo: mutate cached hero 将英雄值赋值给数据模型，
    // 同时返回新的英雄制包装成一个observable对象返回
    const newHero = Object.assign(oldHero, hero); 
    return of(newHero).delay(this.delayMs); // simulate latency with delay 摸拟异步返回
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/