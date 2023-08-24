import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuildMovieItensService {
  constructor() {}

  getMovieItens() {
    let movieItens = [
      {
        category: 'Ação',
        totalTime: '1h 30m',
        image:
          'https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
        name: 'Monster Hunter',
        description:
          'Uma agente da ONU e um grupo de soldados de elite embarcam em uma missão para uma ilha do Pacífico. Lá, eles vão enfrentar monstros gigantes que são as vanguardas de uma invasão a Terra.',
        avaliation: 5,
      },
      {
        category: 'Ação',
        totalTime: '1h 30m',
        image:
          'https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
        name: 'Monster Hunter',
        description:
          'Uma agente da ONU e um grupo de soldados de elite embarcam em uma missão para uma ilha do Pacífico. Lá, eles vão enfrentar monstros gigantes que são as vanguardas de uma invasão a Terra.',
        avaliation: 5,
      },
      {
        category: 'Ação',
        totalTime: '1h 30m',
        image:
          'https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
        name: 'Monster Hunter',
        description:
          'Uma agente da ONU e um grupo de soldados de elite embarcam em uma missão para uma ilha do Pacífico. Lá, eles vão enfrentar monstros gigantes que são as vanguardas de uma invasão a Terra.',
        avaliation: 5,
      },
      {
        category: 'Ação',
        totalTime: '1h 30m',
        image:
          'https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
        name: 'Monster Hunter',
        description:
          'Uma agente da ONU e um grupo de soldados de elite embarcam em uma missão para uma ilha do Pacífico. Lá, eles vão enfrentar monstros gigantes que são as vanguardas de uma invasão a Terra.',
        avaliation: 5,
      },
      {
        category: 'Ação',
        totalTime: '1h 30m',
        image:
          'https://www.themoviedb.org/t/p/w220_and_h330_face/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
        name: 'Monster Hunter',
        description:
          'Uma agente da ONU e um grupo de soldados de elite embarcam em uma missão para uma ilha do Pacífico. Lá, eles vão enfrentar monstros gigantes que são as vanguardas de uma invasão a Terra.',
        avaliation: 5,
      },
    ];

    return movieItens;
  }
}
