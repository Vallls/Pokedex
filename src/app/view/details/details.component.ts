import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [PokemonService],
})
export class DetailsComponent implements OnInit {
  public pokemons = [];
  constructor(private pokemonService: PokemonService, private router: Router) {
   
   }

   ngOnInit() {
    this.getPoke();
    this.router
  }

  getPoke(): void {
    this.pokemons = this.pokemonService.getpoke();
  }

}