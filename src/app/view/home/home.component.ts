import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService],
})
export class HomeComponent implements OnInit {

  public pokemons = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPoke();
  }

  getPoke(): void {
    this.pokemons = this.pokemonService.getpoke();
  }
}

