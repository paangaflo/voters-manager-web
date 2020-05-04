
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getVotes() {
    return this.httpClient.get(this.API_URL + 'votes')
  }

  getVote(voteId) {
    return this.httpClient.get(`${this.API_URL + 'votes'}/${voteId}`)
  }
}