import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironam','Hulk','Thor','Capitán America']
    heroeBorrado: string = '';
      borrarHeroe(){
        this.heroeBorrado = this.heroes.shift() || '';
        
      }

}
