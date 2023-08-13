import { Component, OnInit } from '@angular/core';
import { Region } from './region.model';
import { RegionsService } from '../shared/regions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'modifier', 'supprimer'];
  regions: Region[] = [];
  
  constructor(private regionsService: RegionsService,private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    console.log("On va chercher les regions dans le service");

    this.regionsService.getRegions()
      .subscribe(data => {
        console.log("data = " + data)
        this.regions = data;
        console.log("Données reçues");
      });
  }

  onAdd(){
    this.router.navigate(["/regions/add"]);
  }

  onEditRegion(id: number, nom: string) {
    // navigation vers la page edit
    // équivalent à "/assignment/2/edit" par exemple
    // path = "/assignment/" + this.assignmentTransmis?.id + "/edit";
    // this.router.navigate([path]);
    // c'est pour vous montrer la syntaxe avec [...]
    this.router.navigate(["/regions", id, "edit"], 
    {
      queryParams: {
        nom: nom
      }
    });
  }

  onDeleteRegion(id: number) {

    // on demande au service la suppression de l'assignment
    this.regionsService.deleteRegion(id)
      .subscribe(message => {
        console.log(message);

        // et on navigue vers la page d'accueil
      });
    
    this.router.navigate(['']);

  }
}
