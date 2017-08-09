import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    inputUrl: string;
    outputUrl: string;

    generateLink(): void {
        // this.outputUrl = '';

        // this.outputUrl = something;
    }

    copyClipboard(): void {

    }
}
