import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  bankDetails: any;
  public searchFilter: any = '';
  query: any;

  Articles: any;
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getBankdata();
    this.showData();
  }

  getBankdata() {
    this.service.bankData().subscribe((res) => {
      if (res) {
        console.log(res, 'full datas');

        this.bankDetails = res;
      }
    });
  }

  showData(): void {
    this.service.fetchPosts().subscribe(
      (res) => {
        this.Articles = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  tabSize(event: any) {
    this.page = event;
    this.showData();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.showData();
  }
}
