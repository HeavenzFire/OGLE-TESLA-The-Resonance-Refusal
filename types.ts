
export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'warning' | 'danger' | 'success';
}

export interface TestDriveData {
  location: string;
  distance: number;
  fuelConsumed: number;
  mpg: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
