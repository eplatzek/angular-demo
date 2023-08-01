import { TestBed } from '@angular/core/testing';

import { GitIssueServiceService } from './git-issue-service.service';

describe('GitIssueServiceService', () => {
  let service: GitIssueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitIssueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
