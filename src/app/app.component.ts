import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public code = 'body { }';

  public visible = true;

  /**
   * This part isn't important. Just needed to refresh the component somehow
   */
  reload() {
    this.visible = false;

    const timer = setTimeout(() => {
      this.visible = true;
      clearTimeout(timer);
    }, 1000);
  }
}
