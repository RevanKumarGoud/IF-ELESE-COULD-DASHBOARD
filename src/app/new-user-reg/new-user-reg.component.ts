import { Component, OnInit } from '@angular/core';
import { DataAPiService } from '../data-api.service';

@Component({
  selector: 'app-new-user-reg',
  templateUrl: './new-user-reg.component.html',
  styleUrls: ['./new-user-reg.component.scss']
})
export class NewUserRegComponent implements OnInit {

NewUsers:any
pagedCardData: any;
itemsPerPage: number = 7;
  constructor (private UserService :DataAPiService) {}

  ngOnInit(): void {
    this.UserService.getUserApi().subscribe((data) =>{
      this.NewUsers = data?.new_users;
      this.updatePagedData();
      console.log(data?.new_users)
    })
  }

  updatePagedData() {
    this.pagedCardData = this.NewUsers.slice(0, this.itemsPerPage);
}

onPageChange(event: any) {
    const startIndex = event.pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedCardData = this.NewUsers.slice(startIndex, endIndex);
}

}
