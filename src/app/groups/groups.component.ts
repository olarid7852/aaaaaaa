import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups = []
  selectedGroup = null
  
  ngOnInit(){
    const groups = [
      {name: 'Admin', roles: ['a', 'b', 'c']},
      {name: 'General Manager', roles: ['d', 'b', 'c']},
      {name: 'Admin', roles: ['a', 'c', 'c']},
      {name: 'Admin', roles: ['a', 'b', 'c']},
      {name: 'Admin', roles: ['a', 'b', 'c']},
    ]
    this.groups = groups
  }

  selectGroup(group) {
    this.selectedGroup = group
  }
}
