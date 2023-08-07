import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitIssue } from '../interfaces/gitIssue';

@Injectable({
  providedIn: 'root'
})

export class GitIssueService {
  // Direct URL
  // private readonly apiUrl = 'https://api.github.com/repos/d3/d3/issues?state=open';

  // Django Proxied URL
  private readonly apiUrl = 'http://127.0.0.1:8000/proxy/d3-d3-issues';
  constructor(private http: HttpClient) {}

  getIssuesByState(state: string): Observable<GitIssue[]> {
    return this.http.get<GitIssue[]>(`${this.apiUrl}?state=${state}`);
  }  
}
