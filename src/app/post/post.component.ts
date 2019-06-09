import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() titlePost: string;
  @Input() content: string;
  @Input() loveIts: number;
 createdAt: Date = new Date();

  postlists = new AppComponent();
  postliste = this.postlists.post();
  constructor() { }

  ngOnInit() {
  }
  like() {
    this.loveIts++;
  }
  dislike() {
    this.loveIts--;
  }
getColor() {
if (this.loveIts === 0) {

} else if (this.loveIts > 0) {
  return 'green';

} else if (this.loveIts < 0) {
return 'red';
}
}

}
