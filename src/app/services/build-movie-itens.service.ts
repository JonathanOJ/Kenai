import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildMovieItensService {
  constructor() {}

  getMovieItens() {
    let movieItens = [
      {
        movieId: 1,
        category: 'Ação',
        totalTime: '1h 30m',
        image: '../assets/batman.png',
        name: 'Batman',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 4,
      },
      {
        movieId: 2,
        category: 'Ação',
        totalTime: '1h 47m',
        image: '../assets/shang-chi.png',
        name: 'Shang-Chi',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 4,
      },
      {
        movieId: 3,
        category: 'Animacao',
        totalTime: '1h 22m',
        image: '../assets/wish-dragon.png',
        name: 'Wish Dragon',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 3,
      },
      {
        movieId: 4,
        category: 'Ação',
        totalTime: '1h 55m',
        image: '../assets/loki.png',
        name: 'Loki',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
      {
        movieId: 5,
        category: 'Ação/Aventura',
        totalTime: '2h 15m',
        image: '../assets/spider-man.png',
        name: 'Spider Man',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
      {
        movieId: 6,
        category: 'Aventura/Acao',
        totalTime: '55m',
        image: '../assets/the-witcher.png',
        name: 'The Witcher',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
    ];

    return movieItens;
  }
}
