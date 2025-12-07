import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SchoolChat } from './components/SchoolChat';
import { PageView, NewsItem, Application, CalendarEvent, StudentRecord, ClassRecord } from './types';
import { Calendar as CalendarIcon, BookOpen, Users, Trophy, ArrowRight, Clock, CheckCircle, Search, LogOut, Upload, FileText, Download, Lock, User, Wallet, Bell, AlertCircle, Briefcase, GraduationCap, ClipboardList, PenTool, MapPin, Info } from 'lucide-react';

const mockNews: NewsItem[] = [
  { id: 1, title: 'Regional Athletics Victory', date: 'Oct 15, 2023', excerpt: 'Our senior team took home 5 gold medals at the Khomas Regional Athletics meet.', category: 'Sports' },
  { id: 2, title: 'Semester 2 Examination Schedule', date: 'Oct 20, 2023', excerpt: 'The final examination timetable for Grades 8-9 has been released. Please check the portal.', category: 'Academic' },
  { id: 3, title: 'Science Fair Winners', date: 'Nov 02, 2023', excerpt: 'Congratulations to the Grade 9 Physical Science team for their innovative solar project.', category: 'Academic' },
];

const mockCalendarEvents: CalendarEvent[] = [
  { id: 1, title: 'School Reopens (Term 1)', date: 'Jan 15, 2024', type: 'Event', description: 'First day of school for all grades. Assembly at 07:30.' },
  { id: 2, title: 'Inter-House Athletics', date: 'Feb 10, 2024', type: 'Sport', description: 'Mandatory attendance. Please wear house colors.' },
  { id: 3, title: 'Independence Day (Public Holiday)', date: 'Mar 21, 2024', type: 'Holiday' },
  { id: 4, title: 'Mid-Term Break', date: 'Apr 26 - May 01, 2024', type: 'Holiday' },
  { id: 5, title: 'Mid-Year Examinations', date: 'May 20 - Jun 10, 2024', type: 'Exam', description: 'Grade 8-9 exam session. School closes at 12:00 for non-exam grades.' },
  { id: 6, title: 'School Reports Released', date: 'Jun 14, 2024', type: 'Event' },
  { id: 7, title: 'Term 2 Begins', date: 'Jul 16, 2024', type: 'Event' },
  { id: 8, title: 'Heroes Day (Public Holiday)', date: 'Aug 26, 2024', type: 'Holiday' },
  { id: 9, title: 'Cultural Festival', date: 'Sep 15, 2024', type: 'Event', description: 'Celebrating our diverse heritage with food, dance, and music.' },
  { id: 10, title: 'End of Year Examinations', date: 'Nov 01 - Nov 25, 2024', type: 'Exam' },
  { id: 11, title: 'Prize Giving Ceremony', date: 'Dec 05, 2024', type: 'Event' },
  { id: 12, title: 'School Closes', date: 'Dec 06, 2024', type: 'Event' },
];

const mockStudent: StudentRecord = {
  id: 'TH-2023-089',
  name: 'Thomas Nakale',
  grade: '8A',
  parentName: 'Sarah Nakale',
  attendance: 96,
  feesDue: 450.00,
  nextPaymentDate: '2023-11-30',
  subjects: [
    { name: 'English 2nd Language', mark: 78, symbol: 'B' },
    { name: 'Mathematics', mark: 65, symbol: 'C' },
    { name: 'Physical Science', mark: 82, symbol: 'A' },
    { name: 'Life Science', mark: 74, symbol: 'B' },
    { name: 'Geography', mark: 70, symbol: 'B' },
    { name: 'History', mark: 85, symbol: 'A' },
  ],
  messages: [
    { id: 1, from: 'Mr. Shikongo (Math)', subject: 'Extra Classes', date: 'Oct 28' },
    { id: 2, from: 'Admin Office', subject: 'Re-registration 2024', date: 'Oct 15' },
  ]
};

const mockTeacherClasses: ClassRecord[] = [
  { id: '8A-MAT', subject: 'Mathematics', grade: '8A', time: '07:30 - 08:15', room: 'Rm 12', studentsCount: 32 },
  { id: '8B-MAT', subject: 'Mathematics', grade: '8B', time: '09:00 - 09:45', room: 'Rm 14', studentsCount: 30 },
  { id: '9A-MAT', subject: 'Mathematics', grade: '9A', time: '10:00 - 10:45', room: 'Rm 12', studentsCount: 28 },
];

