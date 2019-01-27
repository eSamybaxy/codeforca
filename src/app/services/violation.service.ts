import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class ViolationService {

  constructor(private papa: Papa) { }

  public summarizeViolations(csvfile) {
    //create a hash map to handle categories
    let categories = {};

    let options = {
      complete: result => {
        const rows = result.data;

        for ( let row of rows) {
          let category            = row['violation_category'];
          let violationDateOpened = row['violation_date'];
          let violationDateClosed = row['violation_date_closed'];

          //increment value if found in row
          if ( typeof categories[category] !== 'undefined' ) {
            categories[category][0]++;

            //initialize dates
            let earliestRowDate   = new Date(violationDateOpened);
            let latestRowDate     = new Date(violationDateClosed);

            let earliestSavedDate = new Date(categories[category][1]);
            let latestSavedDate   = new Date(categories[category][1]);

            if (earliestRowDate.getTime() < earliestSavedDate.getTime())
              categories[category][1] = violationDateOpened;

            if (latestRowDate.getTime() > latestSavedDate.getTime())
              categories[category][2] = violationDateClosed;
          }
          else {
            //set object value as an array
            categories[category] = []

            //initialize violation count
            categories[category][0] = 1;

            //initialize violation start date
            categories[category][1] = violationDateOpened;

            //initialize violation end date
            categories[category][2] = violationDateClosed;
          }
        }

        //Since the Library does not allow proper variable to be returned, we store results in localStorage
        this._saveCategories(categories);
      },
      newline: '\\n',
      header: true
    }

    //Parse with papa library

    this.papa.parse(csvfile, options);
  }

  private _saveCategories(categories) {
    localStorage.setItem('codeforca_categories', JSON.stringify(categories));
  }

  public getCategories() {
    let categories = JSON.parse(localStorage.getItem('codeforca_categories'));
    
    //destroy localStorage data
    //localStorage.clear();
    return categories;
  }
}
