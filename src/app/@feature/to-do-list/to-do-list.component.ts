import { Component, OnInit } from '@angular/core';

// 定義待辦事項介面
interface ToDoList {
  work: string;
  done: boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  toDoList: Array<ToDoList> = [];
  toDoNumber: number = 0;
  newToDo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.toDoList = JSON.parse(localStorage.getItem('toDoList') || '[]' as string);
    this.toDoNumber = JSON.parse(localStorage.getItem('toDoNumber') || '0');
    console.log(this.toDoList, this.toDoNumber);
  }

  // 新增待辦事項
  addTodo(): void {
    if (this.newToDo) {
      this.toDoList.push({ work: this.newToDo, done: false });
      this.toDoNumber += 1;
      this.newToDo = '';
    }
    this.saveData();
  }

  // 處理代辦事項數量，勾選後減少待辦事項數量，取消勾選後增加待辦事項數量
  doneWork(workStatu: boolean): void {
    if (workStatu) {
      this.toDoNumber = this.toDoNumber - 1;
    } else {
      this.toDoNumber = this.toDoNumber + 1;
    }
    this.saveData();
  }

  // 刪除待辦事項
  deleteWork(index: number): void {
    if (this.toDoList[index].done === false) {
      this.toDoNumber = this.toDoNumber - 1;
    }
    this.toDoList.splice(index, 1);
    this.saveData();
  }

  // 儲存資料
  saveData(): void {
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
    localStorage.setItem('toDoNumber', JSON.stringify(this.toDoNumber));
  }
}
