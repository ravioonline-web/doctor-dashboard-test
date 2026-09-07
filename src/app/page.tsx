import React from 'react';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  AlertCircle, 
  Users,
  Activity,
  ChevronRight,
  Bell,
  Search,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-slate-800 tracking-tight">MediCare Clinic</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 bg-slate-50"
                />
              </div>
              <button className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                <span className="text-sm font-medium text-blue-700">DR</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Good morning, Dr. Smith</h1>
            <p className="text-slate-500 mt-1 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            + New Appointment
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Revenue Metric */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-slate-500">Today's Revenue</h3>
              <div className="p-2 bg-green-50 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-slate-900">$4,250</span>
              <span className="ml-2 text-sm font-medium text-green-600">+12%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Expected billing: $5,100</p>
          </div>

          {/* Patients Metric */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-slate-500">Patients Seen</h3>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-slate-900">14</span>
              <span className="text-lg text-slate-500 ml-1">/ 28</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">4 remaining before lunch</p>
          </div>

          {/* Wait Time Metric */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-slate-500">Avg Wait Time</h3>
              <div className="p-2 bg-orange-50 rounded-lg">
                <Clock className="h-5 w-5 text-orange-500" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-slate-900">12</span>
              <span className="ml-1 text-sm font-medium text-slate-500">min</span>
            </div>
            <p className="text-xs text-orange-500 font-medium mt-1">↑ 2 min from average</p>
          </div>

          {/* Critical Alerts Metric */}
          <div className="bg-red-50 rounded-xl shadow-sm border border-red-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-red-800">Critical Alerts</h3>
              <div className="p-2 bg-red-100 rounded-lg text-red-600 animate-pulse">
                <AlertCircle className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-red-700">3</span>
            </div>
            <p className="text-xs text-red-600 mt-1 font-medium">Requires immediate attention</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - Appointments (Takes up 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Today's Appointments */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-800 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Today's Appointments
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View Full Schedule
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { time: '09:00 AM', name: 'Sarah Jenkins', type: 'Annual Checkup', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700 border-blue-200' },
                  { time: '09:30 AM', name: 'Michael Chen', type: 'Follow-up', status: 'Waiting (5m)', statusColor: 'bg-orange-100 text-orange-700 border-orange-200' },
                  { time: '10:00 AM', name: 'Emily Rodriguez', type: 'Consultation', status: 'Checked In', statusColor: 'bg-green-100 text-green-700 border-green-200' },
                  { time: '10:45 AM', name: 'Robert Taylor', type: 'Lab Results', status: 'Scheduled', statusColor: 'bg-slate-100 text-slate-700 border-slate-200' },
                  { time: '11:15 AM', name: 'Jessica Wong', type: 'Vaccination', status: 'Scheduled', statusColor: 'bg-slate-100 text-slate-700 border-slate-200' }
                ].map((apt, idx) => (
                  <div key={idx} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 text-sm font-semibold text-slate-600">
                        {apt.time}
                      </div>
                      <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold uppercase">
                        {apt.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{apt.name}</p>
                        <p className="text-xs text-slate-500 flex items-center mt-0.5">
                          <Activity className="h-3 w-3 mr-1" />
                          {apt.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${apt.statusColor}`}>
                        {apt.status}
                      </span>
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar - Alerts and Wait List */}
          <div className="space-y-8">
            
            {/* Critical Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-red-100 bg-red-50 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                <h2 className="text-base font-bold text-red-900">Critical Alerts</h2>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900">Abnormal Lab Results</p>
                    <p className="text-xs text-slate-600 mt-1">David Miller's blood panel shows critically high glucose levels.</p>
                    <button className="text-xs text-red-600 font-medium mt-2 hover:underline">Review Results</button>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900">Missed Appointment</p>
                    <p className="text-xs text-slate-600 mt-1">Patient 'Elena Rostova' missed 3 consecutive follow-ups.</p>
                    <button className="text-xs text-orange-600 font-medium mt-2 hover:underline">Contact Patient</button>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900">Prescription Renewal</p>
                    <p className="text-xs text-slate-600 mt-1">5 pending refill requests require your signature today.</p>
                    <button className="text-xs text-blue-600 font-medium mt-2 hover:underline">View Requests</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Patient Queue */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                <h2 className="text-base font-bold text-slate-800 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-slate-500" />
                  Live Queue
                </h2>
                <span className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded-full">3 Waiting</span>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-slate-100">
                  <li className="p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Michael Chen</p>
                      <p className="text-xs text-slate-500">Room 1 • Follow-up</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-orange-600">5 min</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Waiting</p>
                    </div>
                  </li>
                  <li className="p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Emily Rodriguez</p>
                      <p className="text-xs text-slate-500">Lobby • Consultation</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-600">2 min</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">Waiting</p>
                    </div>
                  </li>
                  <li className="p-4 flex justify-between items-center bg-slate-50/50">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Sarah Jenkins</p>
                      <p className="text-xs text-slate-500">Room 3 • Annual</p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mb-0.5" />
                      <p className="text-[10px] text-green-600 font-medium uppercase tracking-wider">With Doctor</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
