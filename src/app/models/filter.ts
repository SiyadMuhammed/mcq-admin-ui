export class Filter {
  offset: number;
  pageSize: number;
  sortColumn: string;
  sortDirection: string;
  paperId: string;

  constructor (offset?: number, pageSize?: number, sortColumn?: string,
               sortDirection?: string) {
    this.offset = offset;
    this.pageSize = pageSize;
    this.sortColumn = sortColumn;
    this.sortDirection = sortDirection;
    this.paperId = null;
  }
}
