import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-ex';
  value : string = "User";

  updateInfo(item:string){
    console.warn(item);
    this.value = item;
  }
}
