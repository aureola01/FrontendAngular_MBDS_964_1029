import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {

  // champs du formulaire
  nomDevoir = "";
  dateDeRendu!: Date;
  auteur!: string;
  note!: number;
  remarque!: string;
  nameSubject!: string;
  photo!: string;
  teacher_photo!: string;

  constructor(private assignmentsService: AssignmentsService,
              private router:Router) { }

  onSubmit(event: any) {
    // On vérifie que les champs ne sont pas vides
    if (this.nomDevoir === "") return;
    if (this.dateDeRendu === undefined) return;

    let nouvelAssignment = new Assignment();
    // génération d'id, plus tard ce sera fait dans la BD
    nouvelAssignment.id = Math.abs(Math.random() * 1000000000000000);
    nouvelAssignment.title = this.nomDevoir;
    nouvelAssignment.deadline = this.dateDeRendu;
    nouvelAssignment.rendered = false;
    nouvelAssignment.author = this.auteur;
    nouvelAssignment.rating = this.note;
    nouvelAssignment.remarks = this.remarque;
    nouvelAssignment.subject = { name: this.nameSubject, photo: this.photo, teacher_photo: this.teacher_photo }

    // on demande au service d'ajouter l'assignment
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe(message => {
        console.log(message);

        // On va naviguer vers la page d'accueil pour afficher la liste
        // des assignments
        this.router.navigate(["/home"]);

      });
  }
}
