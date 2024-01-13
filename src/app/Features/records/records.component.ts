import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';

import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { DailogueboxComponent } from '../dailoguebox/dailoguebox.component';


export const MY_FORMATS = {
  
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: [ './records.component.scss' ],

})

export class RecordsComponent implements OnInit, AfterViewInit {
  
  constructor(private dialog: MatDialog) { }
  selectedYear = new Date();
  
  

  displayedColumns: string[] = [ 'srNo', 'ShopNumber', 'ShopKeeperName', 'fatherName', "january", "febuary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
  dataSource = new MatTableDataSource(RecordResponse.shopRecords)
  srNo!: number;
  shopData:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  date: any;
     private dialogRef: any;
  ngOnInit() {
    console.log(RecordResponse.shopRecords.length)
    this.srNo = RecordResponse.shopRecords.length

    console.log(RecordResponse);

    this.shopData = RecordResponse.shopRecords

    

    










  }
  getSerialNumber(index: number): number {
    return index + 1;
  }
  isSticky(id: string) {
    return this.displayedColumns.indexOf(id) !== -1;
  }
  setMonthAndYear(normalizedMonthAndYear: any, datepicker: MatDatepicker<any>) {
    this.selectedYear = normalizedMonthAndYear
    // const ctrlValue = this.selectedYear.valueOf();
    // ctrlValue.month(normalizedMonthAndYear.month());
    // ctrlValue.year(normalizedMonthAndYear.year());
    // this.date.setValue(ctrlValue);
    datepicker.close();
  }
  
  openDialog(shopData:any) {
    const dialogRef = this.dialog.open(DailogueboxComponent, {
      data: shopData
    });
  }
  closeDialog(): void {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close();
    }
  }

  totalAmount(x: any) {
    let total = 0;
    RecordResponse.shopRecords.forEach((row: any) => {
      total += row.records[ this.selectedYear.getFullYear().toString() ][ x ].amount

    })
    return total;

  }
 
  
 

 




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

interface Record {
  month: string;
  amount: number;
  isDuesCleared: boolean;
  status: string;
  message: string;
  ShopkeeperId: string;
}

interface MonthlyRecords {
  [ month: string ]: Record;
}

interface YearlyRecords {
  [ year: string ]: MonthlyRecords;
}

interface YourData {
  TenantId: string;
  // ... other properties ...
  records: YearlyRecords;
}


const RecordResponse = {
  shopRecords: [

    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
      remainingAdvance: 2000,
      AdvanceDeducting: 200,
      AdvanceHistory: 12, //months
      fatherName: "Mike Doe",
      OldShopNumber: 100,
      ShopType: 2,
      ShopAgreementDate: new Date("2023-01-01"),
      isAgreement: true,
      MonthlyRent: 1500,
      DuesCurrentStatus: "PENDING",
      DuesMonths: [ new Date("2023-01-01"), new Date("2023-02-01") ],
      totalAmountDues: 3000,

      
      records: {
        "2022": {
          "January": {
            "month": "January",
            "amount": 8000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        },
        "2023": {
          "January": {
            "month": "January",
            "amount": 15001,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        }
      }
    


    },
    {
      TenantId: "tenant456",
      ShopkeeperId: 2,
      ShopNumber: 102,
      ShopKeeperName: "Jane Smith",
      AdvanceAmount: 6000,
      fatherName: "Tom Smith",
      OldShopNumber: 99,
      ShopType: 1,
      ShopAgreementDate: new Date("2023-02-15"),
      isAgreement: true,
      MonthlyRent: 1800,
      DuesCurrentStatus: "PENDING",
      DuesMonths: [ new Date("2023-03-01"), new Date("2023-04-01") ],
      totalAmountDues: 3600,
      
      records: {
        "2022": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        },
        "2023": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        }
      }
    
    },
    {
      TenantId: "tenant789",
      ShopkeeperId: 3,
      ShopNumber: 103,
      ShopKeeperName: "Alice Johnson",
      AdvanceAmount: 5500,
      fatherName: "Bob Johnson",
      OldShopNumber: 98,
      ShopType: 3,
      ShopAgreementDate: new Date("2023-03-10"),
      isAgreement: true,
      MonthlyRent: 1600,
      DuesCurrentStatus: "PENDING",
      DuesMonths: [ new Date("2023-05-01"), new Date("2023-06-01") ],
      totalAmountDues: 3200,
      records: {
        "2022": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        },
        "2023": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        }
      }
    },
    {
      TenantId: "tenant101",
      ShopkeeperId: 4,
      ShopNumber: 104,
      ShopKeeperName: "Robert Brown",
      AdvanceAmount: 7000,
      fatherName: "David Brown",
      OldShopNumber: 97,
      ShopType: 2,
      ShopAgreementDate: new Date("2023-04-20"),
      isAgreement: true,
      MonthlyRent: 2000,
      DuesCurrentStatus: "PENDING",
      DuesMonths: [ new Date("2023-07-01"), new Date("2023-08-01") ],
      totalAmountDues: 4000,
      records: {
        "2022": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        },
        "2023": {
          "January": {
            "month": "January",
            "amount": 1500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for January",
            "ShopkeeperId": "shopkeeper123"
          },
          "February": {
            "month": "February",
            "amount": 2000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for February",
            "ShopkeeperId": "shopkeeper123"
          },
          "March": {
            "month": "March",
            "amount": 2500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for March",
            "ShopkeeperId": "shopkeeper123"
          },
          "April": {
            "month": "April",
            "amount": 3000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for April",
            "ShopkeeperId": "shopkeeper123"
          },
          "May": {
            "month": "May",
            "amount": 3500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for May",
            "ShopkeeperId": "shopkeeper123"
          },
          "June": {
            "month": "June",
            "amount": 4000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for June",
            "ShopkeeperId": "shopkeeper123"
          },
          "July": {
            "month": "July",
            "amount": 4500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for July",
            "ShopkeeperId": "shopkeeper123"
          },
          "August": {
            "month": "August",
            "amount": 5000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for August",
            "ShopkeeperId": "shopkeeper123"
          },
          "September": {
            "month": "September",
            "amount": 5500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for September",
            "ShopkeeperId": "shopkeeper123"
          },
          "October": {
            "month": "October",
            "amount": 6000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for October",
            "ShopkeeperId": "shopkeeper123"
          },
          "November": {
            "month": "November",
            "amount": 6500,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for November",
            "ShopkeeperId": "shopkeeper123"
          },
          "December": {
            "month": "December",
            "amount": 7000,
            "isDuesCleared": false,
            "status": "PENDING",
            "message": "Pending payment for December",
            "ShopkeeperId": "shopkeeper123"
          }
        }
      }
    }

  ],
  shopkeeperData: {
    TenantId: "tenant123",
    ShopkeeperId: 1,
    ShopNumber: 101,
    ShopKeeperName: "John Doe",
    AdvanceAmount: 5000,
    AdvanceRemaining: 2500,
    contactId: "contact123",
    aadharId: "aadhar456",
    fatherName: "Mike Doe",
    address: "123 Main St, City",
    guranter: [ "guarantor1", "guarantor2" ]
  },
  tenantId: "tenant123"
}

