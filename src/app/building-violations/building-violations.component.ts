import { Component, OnInit, ViewChild } from '@angular/core';
import { ViolationService } from './../services/violation.service';

export interface categoryList {
  name: string;
  violation: number;
  start: string;
  end: string;
}

@Component({
  selector: 'app-building-violations',
  templateUrl: './building-violations.component.html',
  styleUrls: ['./building-violations.component.css']
})
export class BuildingViolationsComponent implements OnInit {

  categories: any;
  uploading: boolean = false;
  file: any;

  @ViewChild('file') csv: any;
  dataSource: categoryList[];

  constructor(private violationService: ViolationService) { }

  ngOnInit() {
  }

  onFileAdded() {
    const file: { [key: string]: File } = this.csv.nativeElement.files;

    for (let key in file) {
      if (!isNaN(parseInt(key)) && file[key].name.endsWith('csv')) {
        this.file = file[key];

        //Allowing just one file to be uploaded
        break;
      }
    }

  }

  //Obtain data from csv and summarize it's content on a table displayed below the form
  summarize() {
    this.violationService.summarizeViolations(this.file);
    this.uploading = true;

    let categories = this.violationService.getCategories();
    this.dataSource = [];

    for ( let category in categories ) {
      let catList = categories[category];
      let tableObject: categoryList = {
        name: category,
        violation: catList[0],
        start: catList[1],
        end: catList[2]
      }

      this.dataSource.push(tableObject);
    }
  }

}
