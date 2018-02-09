import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent1 implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  errorMessage: string = ''//报错字符串，可以用来展示异步操作异常的时候的出错信息
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  //获取完整成员
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      p => this.heroes = p, //成功情况
      e => this.errorMessage = e //异常情况,可能在视图相应界面上进行展示
    );
  }
  //添加成功
  add(id: string, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(Number.parseInt(id), name)
      .subscribe(// create 方法返回一个observable<Hero>对象,能过subscribe方法可以获取一个英雄对象
      hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      }
      //此处略去异常信息显示
      );
  }
  //删除列表成员
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .subscribe(
      r => {
        console.log(`deleted!!! ${JSON.stringify(hero)}`);
        //数据已经删除,但表单数据对象也需要及时的删除,以更新当前数据
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      }
      )

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    // 特别注意../ 和 ./ 的用法， 使用relativeTo:this.route 可以使用相对路径
    this.router.navigate(['../detail', this.selectedHero.id], { relativeTo: this.route });
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/