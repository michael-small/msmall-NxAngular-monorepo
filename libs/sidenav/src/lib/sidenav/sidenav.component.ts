import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msmall-angular-monorepo-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public showFiller = false;

  constructor() {}

  ngOnInit(): void {}
}
