import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ObjectOrientedRenderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService],
})
export class HomeComponent implements OnInit {

  @Input() poke: object;

  public pokemons = [];

  constructor(private pokemonService: PokemonService) { 
    
  }
  estePokemon(){
    this.pokemonService.pokemonSeleccionado(this.poke);
  }


  ngOnInit() {
    this.getPoke();
  }

  getPoke(): void {
    this.pokemons = this.pokemonService.getpoke();
  }
}

