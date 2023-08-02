import { TestBed } from '@angular/core/testing';

import { GitIssueService } from './git-issue.service';
import { HttpClient } from '@angular/common/http';
// Create a mock of the HttpClient service
class MockHttpClient {}

describe('GitIssueServiceService', () => {
  let service: GitIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
    service = TestBed.inject(GitIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
