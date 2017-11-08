import {Component} from '@angular/core';
import {TestDataService} from './test-data.service';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="clearComponents()">Clear</button>
    <button type="button" (click)="render()">Render</button>
    <div *ngIf="!cleared">
      <app-test *ngFor="let i of nrOfComponents" [data]="i"></app-test>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cleared = false;

  nrOfComponents = [];

  constructor(private testDataService: TestDataService) {

  }

  clearComponents() {
    this.cleared = true;
  }

  render() {
    this.cleared = false;
    for (let i = 0; i < 100; i++) {
      this.testDataService.getHttpStream()
        .subscribe(val =>
          this.nrOfComponents[i] = val
        );
    }
  }
}
