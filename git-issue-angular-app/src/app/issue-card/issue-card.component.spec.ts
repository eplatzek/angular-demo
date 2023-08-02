import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { IssueCardComponent } from './issue-card.component';

describe('IssueCardComponent', () => {
  let component: IssueCardComponent;
  let fixture: ComponentFixture<IssueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [IssueCardComponent]
    });

    fixture = TestBed.createComponent(IssueCardComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    const inputValue = 
    {
      "url": "https://api.github.com/issues/123",
      "repository_url": "https://api.github.com/repos/username/repo-name",
      "labels_url": "https://api.github.com/issues/123/labels",
      "comments_url": "https://api.github.com/issues/123/comments",
      "events_url": "https://api.github.com/issues/123/events",
      "html_url": "https://github.com/username/repo-name/issues/123",
      "id": 123456,
      "node_id": "MDU6SXNzdWUxMjM0NTY=",
      "number": 123,
      "title": "Sample Issue Title",
      "user": {
        "login": "user123",
        "id": 98765,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/98765?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user123",
        "html_url": "https://github.com/user123",
        "followers_url": "https://api.github.com/users/user123/followers",
        "following_url": "https://api.github.com/users/user123/following{/other_user}",
        "gists_url": "https://api.github.com/users/user123/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user123/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user123/subscriptions",
        "organizations_url": "https://api.github.com/users/user123/orgs",
        "repos_url": "https://api.github.com/users/user123/repos",
        "events_url": "https://api.github.com/users/user123/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user123/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [],
      "milestone": null,
      "comments": 0,
      "created_at": "2023-08-01T12:34:56Z",
      "updated_at": "2023-08-01T12:34:56Z",
      "closed_at": null,
      "author_association": "CONTRIBUTOR",
      "active_lock_reason": null,
      "draft": false,
      "pull_request": {
        "url": "https://api.github.com/pulls/123",
        "html_url": "https://github.com/username/repo-name/pull/123",
        "diff_url": "https://github.com/username/repo-name/pull/123.diff",
        "patch_url": "https://github.com/username/repo-name/pull/123.patch",
        "merged_at": null
      },
      "body": "This is a sample issue body text.",
      "reactions": {
        "url": "https://api.github.com/issues/123/reactions",
        "total_count": 5,
        "+1": 2,
        "-1": 0,
        "laugh": 1,
        "hooray": 0,
        "confused": 1,
        "heart": 1,
        "rocket": 0,
        "eyes": 0
      },
      "timeline_url": "https://api.github.com/issues/123/timeline",
      "performed_via_github_app": null,
      "state_reason": null
    };
    
    component.issue = inputValue; // Set the input value

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
