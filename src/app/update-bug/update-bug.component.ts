import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {

  bugId: number = 0;
  bug: Bug = new  Bug();
  submitted = false;

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

  updateBug() {
    this.bugService.updateBug(this.bugId, this.bug)
      .subscribe(data => {
        console.log(data);
        this.bug = new Bug();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    alert("Are you sure about updating");
    confirm("updated successfully!!!");
    this.submitted = true;
    this.updateBug();    
  }

  gotoList() {
    this.router.navigate(['/bug']);
  }


}
