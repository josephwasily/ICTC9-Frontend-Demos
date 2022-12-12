import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];
  // heroService: HeroService;
  constructor(private hero: HeroService) {
    // this.heroService = hero;

   }

  ngOnInit(): void {
    this.heroes = this.hero.getHeroes();
  }
  

  printHero(){
    console.log(this.selectedHero);
    
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;

    
  }
}
