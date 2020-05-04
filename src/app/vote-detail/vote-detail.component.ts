import { Component, OnInit, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { Vote } from '../vote';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.css']
})
export class VoteDetailComponent implements OnInit {
  @Input () vote: Vote;

  favorability: boolean;
  status_message: boolean;
  vote_select: boolean;
  avg_positive: number;
  avg_negative: number;
  class_positive: string;
  class_negative: string;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  
  constructor(private _sanitizer: DomSanitizer) { 
    this.status_message = false;
  }

  ngOnInit(): void {
    this.vote_select = true;
    this.avg_positive = (100 / (this.vote.positive + this.vote.negative)) * this.vote.positive;
    this.avg_negative = (100 / (this.vote.positive + this.vote.negative)) * this.vote.negative;
    this.class_positive = 'col-' + Math.round(this.avg_positive / 8.34).toString();
    this.class_negative = 'col-' + Math.round(this.avg_negative / 8.34).toString();
    this.favorability = this.avg_positive >= this.avg_negative  ? true : false;
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, black, rgba(255, 0, 0, 0)), url(${image})`);  
  }

  onChangeVote(status) {
    this.vote_select = status;
  }

  onAgain() {
    this.status_message = false;
    this.ngOnInit();
  }

  onVoting() {
    if(this.vote_select){
      this.vote.positive++;
    }else{
      this.vote.negative++;
    }
    this.status_message = true;
    this.ngOnInit();
  }
}