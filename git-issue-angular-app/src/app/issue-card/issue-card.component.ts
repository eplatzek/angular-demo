import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})

export class IssueCardComponent {
  // TODO: Add typing
  @Input() issue: any; 
}
