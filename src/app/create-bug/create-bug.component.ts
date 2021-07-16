import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from '../bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  bug: Bug = new Bug();
  submitted = false;

  constructor(private bugService: BugService,
    private router: Router) { }

  ngOnInit() {
  }

  newBug(): void {
    this.submitted = false;
    this.bug = new Bug();
  }

  save() {
    this.bugService.createBug(this.bug).subscribe(data => {
      console.log(data)
      this.bug = new Bug();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    confirm("Are you sure you want to create?");
    alert("Sucessfully added bug!!"); 
    this.submitted = true;
    this.save();   
    
  }

  gotoList() {
    this.router.navigate(['/bug']);
  }

}

