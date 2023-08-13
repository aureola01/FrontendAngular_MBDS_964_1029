import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region.model';
import { RegionsService } from '../../shared/regions.service';

@Component({
  selector: 'app-regions-edit',
  templateUrl: './regions-edit.component.html',
  styleUrls: ['./regions-edit.component.css']
})
export class RegionsEditComponent implements OnInit {

  region: Region | undefined;
  regionId!: number; 
  nomRegion!: string;

  constructor( private regionsService: RegionsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.regionId = this.route.snapshot.params['id'];
    this.nomRegion = this.route.snapshot.queryParams['nom'];
  }

  onSaveRegion() {
    this.region = {id: this.regionId, nom: this.nomRegion}
    if (!this.region) return;
  
    // on récupère les valeurs dans le formulaire
    this.regionsService
      .updateRegion(this.region)
      .subscribe(data => {
        console.log("data = " + data)
        console.log("Données modifiees");
  
        // navigation vers la home page
        this.router.navigate(['']);
      });
  }

  
}
