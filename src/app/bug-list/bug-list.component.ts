import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {

  bug!: Observable<Bug[]>;

  constructor(private bugService: BugService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bug = this.bugService.getBugList();
  }

  deleteBug(bugId: number) {
    alert("Are you sure?")
    this.bugService.deleteBug(bugId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateBug(bugId: number) {
    this.router.navigate(['update', bugId]);
  }

  bugDetails(bugId: number){
    this.router.navigate(['details', bugId]);
  }

}
