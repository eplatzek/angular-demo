import { Component } from '@angular/core';
import { GitIssueService } from './services/git-issue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-demo';
  issues: any[] = [];

  constructor(private gitIssueService: GitIssueService) {}

  ngOnInit() {
    this.gitIssueService.getOpenIssues().subscribe(
      (data: any) => {
        this.issues = data;
        console.log('issues', this.issues);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
