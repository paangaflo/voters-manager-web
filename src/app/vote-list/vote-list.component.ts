import { Component, OnInit } from '@angular/core';
import { VoteService } from "../vote.service";
import { Vote } from "../vote";

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  votes: Vote[] = [];
 
  constructor(private voteService: VoteService) { }

  ngOnInit() {
    this.voteService.getVotes().subscribe((votes: Vote[])=>{
      this.votes = votes;
    })
  }
}