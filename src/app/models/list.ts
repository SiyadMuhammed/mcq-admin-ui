export class List {
  totalItems: number;
  items: Array<any>;

  constructor (totalItems?: number, items?: Array<any>) {
    this.totalItems = totalItems;
    this.items = items;
  }
}
