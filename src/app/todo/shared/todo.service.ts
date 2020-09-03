import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(): any {
    this.toDoList = this.firebasedb.list('title');
    return this.toDoList;
  }

  addTitle(title: string): void {
    this.toDoList.push({
      title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean): void {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string): void {
    this.toDoList.remove($key);
  }

}
