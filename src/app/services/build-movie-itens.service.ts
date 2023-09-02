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
        imageCard: '../assets/batman.png',
        banner: '../assets/banner-batman.png',
        name: 'Batman',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 4,
      },
      {
        movieId: 2,
        category: 'Ação',
        totalTime: '1h 47m',
        imageCard: '../assets/shang-chi.png',
        banner: '../assets/banner-shang-chi.jpg',
        name: 'Shang-Chi',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 4,
      },
      {
        movieId: 3,
        category: 'Animacao',
        totalTime: '1h 22m',
        imageCard: '../assets/wish-dragon.png',
        banner: '../assets/banner-wish-dragon.jpg',
        name: 'Wish Dragon',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 3,
      },
      {
        movieId: 4,
        category: 'Ação',
        totalTime: '1h 55m',
        imageCard: '../assets/loki.png',
        banner: '../assets/banner-loki.jpg',
        name: 'Loki',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
      {
        movieId: 5,
        category: 'Ação/Aventura',
        totalTime: '2h 15m',
        imageCard: '../assets/spider-man.png',
        banner: '../assets/banner-spider-man.jpg',
        name: 'Spider Man',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
      {
        movieId: 6,
        category: 'Aventura/Acao',
        totalTime: '55m',
        imageCard: '../assets/the-witcher.png',
        banner: '../assets/banner-the-witcher.jpeg',
        name: 'The Witcher',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum convallis turpis, nec rutrum quam vulputate viverra. Proin ornare dolor sit amet laoreet dignissim. ',
        avaliation: 5,
      },
    ];

    return movieItens;
  }
}
