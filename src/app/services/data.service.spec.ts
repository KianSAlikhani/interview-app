import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Note } from '../models/note.model';
import { DataService } from './data.service';
describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should addNote', fakeAsync(() => {
    const note: Note = {
      title: 'Test Title',
      body: 'test body',
      userId: 'testId',
      date: new Date(),
    };
    service.addNote(note).subscribe({
      next: (s) => {
        expect(s.status).toEqual(200);
      },
    });
    tick(100);
  }));
  it('should deleteNote', fakeAsync(() => {
    service.deleteNote(-1).subscribe({
      next: (s) => {
        expect(s.status).toEqual(400);
      },
    });
    service.deleteNote(0).subscribe({
      next: (s) => {
        expect(s.status).toEqual(200);
      },
    });
    tick(100);
  }));
});
