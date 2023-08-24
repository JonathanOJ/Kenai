import { TestBed } from '@angular/core/testing';

import { BuildMovieItensService } from './build-movie-itens.service';

describe('BuildMovieItensService', () => {
  let service: BuildMovieItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildMovieItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
