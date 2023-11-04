import { Component, ViewChild } from '@angular/core';
import { DataAPiService } from '../data-api.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  TableData:any;
  pagedTableData: any;
  itemsPerPage: number = 5;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  constructor (private Api :DataAPiService, private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${startIndex + 1} – ${endIndex} of ${length}`;
    };
  }

  ngOnInit(): void {
    this.Api.getApi().subscribe((data) =>{
      this.TableData = data?.recent_orders;
      this.updatePagedData();
      console.log(data?.recent_orders)
    })
  }
  updatePagedData() {
    this.pagedTableData = this.TableData.slice(0, this.itemsPerPage);
}

onPageChange(event: any) {
    const startIndex = event.pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedTableData = this.TableData.slice(startIndex, endIndex);
}

getStatusColor(status: string): string {
  switch (status) {
      case "Paid":
          return 'primary';
      case 'Pending':
          return 'warn';
      case 'Failed':
          return 'accent';
      default:
          return 'default';
  }
}

}
