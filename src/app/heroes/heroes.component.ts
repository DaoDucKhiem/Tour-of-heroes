import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../moc-heroes'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
