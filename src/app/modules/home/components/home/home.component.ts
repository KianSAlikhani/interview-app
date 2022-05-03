import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.dataService.notes.subscribe({
      next: (notes: Note[]) => {
        this.notes = notes;
      },
    });
  }
}
