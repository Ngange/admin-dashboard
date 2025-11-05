import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  settings = {
    siteName: 'Admin Dashboard',
    adminEmail: 'admin@example.com',
    timezone: 'UTC-5',
    maintenanceMode: false,
    twoFactorAuth: true,
    passwordExpiry: true,
    sessionTimeout: '60'
  };

  saveSettings() {
    alert('Settings saved successfully!');
    console.log('Settings saved:', this.settings);
  }

  clearCache() {
    if (confirm('Are you sure you want to clear all cache?')) {
      alert('Cache cleared successfully!');
    }
  }

  resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.settings = {
        siteName: 'Admin Dashboard',
        adminEmail: 'admin@example.com',
        timezone: 'UTC-5',
        maintenanceMode: false,
        twoFactorAuth: true,
        passwordExpiry: true,
        sessionTimeout: '60'
      };
      alert('Settings reset to defaults!');
    }
  }
}
