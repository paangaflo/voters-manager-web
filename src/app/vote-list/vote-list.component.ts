import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { VoteService } from "../vote.service";
import { Vote } from "../vote";

interface Alert {
  type: string;
  title: string;
  sub_title: string;
  message: string;
}

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  public votes: Vote[] = [];
  public alerts: Alert[] = [{
    type: "custom",
    title: "Speak out. Be heard.",
    sub_title: "Be counted",
    message: "Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.",
  }];
 
  constructor(private voteService: VoteService) { }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit() {
    this.voteService.getVotes().subscribe((votes: Vote[])=>{
      this.votes = votes;
    })
  }
}