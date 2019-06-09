import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'blog';
  public posts = [
    {
      titlePost: 'Mon premier post',
// tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis purus massa, fermentum sit amet molestie ut, pulvinar ut lacus. Donec ut eleifend dui, scelerisque rhoncus enim. Aliquam tincidunt arcu tempor luctus hendrerit. Nunc in metus ante. Aliquam eleifend felis eget risus iaculis, non rutrum massa hendrerit. Pellentesque elementum finibus lectus, ut mollis nunc placerat vitae. Pellentesque a ex ornare, ornare elit nec, finibus libero.',
      loveIts: 0
    },

    {
      titlePost: 'Mon deuxième post',
// tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus massa, fermentum sit amet molestie ut, pulvinar ut lacus. Donec ut eleifend dui, scelerisque rhoncus enim. Aliquam tincidunt arcu tempor luctus hendrerit. Nunc in metus ante. Aliquam eleifend felis eget risus iaculis, non rutrum massa hendrerit. Pellentesque elementum finibus lectus, ut mollis nunc placerat vitae. Pellentesque a ex ornare, ornare elit nec, finibus libero.',
      loveIts: 0
    },

    {
      titlePost: 'Encore un post',
// tslint:disable-next-line: max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus massa, fermentum sit amet molestie ut, pulvinar ut lacus. Donec ut eleifend dui, scelerisque rhoncus enim. Aliquam tincidunt arcu tempor luctus hendrerit. Nunc in metus ante. Aliquam eleifend felis eget risus iaculis, non rutrum massa hendrerit. Pellentesque elementum finibus lectus, ut mollis nunc placerat vitae. Pellentesque a ex ornare, ornare elit nec, finibus libero.',
      loveIts: 0
    }
  ];
 post() {
    return this.posts;
  }
}
