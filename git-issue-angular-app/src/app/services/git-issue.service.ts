import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitIssue } from '../interfaces/gitIssue';

@Injectable({
  providedIn: 'root'
})

export class GitIssueService {
  private readonly apiUrl = 'https://api.github.com/repos/d3/d3/issues?state=open';

  constructor(private http: HttpClient) {}

  getOpenIssues(): Observable<GitIssue[]> {
    return this.http.get<GitIssue[]>(this.apiUrl);
  }  
}
