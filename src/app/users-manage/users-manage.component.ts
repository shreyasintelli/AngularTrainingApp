import { Component, OnInit } from '@angular/core';
import { TalkWithServerService } from '../talk-with-server.service';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.css']
})

export class UsersManageComponent implements OnInit {
  users: any;

  constructor(private talkWithServerService: TalkWithServerService) {}

  ngOnInit() {
    this.talkWithServerService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }
}