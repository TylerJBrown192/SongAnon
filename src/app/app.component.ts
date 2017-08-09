import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    inputUrl: string;
    outputUrl: string;

    generateLink(): void {
        // this.outputUrl = '';

        // this.outputUrl = something;
    }
}
