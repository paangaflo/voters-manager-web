import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voters-manager-web';
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faWikipediaW = faWikipediaW
}
