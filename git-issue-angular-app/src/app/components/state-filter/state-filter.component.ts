import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-filter',
  templateUrl: './state-filter.component.html',
  styleUrls: ['./state-filter.component.scss']
})
export class StateFilterComponent {
  @Output() stateChange = new EventEmitter<string>();

  selectedState: string = 'open'; // Default value

  issueStates = [
    { value: 'open', viewValue: 'Open' },
    { value: 'closed', viewValue: 'Closed' },
  ];

  onStateChange() {
    this.stateChange.emit(this.selectedState);
  }
}
