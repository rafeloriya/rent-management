import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-advnace',
  templateUrl: './advnace.component.html',
  styleUrls: [ './advnace.component.scss' ]
})
export class AdvnaceComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = [ 'srNo', 'ShopNumber', 'ShopKeeperName', 'fatherName', 'AdvanceAmount', 'DuesCurrentStatus' ];
  dataSource = new MatTableDataSource(RecordResponse.shopRecords)
  srNo!: number;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit() {
    console.log(RecordResponse.shopRecords.length)
    this.srNo = RecordResponse.shopRecords.length





  }
  getSerialNumber(index: number): number {
    return index + 1;
  }
  isSticky(id: string) {
    return this.displayedColumns.indexOf(id) !== -1;
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



const RecordResponse = {
  shopRecords: [
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    }, {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },
    {
      TenantId: "tenant123",
      ShopkeeperId: 1,
      ShopNumber: 101,
      ShopKeeperName: "John Doe",
      AdvanceAmount: 5000,
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
        2022: [
          {
            month: "January",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for January",
            ShopkeeperId: "shopkeeper123"
          }
        ],
        2023: [
          {
            month: "February",
            amount: 1500,
            isDuesCleared: false,
            status: "PENDING",
            message: "Pending payment for February",
            ShopkeeperId: "shopkeeper123"
          }
        ]
      }
    },

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


