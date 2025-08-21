import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id = input.required<number>()  // Make it required or provide default value
  name = input.required<string>()
  salary = input.required<number>()
  exp = input.required<number>()

  onDelete = output<number>()

  deleteEmployee() {
    this.onDelete.emit(this.id());
  }
}
