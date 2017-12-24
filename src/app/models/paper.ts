export class Paper {
  id: string;
  categoryId: string;
  category: string;
  year: string;
  title: string;
  description: string;
  publish: boolean;

  constructor () {
    this.title = '';
    this.publish = false;
  }
}
