import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionsService } from '../../shared/regions.service';
import { Region } from '../region.model';

@Component({
  selector: 'app-regions-add',
  templateUrl: './regions-add.component.html',
  styleUrls: ['./regions-add.component.css']
})
export class RegionsAddComponent {

  nom = "";

  constructor( private regionsService: RegionsService,
    private route: ActivatedRoute,
    private router: Router) { }


    onSubmit(event: any) {
      // On vérifie que les champs ne sont pas vides
      if (this.nom === "") return;
  
      let nouvelleRegion = new Region();
      // génération d'id, plus tard ce sera fait dans la BD
      nouvelleRegion.nom = this.nom;
  
      // on demande au service d'ajouter l'assignment
      this.regionsService.addRegion(nouvelleRegion)
        .subscribe(message => {
          console.log(message);
  
          // On va naviguer vers la page d'accueil pour afficher la liste
          // des assignments
          this.router.navigate(['']);
  
        });
    }
}
