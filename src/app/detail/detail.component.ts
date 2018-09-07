import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id;
  user;
  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');

    this.user = this.userService.currentUser;
    if(!this.user) {
      this.userService.getUserById(this.id).subscribe((u) => {
        this.user = u.data;
      });
    }
  }

  goBack() {
    this.location.back();
  }

}
