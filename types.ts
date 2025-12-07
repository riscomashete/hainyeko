export type PageView = 'home' | 'about' | 'academics' | 'admissions' | 'contact' | 'calendar' | 'portals' | 'parent-dashboard' | 'staff-dashboard' | 'admin-dashboard';

export interface NavItem {
  label: string;
  view: PageView;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: 'Sports' | 'Academic' | 'Event';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Application {
  id: string;
  learnerName: string;
  gradeApplying: string;
  parentName: string;
  email: string;
  phone: string;
  status: 'Pending' | 'Reviewed' | 'Accepted';
  submittedDate: string;
  documents: {
    birthCert?: string;
    reportCard?: string;
    parentID?: string;
  };
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  type: 'Holiday' | 'Exam' | 'Event' | 'Sport';
  description?: string;
}

export interface StudentRecord {
  id: string;
  name: string;
  grade: string;
  parentName: string;
  attendance: number;
  feesDue: number;
  nextPaymentDate: string;
  subjects: { name: string; mark: number; symbol: string }[];
  messages: { id: number; from: string; subject: string; date: string }[];
}

export interface ClassRecord {
  id: string;
  subject: string;
  grade: string;
  time: string;
  room: string;
  studentsCount: number;
}