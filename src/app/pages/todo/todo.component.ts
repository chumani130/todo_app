import { Component, OnInit } from '@angular/core';
import { ITodoStatus, TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.model';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todoStatus = ITodoStatus
  todos: ITodo[] = [];
  isSlidePanelOpen = false;
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required])
    })
  }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
   this.todos =  this.todoService.getAllTodo();
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onSubmit() {
    if(this.todoForm.valid) {

    }
    else {
      this.todoForm.markAllAsTouched();
    }
  }
}
