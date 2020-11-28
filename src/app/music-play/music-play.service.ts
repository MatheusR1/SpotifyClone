import { Injectable } from '@angular/core';
import { musicas } from "./musicas"
import { MUSICAS } from "./mock"


@Injectable({
  providedIn: 'root'
})

export class MusicPlayService {

  constructor() { }

  getMusicas(): musicas[] {
    
    return MUSICAS;
  }

}
