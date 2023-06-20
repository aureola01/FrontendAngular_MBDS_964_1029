import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
 selector: 'app-edit-assignment',
 templateUrl: './edit-assignment.component.html',
 styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  // associées aux champs du formulaire
  titleAssignment!: string;
  dateDeRendu!: Date;
  auteur!: string;
  note!: Number;
  remarque!: string;
  nameSubject!: string;
  photo!: string;
  teacher_photo!: string;
  subject: any;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }
  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];

    // Exemple de récupération des query params (après le ? dans l'url)
    const queryParams = this.route.snapshot.queryParams;
    console.log(queryParams);
    console.log("title :"  + queryParams['title'])
    // console.log("matière :" + queryParams['matiere'])
  
    // Exemple de récupération du fragment (après le # dans l'url)
    const fragment = this.route.snapshot.fragment;
    console.log("Fragment = " + fragment);

    this.assignmentsService.getAssignment(id)
    .subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
      // Pour pré-remplir le formulaire
      this.titleAssignment = assignment.title;
      this.dateDeRendu = assignment.deadline;
      this.auteur = assignment.author;
      //subject
      this.subject = assignment.subject.valueOf();
      this.nameSubject = this.subject.name;
      this.photo = this.subject.photo;
      this.teacher_photo = this.subject.teacher_photo;

      this.note = assignment.rating;
      this.remarque = assignment.remarks;
    
    });
  }
  onSaveAssignment() {
    if (!this.assignment) return;

    // on récupère les valeurs dans le formulaire
    this.assignment.title = this.titleAssignment;
    this.assignment.deadline = this.dateDeRendu;
    this.assignment.author = this.auteur;
    this.assignment.rating = this.note;
    this.assignment.remarks = this.remarque;
    this.assignment.subject = { photo: this.photo, name:this.nameSubject, teacher_photo: this.teacher_photo } 
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);

        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }
}
