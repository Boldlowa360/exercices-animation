import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { shakeX, pulse} from 'ng-animate';

const DEATH_DURATION_SECONDS = 1.5;
const ATTACK_DURATION_SECONDS = 0.3;
const HIT_WOBBLE_DURATION_SECONDS =1;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('death', [transition(':increment', useAnimation(shakeX, {params: {timing: DEATH_DURATION_SECONDS}}))]),
    trigger('attack', [transition(':increment', useAnimation(pulse,{params:{timing:ATTACK_DURATION_SECONDS, scale:4.5}}))])
]
})
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0;
  ng_attack =0;
  css_hit =false;
  constructor() {
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards
    this.showSlime();
  } 

  death(){
    this.slimeIsPresent = false;
    // TODO Animation angular avec forwards
    this.hideSlime();
    // TODO 2e animation angular en même temps
    this.ng_death++;
  }
  hideSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }
  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
    this.ng_attack++;
  }

  hit(){
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
    this.css_hit = true;
    setTimeout(() => this.css_hit = false, HIT_WOBBLE_DURATION_SECONDS* 1000);
  }
}
