import { Component } from '@angular/core';
import { VisualComponent } from './visual/visual.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'visual-project';
  public currentValues: number[] = [10,50];
  public success: string = String(this.currentValues[0]);
  public error: string = String(this.currentValues[1] - this.currentValues[0]);
  public unknown: string = String(100 - this.currentValues[1]);

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;
    this.success = String(this.currentValues[0]);
    this.error = String(this.currentValues[1] - this.currentValues[0]);
    this.unknown = String(100 - this.currentValues[1]);
  }

}


