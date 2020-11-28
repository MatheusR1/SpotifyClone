import { Component, OnInit } from '@angular/core';
import { MusicPlayService } from './music-play.service';
import { musicas } from './musicas';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.css']
})


export class MusicPlayComponent implements OnInit {

  musicas: musicas[];

  constructor(private mu : MusicPlayService) { }

  ngOnInit(): void {
    this.musicas = this.mu.getMusicas();

  }
}
