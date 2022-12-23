import { TestBed } from '@angular/core/testing';

import { StudentsFirebaseService } from './students-firebase.service';

describe('StudentsFirebaseService', () => {
  let service: StudentsFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
