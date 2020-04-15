import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {
  @Input('success') success: string = '10';
  @Input('error') error: string = '40';
  @Input('unknown') unknown: string = '50';
  public success_size: number = parseInt(this.success) / (parseInt(this.success) + parseInt(this.error) + parseInt(this.unknown)) * 100;
  private error_size: number = parseInt(this.success) / (parseInt(this.success) + parseInt(this.error) + parseInt(this.unknown)) * 100;
  private unknown_size: number = parseInt(this.success) / (parseInt(this.success) + parseInt(this.error) + parseInt(this.unknown)) * 100;

  constructor() { }

  ngOnInit(): void {
    this.unknown = String(100 - parseInt(this.success) - parseInt(this.error) )
  }

}