const mockClassStudents = [
  { id: 'ST001', name: 'Amutenya, Julia', attendance: 'Present', mark: 72 },
  { id: 'ST002', name: 'Beukes, Brandon', attendance: 'Present', mark: 65 },
  { id: 'ST003', name: 'Gariseb, Michael', attendance: 'Absent', mark: 58 },
  { id: 'ST004', name: 'Nakale, Thomas', attendance: 'Present', mark: 82 },
  { id: 'ST005', name: 'Shikongo, Penehafo', attendance: 'Present', mark: 91 },
];

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  
  // Application Data State (Mock Database)
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'APP-101',
      learnerName: 'Thomas Nakale',
      gradeApplying: '8',
      parentName: 'Sarah Nakale',
      email: 'sarah.n@example.com',
      phone: '081 123 4567',
      status: 'Pending',
      submittedDate: '2023-10-25',
      documents: {
        birthCert: 'birth_cert_thomas.pdf',
        reportCard: 'report_2022.pdf',
        parentID: 'id_sarah.jpg'
      }
    },
    {
      id: 'APP-102',
      learnerName: 'Julia Amutenya',
      gradeApplying: '1',
      parentName: 'Petrus Amutenya',
      email: 'p.amutenya@example.com',
      phone: '081 987 6543',
      status: 'Reviewed',
      submittedDate: '2023-10-28',
      documents: {
        birthCert: 'julia_bc.pdf'
      }
    }
  ]);
  
  // Form Input State
  const [formData, setFormData] = useState({
    learnerName: '',
    gradeApplying: '',
    parentName: '',
    email: '',
    phone: ''
  });

  // File Upload State
  const [files, setFiles] = useState<{
    birthCert: File | null;
    reportCard: File | null;
    parentID: File | null;
  }>({
    birthCert: null,
    reportCard: null,
    parentID: null
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({
        ...files,
        [field]: e.target.files[0]
      });
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.learnerName || !formData.gradeApplying || !formData.parentName) return;

    const newApp: Application = {
      id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
      ...formData,
      status: 'Pending',
      submittedDate: new Date().toISOString().split('T')[0],
      documents: {
        birthCert: files.birthCert ? files.birthCert.name : undefined,
        reportCard: files.reportCard ? files.reportCard.name : undefined,
        parentID: files.parentID ? files.parentID.name : undefined
      }
    };
    
    setApplications([newApp, ...applications]);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({ learnerName: '', gradeApplying: '', parentName: '', email: '', phone: '' });
    setFiles({ birthCert: null, reportCard: null, parentID: null });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const isDashboardView = ['admin-dashboard', 'staff-dashboard', 'parent-dashboard'].includes(currentView);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <main>
            {/* Hero Section */}
            <section className="relative bg-school-darkGreen text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
                <div className="bg-school-yellow text-school-darkGreen text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                  Welcome to Excellence
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                  Tobias Hainyeko<br />Combined School
                </h2>
                <p className="text-xl md:text-2xl text-green-100 max-w-2xl mb-10 font-light">
                  Nurturing minds, building character, and shaping the future leaders of Namibia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentView('admissions')}
                    className="bg-school-yellow text-school-darkGreen font-bold px-8 py-3 rounded-md hover:bg-yellow-300 transition-colors shadow-lg"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => setCurrentView('about')}
                    className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-school-darkGreen transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            {/* Principal's Message */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Principal" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-school-darkGreen/90 p-4 text-white">
                        <p className="font-bold">Mrs. A. N. Shikongo</p>
                        <p className="text-xs text-school-yellow">School Principal</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-serif font-bold text-school-darkGreen mb-6">Principal's Welcome</h3>
                    <div className="prose text-gray-600 leading-relaxed">
                      <p className="mb-4">
                        It is my distinct privilege to welcome you to Tobias Hainyeko Combined School. Our institution stands as a beacon of hope and excellence within the community, dedicated to providing a transformative educational experience.
                      </p>
                      <p className="mb-4">
                        We believe in a holistic approach to education where academic rigor is balanced with sports, culture, and character development. Our dedicated staff works tirelessly to ensure every learner achieves their full potential in a safe and supportive environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats/Highlights */}
            <section className="py-12 bg-school-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="p-6 bg-white rounded-xl shadow-sm border-b-4 border-school-yellow">
                    <BookOpen className="w-8 h-8 mx-auto text-school-green mb-3" />
                    <h4 className="text-3xl font-bold text-gray-900 mb-1">98%</h4>
                    <p className="text-sm text-gray-500">Pass Rate</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border-b-4 border-school-green">
                    <Users className="w-8 h-8 mx-auto text-school-yellow mb-3" />
                    <h4 className="text-3xl font-bold text-gray-900 mb-1">1,200+</h4>
                    <p className="text-sm text-gray-500">Learners</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border-b-4 border-school-yellow">
                    <Trophy className="w-8 h-8 mx-auto text-school-green mb-3" />
                    <h4 className="text-3xl font-bold text-gray-900 mb-1">45+</h4>
                    <p className="text-sm text-gray-500">Awards 2023</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border-b-4 border-school-green">
                    <CalendarIcon className="w-8 h-8 mx-auto text-school-yellow mb-3" />
                    <h4 className="text-3xl font-bold text-gray-900 mb-1">30+</h4>
                    <p className="text-sm text-gray-500">Years of Service</p>
                  </div>
                </div>
              </div>
            </section>

            {/* News & Events */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-school-darkGreen">Latest News</h2>
                    <p className="text-gray-500 mt-2">Keeping our community informed.</p>
                  </div>
                  <button className="hidden md:flex items-center text-school-green font-semibold hover:text-school-darkGreen">
                    View All News <ArrowRight size={18} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mockNews.map((news) => (
                    <div key={news.id} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-2 bg-school-green"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-bold text-school-green bg-green-50 px-2 py-1 rounded">
                            {news.category}
                          </span>
                          <span className="text-xs text-gray-400">{news.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                        <button className="text-sm font-semibold text-school-darkGreen hover:underline">Read more</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        );

      case 'about':
        return (
          <main className="bg-school-cream min-h-screen">
             <div className="bg-school-darkGreen text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-4xl font-serif font-bold mb-4">About Our School</h1>
                  <p className="text-xl text-green-100">Rich history, bright future.</p>
                </div>
             </div>
             
             <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mb-8">
                  <h3 className="text-2xl font-bold text-school-darkGreen mb-4">Our History</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Established to serve the community of Windhoek, Tobias Hainyeko Combined School has grown from a small primary facility into a comprehensive combined school offering education from Grade 0 to Grade 9. Named after the liberation hero Tobias Hainyeko, we strive to embody the courage and dedication associated with our namesake.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-school-darkGreen mb-4">Vision & Mission</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-school-green">
                      <h4 className="font-bold text-lg mb-2 text-school-green">Vision</h4>
                      <p className="text-sm text-gray-700">To be a leading educational institution that produces well-disciplined, innovative, and productive citizens.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-school-yellow">
                      <h4 className="font-bold text-lg mb-2 text-yellow-800">Mission</h4>
                      <p className="text-sm text-gray-700">Providing quality accessible education through committed teaching, effective management, and parental involvement.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                   <h3 className="text-2xl font-bold text-school-darkGreen mb-6">School Anthem</h3>
                   <div className="text-center italic text-gray-600 space-y-2">
                      <p>"Arise ye children of the Land"</p>
                      <p>"With knowledge as our guiding light"</p>
                      <p>"Tobias Hainyeko stands for truth"</p>
                      <p>"Creating futures burning bright"</p>
                   </div>
                </div>
             </div>
          </main>
        );

      case 'academics':
        return (
          <main className="bg-gray-50 min-h-screen">
             <div className="bg-school-green text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-4xl font-serif font-bold">Academics</h1>
                </div>
             </div>
             <div className="max-w-7xl mx-auto px-4 py-12">
               <div className="grid md:grid-cols-2 gap-8">
                 {/* Primary Phase */}
                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-yellow-400 p-4">
                      <h3 className="text-xl font-bold text-school-darkGreen">Pre-Primary & Primary Phase (Grade 0-7)</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">Our primary phase focuses on foundational literacy, numeracy, and life skills.</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-green rounded-full mr-2"></span>School Readiness (Grade 0)</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-green rounded-full mr-2"></span>Mathematics</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-green rounded-full mr-2"></span>English & Vernacular Languages</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-green rounded-full mr-2"></span>Environmental Studies / Natural Science</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-green rounded-full mr-2"></span>Arts & Physical Education</li>
                      </ul>
                    </div>
                 </div>

                 {/* Secondary Phase */}
                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-school-darkGreen p-4">
                      <h3 className="text-xl font-bold text-white">Junior Secondary Phase (Grade 8-9)</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">Preparing learners for senior secondary education with a rigorous foundation.</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-yellow rounded-full mr-2"></span>Physical Science & Life Science</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-yellow rounded-full mr-2"></span>Mathematics & Geography</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-yellow rounded-full mr-2"></span>History & Development Studies</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-yellow rounded-full mr-2"></span>Entrepreneurship & Accounting</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-school-yellow rounded-full mr-2"></span>Oshindonga / Oshikwanyama</li>
                      </ul>
                    </div>
                 </div>
               </div>

               {/* Exam Info */}
               <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                 <h3 className="text-2xl font-bold text-school-darkGreen mb-4">Examination & Assessment</h3>
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="p-4 bg-gray-50 rounded-lg">
                     <Clock className="text-school-green mb-2" />
                     <h4 className="font-bold">Semester 1</h4>
                     <p className="text-sm text-gray-600">January to June. Includes Continuous Assessment & Mid-Year Examinations.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-lg">
                     <Clock className="text-school-green mb-2" />
                     <h4 className="font-bold">Semester 2</h4>
                     <p className="text-sm text-gray-600">July to December. Final End-of-Year Promotion Examinations.</p>
                   </div>
                 </div>
               </div>
             </div>
          </main>
        );

      case 'calendar':
        return (
          <main className="bg-school-cream min-h-screen">
             {/* Header */}
             <div className="bg-school-darkGreen text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-4xl font-serif font-bold mb-4">School Calendar</h1>
                  <p className="text-xl text-green-100">Important dates, holidays, and events for the academic year.</p>
                </div>
             </div>

             <div className="max-w-5xl mx-auto px-4 py-12">
               {/* Quick Legend & Download */}
               <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                 <div className="flex flex-wrap gap-3">
                    <span className="flex items-center text-xs font-semibold px-3 py-1 bg-green-50 text-green-800 rounded-full border border-school-green">
                      <span className="w-2 h-2 rounded-full bg-school-green mr-2"></span> School Event
                    </span>
                    <span className="flex items-center text-xs font-semibold px-3 py-1 bg-yellow-50 text-yellow-800 rounded-full border border-yellow-500">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span> Holiday / Break
                    </span>
                    <span className="flex items-center text-xs font-semibold px-3 py-1 bg-red-50 text-red-800 rounded-full border border-red-500">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> Examination
                    </span>
                    <span className="flex items-center text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-500">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Sport / Cultural
                    </span>
                 </div>
                 <button className="flex items-center bg-school-green text-white px-4 py-2 rounded shadow hover:bg-school-darkGreen transition text-sm font-bold">
                   <Download size={16} className="mr-2" /> Download 2024 PDF
                 </button>
               </div>

               {/* Timeline View */}
               <div className="space-y-6">
                 {mockCalendarEvents.map((event) => {
                   let borderColor = 'border-school-green';
                   let bgColor = 'bg-white';
                   let textColor = 'text-green-800';
                   let icon = <CalendarIcon className="text-school-green" />;

                   if (event.type === 'Holiday') {
                     borderColor = 'border-yellow-500';
                     bgColor = 'bg-yellow-50/30';
                     textColor = 'text-yellow-800';
                     icon = <Users className="text-yellow-600" />;
                   } else if (event.type === 'Exam') {
                     borderColor = 'border-red-500';
                     bgColor = 'bg-red-50/30';
                     textColor = 'text-red-800';
                     icon = <BookOpen className="text-red-500" />;
                   } else if (event.type === 'Sport') {
                     borderColor = 'border-blue-500';
                     bgColor = 'bg-blue-50/30';
                     textColor = 'text-blue-800';
                     icon = <Trophy className="text-blue-500" />;
                   }

                   return (
                     <div key={event.id} className={`flex flex-col md:flex-row gap-4 p-6 rounded-lg shadow-sm border-l-4 ${borderColor} ${bgColor} hover:shadow-md transition-shadow`}>
                        <div className="md:w-1/4">
                          <span className={`text-sm font-bold uppercase tracking-wide ${textColor}`}>{event.type}</span>
                          <h4 className="text-lg font-bold text-gray-900 mt-1">{event.date}</h4>
                        </div>
                        <div className="md:w-3/4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-school-darkGreen mb-2">{event.title}</h3>
                              {event.description && <p className="text-gray-600 text-sm">{event.description}</p>}
                            </div>
                            <div className="hidden md:block opacity-50">
                              {icon}
                            </div>
                          </div>
                        </div>
                     </div>
                   );
                 })}
               </div>

               <div className="mt-12 text-center">
                 <p className="text-sm text-gray-500">
                   * Dates are subject to change. Please check the Staff Portal or contact the office for the most up-to-date information.
                 </p>
               </div>
             </div>
          </main>
        );

      case 'admissions':
        return (
          <main className="bg-school-cream min-h-screen">
             <div className="bg-school-darkGreen text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-4xl font-serif font-bold">Admissions</h1>
                </div>
             </div>
             
             <div className="max-w-4xl mx-auto px-4 py-12">
               <div className="grid md:grid-cols-3 gap-8">
                 {/* Info Sidebar */}
                 <div className="md:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-school-yellow">
                      <h3 className="font-bold text-lg mb-3">Requirements</h3>
                      <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                        <li>Birth Certificate copy</li>
                        <li>Recent Report Card</li>
                        <li>Transfer letter</li>
                        <li>2x Photos</li>
                        <li>Parent ID copy</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-school-green">
                      <h3 className="font-bold text-lg mb-3">Dates</h3>
                      <p className="text-sm text-gray-600">Applications open July - September.</p>
                    </div>
                 </div>

                 {/* Application Form */}
                 <div className="md:col-span-2">
                   <div className="bg-white p-8 rounded-xl shadow-lg">
                     <h2 className="text-2xl font-bold text-school-darkGreen mb-2">Online Application</h2>
                     <p className="text-gray-500 mb-6 text-sm">Fill out the form below to apply for the 2024/2025 academic year. All documents are required.</p>

                     {submitStatus === 'success' && (
                       <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                         <CheckCircle className="mr-2 h-5 w-5" />
                         <div>
                           <p className="font-bold">Application Submitted Successfully!</p>
                           <p className="text-xs">We will contact you shortly regarding the next steps.</p>
                         </div>
                       </div>
                     )}

                     <form onSubmit={handleApplicationSubmit} className="space-y-6">
                       {/* Personal Details */}
                       <div className="space-y-4">
                         <h3 className="font-bold text-gray-900 border-b pb-2">Learner Details</h3>
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Learner's Full Name</label>
                           <input 
                              type="text" 
                              name="learnerName"
                              value={formData.learnerName}
                              onChange={handleInputChange}
                              required
                              className="w-full p-2 border border-gray-300 rounded focus:border-school-green focus:ring-1 focus:ring-school-green outline-none" 
                            />
                         </div>

                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                           <select 
                              name="gradeApplying"
                              value={formData.gradeApplying}
                              onChange={handleInputChange}
                              required
                              className="w-full p-2 border border-gray-300 rounded focus:border-school-green focus:ring-1 focus:ring-school-green outline-none bg-white"
                           >
                             <option value="">Select Grade</option>
                             {[0,1,2,3,4,5,6,7,8,9].map(g => (
                               <option key={g} value={g}>Grade {g}</option>
                             ))}
                           </select>
                         </div>
                       </div>

                       {/* Parent Details */}
                       <div className="space-y-4">
                         <h3 className="font-bold text-gray-900 border-b pb-2">Parent/Guardian Details</h3>
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                           <input 
                              type="text" 
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleInputChange}
                              required
                              className="w-full p-2 border border-gray-300 rounded focus:border-school-green focus:ring-1 focus:ring-school-green outline-none" 
                           />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                             <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:border-school-green focus:ring-1 focus:ring-school-green outline-none" 
                             />
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                             <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:border-school-green focus:ring-1 focus:ring-school-green outline-none" 
                             />
                           </div>
                         </div>
                       </div>

                       {/* Document Upload */}
                       <div className="space-y-4">
                         <h3 className="font-bold text-gray-900 border-b pb-2 flex items-center">
                           <Upload size={18} className="mr-2 text-school-green" /> Document Upload
                         </h3>
                         
                         <div className="grid md:grid-cols-1 gap-4">
                           <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                             <label className="block text-sm font-medium text-gray-700 mb-1">Birth Certificate</label>
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png"
                               onChange={(e) => handleFileChange(e, 'birthCert')}
                               className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-school-green file:text-white hover:file:bg-school-darkGreen"
                             />
                             {files.birthCert && <p className="text-xs text-green-600 mt-1">Selected: {files.birthCert.name}</p>}
                           </div>

                           <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                             <label className="block text-sm font-medium text-gray-700 mb-1">Previous Report Card</label>
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png"
                               onChange={(e) => handleFileChange(e, 'reportCard')}
                               className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-school-green file:text-white hover:file:bg-school-darkGreen"
                             />
                             {files.reportCard && <p className="text-xs text-green-600 mt-1">Selected: {files.reportCard.name}</p>}
                           </div>

                           <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                             <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian ID</label>
                             <input 
                               type="file" 
                               accept=".pdf,.jpg,.jpeg,.png"
                               onChange={(e) => handleFileChange(e, 'parentID')}
                               className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-school-green file:text-white hover:file:bg-school-darkGreen"
                             />
                             {files.parentID && <p className="text-xs text-green-600 mt-1">Selected: {files.parentID.name}</p>}
                           </div>
                         </div>
                       </div>

                       <div className="pt-4">
                         <button type="submit" className="w-full bg-school-green text-white font-bold py-3 px-6 rounded hover:bg-school-darkGreen transition-colors shadow-md flex items-center justify-center">
                           Submit Application <ArrowRight size={18} className="ml-2" />
                         </button>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
          </main>
        );

      case 'contact':
        return (
          <main className="bg-gray-50 min-h-screen">
             <div className="bg-school-darkGreen text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
                </div>
             </div>
             
             <div className="max-w-7xl mx-auto px-4 py-12">
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white p-8 rounded-xl shadow-md">
                   <h2 className="text-2xl font-bold text-school-darkGreen mb-6">Get in Touch</h2>
                   <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                       <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none" required />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                       <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none" required />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                       <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-yellow focus:border-transparent outline-none" required></textarea>
                     </div>
                     <button type="submit" className="w-full bg-school-darkGreen text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors">
                       Send Message
                     </button>
                   </form>
                 </div>

                 <div className="space-y-6">
                   <div className="bg-white p-8 rounded-xl shadow-md">
                     <h3 className="text-xl font-bold text-gray-900 mb-4">School Office</h3>
                     <div className="space-y-4 text-gray-600">
                       <p><strong className="text-school-green">Hours:</strong> Mon - Fri: 07:30 - 16:00</p>
                       <p><strong className="text-school-green">Phone:</strong> +264 61 123 4567</p>
                       <p><strong className="text-school-green">Email:</strong> admin@tobiashainyeko.edu.na</p>
                       <p><strong className="text-school-green">Address:</strong><br/>
                       Erf 123, Tobias Hainyeko Street<br/>
                       Okuryangava<br/>
                       Windhoek, Namibia</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </main>
        );

      case 'portals':
        return (
          <main className="bg-school-cream min-h-screen">
             <div className="bg-school-darkGreen text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h1 className="text-4xl font-serif font-bold mb-4">School Portals</h1>
                  <p className="text-xl text-green-100">Secure access for staff, parents, and learners.</p>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-4 py-16">
               
               {/* DEMO CREDENTIALS BANNER */}
               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start gap-3">
                 <Info className="text-blue-600 shrink-0 mt-0.5" />
                 <div className="text-sm text-blue-800">
                   <p className="font-bold mb-1">Demo Credentials for Testing:</p>
                   <ul className="list-disc pl-4 space-y-1">
                     <li><strong>Parent:</strong> parent@demo.com / demo123</li>
                     <li><strong>Staff:</strong> teacher@demo.com / demo123</li>
                     <li><strong>Admin:</strong> admin@demo.com / demo123</li>
                   </ul>
                 </div>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                 {/* Parent Portal Login */}
                 <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-school-green flex flex-col items-center text-center">
                    <div className="bg-green-50 p-4 rounded-full mb-6">
                      <User size={40} className="text-school-green" />
                    </div>
                    <h2 className="text-xl font-bold text-school-darkGreen mb-2">Parent Portal</h2>
                    <p className="text-gray-500 mb-6 text-sm">View reports, financials, and attendance.</p>
                    
                    <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentView('parent-dashboard'); }}>
                      <input type="text" placeholder="Learner ID / Email" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-school-green outline-none" required />
                      <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-school-green outline-none" required />
                      <button type="submit" className="w-full bg-school-green text-white font-bold py-2 rounded hover:bg-school-darkGreen transition-colors text-sm">
                        Log In
                      </button>
                    </form>
                 </div>

                 {/* Staff Portal Login (Teacher) */}
                 <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 flex flex-col items-center text-center">
                    <div className="bg-blue-50 p-4 rounded-full mb-6">
                      <Briefcase size={40} className="text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-school-darkGreen mb-2">Staff Portal</h2>
                    <p className="text-gray-500 mb-6 text-sm">Manage classes, marks, and attendance.</p>
                    
                    <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentView('staff-dashboard'); }}>
                      <input type="email" placeholder="Staff Email" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none" required />
                      <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 outline-none" required />
                      <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                        Log In
                      </button>
                    </form>
                 </div>

                 {/* Admin Portal Login */}
                 <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-school-yellow flex flex-col items-center text-center">
                    <div className="bg-yellow-50 p-4 rounded-full mb-6">
                      <Lock size={40} className="text-yellow-600" />
                    </div>
                    <h2 className="text-xl font-bold text-school-darkGreen mb-2">Administration</h2>
                    <p className="text-gray-500 mb-6 text-sm">Admissions, user management, and stats.</p>
                    
                    <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentView('admin-dashboard'); }}>
                      <input type="email" placeholder="Admin Email" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-school-yellow outline-none" required />
                      <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-school-yellow outline-none" required />
                      <button type="submit" className="w-full bg-school-yellow text-school-darkGreen font-bold py-2 rounded hover:bg-yellow-400 transition-colors text-sm">
                        Log In
                      </button>
                    </form>
                 </div>
               </div>
               
               <div className="mt-12 text-center text-gray-400 text-xs">
                 <p>For technical support, please contact helpdesk@tobiashainyeko.edu.na</p>
               </div>
             </div>
          </main>
        );

      case 'parent-dashboard':
        const student = mockStudent;
        return (
          <main className="bg-gray-100 min-h-screen pb-12">
            {/* Dashboard Header */}
             <div className="bg-school-darkGreen text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-2 rounded">
                        <User className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h1 className="text-lg font-bold">Parent Portal</h1>
                        <p className="text-xs text-green-200">Welcome, Mr. Amutenya</p>
                      </div>
                   </div>
                   <button 
                    onClick={() => setCurrentView('home')} 
                    className="text-sm text-green-200 hover:text-white flex items-center gap-1"
                   >
                     <LogOut size={16} /> Log Out
                   </button>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-4 py-8">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 
                 {/* Student Profile Card - Left Col */}
                 <div className="lg:col-span-1 space-y-6">
                   <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-school-green">
                     <div className="flex flex-col items-center text-center">
                       <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-3xl font-serif font-bold text-school-darkGreen">
                         TN
                       </div>
                       <h2 className="text-xl font-bold text-gray-900">{student.name}</h2>
                       <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mt-1 mb-4">Grade {student.grade}</span>
                       
                       <div className="w-full grid grid-cols-2 gap-4 mt-4 border-t pt-4">
                         <div className="text-center">
                           <span className="block text-2xl font-bold text-school-darkGreen">{student.attendance}%</span>
                           <span className="text-xs text-gray-500">Attendance</span>
                         </div>
                         <div className="text-center">
                           <span className="block text-2xl font-bold text-school-darkGreen">
                             {student.subjects.reduce((a, b) => a + b.mark, 0) / student.subjects.length > 0 ? Math.round(student.subjects.reduce((a, b) => a + b.mark, 0) / student.subjects.length) : 0}%
                           </span>
                           <span className="text-xs text-gray-500">Avg. Grade</span>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Financial Status */}
                   <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-school-yellow">
                     <div className="flex items-center gap-2 mb-4">
                       <Wallet className="text-school-yellow" />
                       <h3 className="font-bold text-gray-900">Financials</h3>
                     </div>
                     <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-4">
                        <p className="text-xs text-red-600 mb-1">Outstanding Balance</p>
                        <p className="text-2xl font-bold text-red-700">N$ {student.feesDue.toFixed(2)}</p>
                     </div>
                     <p className="text-xs text-gray-500 mb-4">Next payment due: <span className="font-bold text-gray-700">{student.nextPaymentDate}</span></p>
                     <button className="w-full py-2 bg-school-darkGreen text-white text-sm font-bold rounded hover:bg-green-800 transition">View Statement</button>
                   </div>
                 </div>

                 {/* Main Content - Right Col */}
                 <div className="lg:col-span-2 space-y-8">
                   
                   {/* Announcements / Messages */}
                   <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                     <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
                       <h3 className="font-bold text-gray-800 flex items-center gap-2"><Bell size={18} /> Notifications</h3>
                       <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{student.messages.length}</span>
                     </div>
                     <div className="divide-y">
                       {student.messages.map(msg => (
                         <div key={msg.id} className="p-4 hover:bg-gray-50 cursor-pointer transition">
                           <div className="flex justify-between mb-1">
                             <span className="font-bold text-sm text-school-darkGreen">{msg.from}</span>
                             <span className="text-xs text-gray-400">{msg.date}</span>
                           </div>
                           <p className="text-sm text-gray-600">{msg.subject}</p>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Academic Report */}
                   <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="px-6 py-4 border-b bg-gray-50">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2"><BookOpen size={18} /> Academic Report (Term 2)</h3>
                      </div>
                      <div className="p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                              <tr>
                                <th className="px-4 py-3">Subject</th>
                                <th className="px-4 py-3 text-center">Mark (%)</th>
                                <th className="px-4 py-3 text-center">Symbol</th>
                                <th className="px-4 py-3 text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {student.subjects.map((sub, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                  <td className="px-4 py-3 font-medium text-gray-900">{sub.name}</td>
                                  <td className="px-4 py-3 text-center">{sub.mark}</td>
                                  <td className="px-4 py-3 text-center font-bold text-school-darkGreen">{sub.symbol}</td>
                                  <td className="px-4 py-3 text-right">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${sub.mark >= 50 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                      {sub.mark >= 50 ? 'Pass' : 'Fail'}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-6 flex justify-end">
                           <button className="flex items-center text-sm font-bold text-school-green hover:text-school-darkGreen">
                             <Download size={16} className="mr-2" /> Download Full Report
                           </button>
                        </div>
                      </div>
                   </div>

                 </div>
               </div>
             </div>
          </main>
        );

      case 'staff-dashboard':
        return (
          <main className="bg-gray-100 min-h-screen">
             {/* Dashboard Header */}
             <div className="bg-blue-600 text-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded">
                        <Briefcase className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h1 className="text-xl font-bold">Staff Portal</h1>
                        <p className="text-xs text-blue-100">Mr. E. Shikongo (Mathematics Department)</p>
                      </div>
                   </div>
                   <button 
                    onClick={() => setCurrentView('home')} 
                    className="text-sm text-blue-100 hover:text-white flex items-center gap-1"
                   >
                     <LogOut size={16} /> Log Out
                   </button>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                   
                   {/* Sidebar / Quick Stats */}
                   <div className="md:col-span-1 space-y-6">
                     <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                       <p className="text-xs text-gray-500">Total Students</p>
                       <p className="text-2xl font-bold text-gray-800">128</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                       <p className="text-xs text-gray-500">Classes Today</p>
                       <p className="text-2xl font-bold text-gray-800">4</p>
                     </div>
                     
                     <div className="bg-white rounded-lg shadow-sm p-4">
                       <h3 className="font-bold text-gray-800 mb-3 text-sm">Quick Actions</h3>
                       <div className="space-y-2">
                         <button className="w-full text-left text-sm p-2 hover:bg-gray-50 rounded flex items-center text-gray-600">
                           <ClipboardList size={16} className="mr-2 text-blue-500" /> Mark Attendance
                         </button>
                         <button className="w-full text-left text-sm p-2 hover:bg-gray-50 rounded flex items-center text-gray-600">
                           <PenTool size={16} className="mr-2 text-blue-500" /> Input Term Marks
                         </button>
                         <button className="w-full text-left text-sm p-2 hover:bg-gray-50 rounded flex items-center text-gray-600">
                           <Bell size={16} className="mr-2 text-blue-500" /> Send Class Notice
                         </button>
                       </div>
                     </div>
                   </div>

                   {/* Main Content */}
                   <div className="md:col-span-3 space-y-6">
                      {/* Schedule */}
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
                           <h3 className="font-bold text-gray-800">My Classes</h3>
                           <span className="text-xs text-gray-500">Term 2, 2024</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b">
                           {mockTeacherClasses.map((cls) => (
                             <div key={cls.id} className="p-4 hover:bg-blue-50 cursor-pointer transition">
                                <div className="flex justify-between items-start mb-2">
                                   <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs">{cls.grade}</span>
                                   <Users size={16} className="text-gray-400" />
                                </div>
                                <h4 className="font-bold text-gray-800">{cls.subject}</h4>
                                <p className="text-xs text-gray-500 mt-1 flex items-center"><Clock size={12} className="mr-1" /> {cls.time}</p>
                                <p className="text-xs text-gray-500 mt-0.5 flex items-center"><MapPin size={12} className="mr-1" /> {cls.room}</p>
                             </div>
                           ))}
                        </div>
                      </div>

                      {/* Class List Table */}
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
                           <h3 className="font-bold text-gray-800">Grade 8A - Mathematics List</h3>
                           <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Export CSV</button>
                        </div>
                        <div className="overflow-x-auto">
                           <table className="w-full text-sm text-left">
                              <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                                 <tr>
                                    <th className="px-6 py-3">Student Name</th>
                                    <th className="px-6 py-3">Attendance</th>
                                    <th className="px-6 py-3">Current Mark</th>
                                    <th className="px-6 py-3 text-right">Action</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y">
                                 {mockClassStudents.map((st) => (
                                    <tr key={st.id} className="hover:bg-gray-50">
                                       <td className="px-6 py-3 font-medium text-gray-900">{st.name}</td>
                                       <td className="px-6 py-3">
                                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${st.attendance === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                             {st.attendance}
                                          </span>
                                       </td>
                                       <td className="px-6 py-3">
                                          <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[100px]">
                                             <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${st.mark}%` }}></div>
                                          </div>
                                          <span className="text-xs text-gray-500 mt-1 inline-block">{st.mark}%</span>
                                       </td>
                                       <td className="px-6 py-3 text-right">
                                          <button className="text-blue-600 hover:text-blue-800 text-xs font-bold">Edit</button>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </main>
        );

      case 'admin-dashboard':
        return (
          <main className="bg-gray-100 min-h-screen">
             {/* Dashboard Header */}
             <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="bg-school-yellow p-2 rounded">
                        <Lock className="text-school-darkGreen h-6 w-6" />
                      </div>
                      <h1 className="text-xl font-bold text-gray-800">Admin Portal <span className="text-gray-400 font-normal">| School Management</span></h1>
                   </div>
                   <button 
                    onClick={() => setCurrentView('home')} 
                    className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-1"
                   >
                     <LogOut size={16} /> Exit
                   </button>
                </div>
             </div>

             <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <p className="text-sm text-gray-500">Total Applications</p>
                    <p className="text-3xl font-bold text-gray-800">{applications.length}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <p className="text-sm text-gray-500">Pending Review</p>
                    <p className="text-3xl font-bold text-gray-800">{applications.filter(a => a.status === 'Pending').length}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <p className="text-sm text-gray-500">Accepted</p>
                    <p className="text-3xl font-bold text-gray-800">{applications.filter(a => a.status === 'Accepted').length}</p>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="font-bold text-gray-700">Admissions Management</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input type="text" placeholder="Search learner..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-school-green" />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Learner Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Contact</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docs</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {applications.map((app) => (
                          <tr key={app.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.learnerName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Grade {app.gradeApplying}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="text-gray-900">{app.parentName}</div>
                              <div className="text-xs">{app.phone}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex space-x-2">
                                {app.documents.birthCert && <span title="Birth Certificate"><FileText size={16} className="text-blue-500" /></span>}
                                {app.documents.reportCard && <span title="Report Card"><FileText size={16} className="text-green-500" /></span>}
                                {app.documents.parentID && <span title="Parent ID"><FileText size={16} className="text-purple-500" /></span>}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.submittedDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                  app.status === 'Accepted' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-bold cursor-pointer hover:underline">
                              Review
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {applications.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      No applications found.
                    </div>
                  )}
                </div>
             </div>
          </main>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Header only if not in dashboard view */}
      {!isDashboardView && <Header currentView={currentView} onNavigate={setCurrentView} />}
      
      {renderContent()}
      
      {!isDashboardView && <Footer onNavigate={setCurrentView} />}
      
      <SchoolChat />
    </div>
  );
}

export default App;