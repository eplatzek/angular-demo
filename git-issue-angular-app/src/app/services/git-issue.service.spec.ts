import { TestBed } from '@angular/core/testing';

import { GitIssueService } from './git-issue.service';

describe('GitIssueServiceService', () => {
  let service: GitIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
