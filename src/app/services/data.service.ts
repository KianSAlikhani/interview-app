import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../models/note.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _notes: Note[] = [
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit vel orci eu interdum. Aliquam magna purus, vehicula sed elit sed, finibus convallis ante. Donec luctus ante odio, commodo sodales massa placerat sed. Aenean malesuada est vel elit pharetra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales vel ligula vitae tincidunt. Sed iaculis rutrum risus, at consequat enim sodales at. Nam egestas, sapien at rhoncus consectetur, tortor tortor facilisis mi, nec finibus odio felis vel lacus. Nunc suscipit dolor in rutrum sagittis. Fusce dolor lacus, maximus eget porta ac, viverra non ante. Aliquam et finibus ante. Praesent faucibus, tellus et sollicitudin pulvinar, nisl metus vehicula metus, non vestibulum sapien nibh in odio. Quisque quam nisl, egestas quis sodales vitae, aliquet at massa. Nam erat libero, luctus at rutrum non, fermentum vitae nunc. Proin interdum magna tortor, id luctus nisl dictum non.',
      date: new Date(),
      userId: 'U123456',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit vel orci eu interdum. Aliquam magna purus, vehicula sed elit sed, finibus convallis ante. Donec luctus ante odio, commodo sodales massa placerat sed. Aenean malesuada est vel elit pharetra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales vel ligula vitae tincidunt. Sed iaculis rutrum risus, at consequat enim sodales at. Nam egestas, sapien at rhoncus consectetur, tortor tortor facilisis mi, nec finibus odio felis vel lacus. Nunc suscipit dolor in rutrum sagittis. Fusce dolor lacus, maximus eget porta ac, viverra non ante. Aliquam et finibus ante. Praesent faucibus, tellus et sollicitudin pulvinar, nisl metus vehicula metus, non vestibulum sapien nibh in odio. Quisque quam nisl, egestas quis sodales vitae, aliquet at massa. Nam erat libero, luctus at rutrum non, fermentum vitae nunc. Proin interdum magna tortor, id luctus nisl dictum non.',
      date: new Date(),
      userId: 'U123456',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit vel orci eu interdum. Aliquam magna purus, vehicula sed elit sed, finibus convallis ante. Donec luctus ante odio, commodo sodales massa placerat sed. Aenean malesuada est vel elit pharetra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales vel ligula vitae tincidunt. Sed iaculis rutrum risus, at consequat enim sodales at. Nam egestas, sapien at rhoncus consectetur, tortor tortor facilisis mi, nec finibus odio felis vel lacus. Nunc suscipit dolor in rutrum sagittis. Fusce dolor lacus, maximus eget porta ac, viverra non ante. Aliquam et finibus ante. Praesent faucibus, tellus et sollicitudin pulvinar, nisl metus vehicula metus, non vestibulum sapien nibh in odio. Quisque quam nisl, egestas quis sodales vitae, aliquet at massa. Nam erat libero, luctus at rutrum non, fermentum vitae nunc. Proin interdum magna tortor, id luctus nisl dictum non.',
      date: new Date(),
      userId: 'U123456',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit vel orci eu interdum. Aliquam magna purus, vehicula sed elit sed, finibus convallis ante. Donec luctus ante odio, commodo sodales massa placerat sed. Aenean malesuada est vel elit pharetra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales vel ligula vitae tincidunt. Sed iaculis rutrum risus, at consequat enim sodales at. Nam egestas, sapien at rhoncus consectetur, tortor tortor facilisis mi, nec finibus odio felis vel lacus. Nunc suscipit dolor in rutrum sagittis. Fusce dolor lacus, maximus eget porta ac, viverra non ante. Aliquam et finibus ante. Praesent faucibus, tellus et sollicitudin pulvinar, nisl metus vehicula metus, non vestibulum sapien nibh in odio. Quisque quam nisl, egestas quis sodales vitae, aliquet at massa. Nam erat libero, luctus at rutrum non, fermentum vitae nunc. Proin interdum magna tortor, id luctus nisl dictum non.',
      date: new Date(),
      userId: 'U123456',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit vel orci eu interdum. Aliquam magna purus, vehicula sed elit sed, finibus convallis ante. Donec luctus ante odio, commodo sodales massa placerat sed. Aenean malesuada est vel elit pharetra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales vel ligula vitae tincidunt. Sed iaculis rutrum risus, at consequat enim sodales at. Nam egestas, sapien at rhoncus consectetur, tortor tortor facilisis mi, nec finibus odio felis vel lacus. Nunc suscipit dolor in rutrum sagittis. Fusce dolor lacus, maximus eget porta ac, viverra non ante. Aliquam et finibus ante. Praesent faucibus, tellus et sollicitudin pulvinar, nisl metus vehicula metus, non vestibulum sapien nibh in odio. Quisque quam nisl, egestas quis sodales vitae, aliquet at massa. Nam erat libero, luctus at rutrum non, fermentum vitae nunc. Proin interdum magna tortor, id luctus nisl dictum non.',
      date: new Date(),
      userId: 'U123456',
    },
  ];
  get notes(): Observable<Note[]> {
    return of(this._notes);
  }
  addNote(note: Note): Observable<{ status: number }> {
    this._notes.push(note);
    return of({ status: 200 });
  }
  deleteNote(index: number): Observable<{ status: number }> {
    if (index >= 0 && index < this._notes.length) {
      this._notes.splice(index, 1);
      return of({ status: 200 });
    } else {
      return of({ status: 400 });
    }
  }
  constructor() {}
}
