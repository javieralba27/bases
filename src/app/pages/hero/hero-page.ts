
import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({

  templateUrl: './hero-page.html',
  imports: [ UpperCasePipe ]
})

export class HeroPage  {


  name = signal('Iroman');

  age = signal(45);

  //getHeroDescription() {
    //return `${this.name()} - ${this.age()}`
  //}

  heroDescription = computed(() => {
    const description = `${ this.name() } - ${ this.age()}`;

    return description;
  })

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Iroman');
    this.age.set(45);
  }

}
