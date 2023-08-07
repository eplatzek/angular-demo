import { Component } from '@angular/core';
import { GitIssueService } from './services/git-issue.service';
import { GitIssue } from './interfaces/gitIssue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-demo';
  issues: GitIssue[] = [];
  selectedState: string = 'open';

  constructor(private gitIssueService: GitIssueService) {}

  ngOnInit() {
    this.fetchIssues();
  }

  onStateFilterChange(selectedState: string) {
    this.selectedState = selectedState;
    this.fetchIssues();
  }

  fetchIssues() {
    this.gitIssueService.getIssuesByState(this.selectedState).subscribe(
      (data: any) => {
        this.issues = data;
        // console.log('issues', this.issues);
        this.issues.forEach(issue => {
          console.log('title', issue.title);
        })
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
