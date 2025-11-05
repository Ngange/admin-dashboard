import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', active: true },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor', active: false },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'User', active: true }
  ];
}
