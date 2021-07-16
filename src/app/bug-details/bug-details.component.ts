import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  bugId: number = 0;
  bug: Bug = new Bug();

  constructor(private route: ActivatedRoute,private router: Router,
    private bugService: BugService) { }

  ngOnInit() {
    this.bug = new Bug();
    this.bugId = this.route.snapshot.params['id'];
    this.bugService.getBug(this.bugId)
      .subscribe(data => {
        console.log(data)
        this.bug = data;
      }, error => console.log(error));
  }

  list(){
    alert("Do you want to go back ?");
    this.router.navigate(['bug']);
  }

  
}

