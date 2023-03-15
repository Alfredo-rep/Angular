import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/services/pokedex.service';
@Component({
  selector: 'app-desing-page',
  templateUrl: './desing-page.component.html',
  styleUrls: ['./desing-page.component.css']
})
export class DesingPageComponent implements OnInit {
  listPoke: any = []
  informacionPokmeon: String = ""
  pokeEvo: any = []
  constructor(private callPokedex: PokedexService) {

  }
  ngOnInit(): void {
   
    this.callPokedex.verPokemones().subscribe(request => {
      
      for (let i = 0; i < request.results.length; i++) {
        this.callPokedex.pokeDato(request.results[i].url).subscribe(request2 => {
          request2["id"] = (i + 1)
          this.listPoke.push(request2)
          
        })
      }
      console.log(request.results)    
    }
    );
  }



  Details(pokemon: any) {
    this.pokeEvo = []
    this.callPokedex.pokeDato(pokemon.species.url).subscribe(request3 => {
      this.informacionPokmeon = request3.flavor_text_entries[26].flavor_text


      this.callPokedex.pokeDato(request3.evolution_chain.url).subscribe(request4 => {
        this.pokeEvo[0] = request4.chain.species
        
        this.pokeEvo[0]["id"] = parseInt(this.pokeEvo[0].url.split("pokemon-species/")[1].split("/")[0])
        if (request4.chain.evolves_to.length > 0) {
          this.pokeEvo[1] = request4.chain.evolves_to[0].species
          this.pokeEvo[1]["id"] = parseInt(this.pokeEvo[1].url.split("pokemon-species/")[1].split("/")[0])
          if (request4.chain.evolves_to[0].evolves_to.length) {
            this.pokeEvo[2] = request4.chain.evolves_to[0].evolves_to[0].species
            this.pokeEvo[2]["id"] = parseInt(this.pokeEvo[2].url.split("pokemon-species/")[1].split("/")[0])
          }
        }
        for (let i = 0; i < this.listPoke.length; i++) {
          for (let j = 0; j < this.pokeEvo.length; j++) {
            if ((i + 1) == this.pokeEvo[j].id) {
              this.pokeEvo[j]["evo"] = this.listPoke[i]

            }

          }
        }
        
        console.log(this.pokeEvo)
      })
    })


  }
}
