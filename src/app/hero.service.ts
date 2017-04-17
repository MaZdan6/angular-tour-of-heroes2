import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  // zwraca liste do wyswietlenia
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
