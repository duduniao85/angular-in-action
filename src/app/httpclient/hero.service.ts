import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api

  constructor(private http: Http) { }

  //获取所有英雄 
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(mapHeros)//将response转换成完整的HERO数组
      .catch(handleError2)
  }

  // 获取单个英雄
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .map(mapHero)//将response转换成Hero
      .catch(handleError2)
  }
  // 删除与PUT方法类似,只需要返回response对象
  delete(id: number): Observable<Response> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .catch(handleError2);
  }
  // 创建对象,获取创建后的成员,用于后绪展示
  create(id: number, name: string): Observable<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ id: id, name: name }), { headers: this.headers })
      .map(mapHero)
      .catch(handleError2);
  }
  // 使用observable完成更新方法,暂不用获取返回值,只需要知道成功或者失败
  update(hero: Hero): Observable<Response> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .catch(handleError2);
  }
  //以下为使用promise时的异常
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

// 公共函数，以免出错
function handleError2(error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  // throw an application level error
  return Observable.throw(errorMsg);
}
// 将数组的json对象转换成Hero对象
function mapHeros(res: Response): Hero[] {
  return res.json().map(toHero);
}

// 将单作对象的报文json转换成Hero对象
function mapHero(res: Response): Hero {
  return toHero(res.json());
}
// 将单个英雄的json串转换成英雄对象
function toHero(r: any): Hero {
  let hero = <Hero>({
    id: r.id,
    name: r.name
  });
  console.log('Parsed hero:', hero);
  return hero;
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/