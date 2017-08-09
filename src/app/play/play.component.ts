import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
    youtubeUrl: string;

    constructor(private _router: ActivatedRoute) { }

    ngOnInit() {
        this.youtubeUrl = this._router.snapshot.queryParams['url'];
    }
}
