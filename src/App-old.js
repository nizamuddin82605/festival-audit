import React, { useState } from 'react';
import { 
  User, 
  BarChart2, 
  PieChart, 
  List, 
  LogOut, 
  Plus, 
  Filter, 
  MapPin 
} from 'lucide-react';

// Mock data for demonstrations
const FESTIVAL_TYPES = [
  'Diwali', 'Holi', 'Ganesh Chaturthi', 
  'Durga Puja', 'Navratri', 'Christmas'
];

const ENVIRONMENTAL_PARAMS = [
  'Food Wastage',
  'Air Pollution', 
  'Sound Pollution', 
  'Water Wastage',
  'Plastic Usage',
  'Energy Consumption'
];

// Login Screen
const LoginScreen = ({ onLogin }) => (
  <div className="h-screen flex flex-col justify-center p-6 bg-gradient-to-b from-blue-100 to-blue-300">
    <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
      Festival Audit
    </h1>
    <input 
      type="email" 
      placeholder="Email" 
      className="input mb-4 p-3 border rounded-lg"
    />
    <input 
      type="password" 
      placeholder="Password" 
      className="input mb-6 p-3 border rounded-lg"
    />
    <button 
      onClick={onLogin}
      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
    >
      Login
    </button>
  </div>
);

// Profile Screen
const ProfileScreen = () => (
  <div className="p-6">
    <div className="flex items-center mb-6">
      <img 
        src="/api/placeholder/100/100" 
        alt="Profile" 
        className="w-20 h-20 rounded-full mr-4"
      />
      <div>
        <h2 className="text-2xl font-bold">Rajesh Kumar</h2>
        <p className="text-gray-600">Environmental Enthusiast</p>
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-semibold mb-3">Audit Stats</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-3 rounded-md">
          <p className="text-sm text-gray-600">Total Audits</p>
          <p className="text-xl font-bold">24</p>
        </div>
        <div className="bg-white p-3 rounded-md">
          <p className="text-sm text-gray-600">Impact Score</p>
          <p className="text-xl font-bold">78/100</p>
        </div>
      </div>
    </div>
  </div>
);

// Dashboard Screen with Visualization
const DashboardScreen = () => {
  const [selectedFestival, setSelectedFestival] = useState(null);
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button className="p-2 bg-gray-200 rounded-full">
          <Filter size={20} />
        </button>
      </div>
      
      {/* Festival Selection */}
      <div className="overflow-x-auto mb-4">
        <div className="flex space-x-3">
          {FESTIVAL_TYPES.map(festival => (
            <button 
              key={festival}
              onClick={() => setSelectedFestival(festival)}
              className={`px-4 py-2 rounded-full ${
                selectedFestival === festival 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200'
              }`}
            >
              {festival}
            </button>
          ))}
        </div>
      </div>
      
      {/* Environmental Impact Donut Chart */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-3">Environmental Impact</h3>
        <div className="flex justify-center">
          <PieChart size={150} className="text-blue-600" />
        </div>
      </div>
      
      {/* Parameter Insights */}
      <div>
        <h3 className="font-semibold mb-3">Parameter Insights</h3>
        {ENVIRONMENTAL_PARAMS.map(param => (
          <div key={param} className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>{param}</span>
              <span>65%</span>
            </div>
            <div className="bg-gray-300 rounded-full h-2">
              <div 
                className="bg-blue-600 rounded-full h-2" 
                style={{width: '65%'}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add Audit Screen
const AddAuditScreen = () => {
  const [selectedFestival, setSelectedFestival] = useState(null);
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Audit</h2>
      
      {/* Festival Selection */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Select Festival</label>
        <div className="grid grid-cols-3 gap-2">
          {FESTIVAL_TYPES.map(festival => (
            <button 
              key={festival}
              onClick={() => setSelectedFestival(festival)}
              className={`p-2 rounded-lg ${
                selectedFestival === festival 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200'
              }`}
            >
              {festival}
            </button>
          ))}
        </div>
      </div>
      
      {/* Environmental Parameters */}
      <div>
        <h3 className="font-semibold mb-3">Environmental Parameters</h3>
        {ENVIRONMENTAL_PARAMS.map(param => (
          <div key={param} className="mb-3">
            <label className="block mb-1">{param}</label>
            <input 
              type="number" 
              placeholder={`Enter ${param} value`}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        ))}
        
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4">
          Submit Audit
        </button>
      </div>
    </div>
  );
};

// My Audits Screen
const MyAuditsScreen = () => {
  const audits = [
    { id: 1, festival: 'Diwali', date: '2023-11-12', score: 82 },
    { id: 2, festival: 'Holi', date: '2023-03-08', score: 75 },
    { id: 3, festival: 'Ganesh Chaturthi', date: '2023-09-19', score: 68 }
  ];
  
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Audits</h2>
      
      {audits.map(audit => (
        <div 
          key={audit.id} 
          className="bg-gray-100 p-4 rounded-lg mb-3 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{audit.festival}</h3>
            <p className="text-sm text-gray-600">{audit.date}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-blue-600">{audit.score}%</p>
            <p className="text-xs text-gray-500">Impact Score</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Bottom Navigation
const BottomNavigation = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { icon: BarChart2, screen: 'dashboard' },
    { icon: Plus, screen: 'add-audit' },
    { icon: List, screen: 'my-audits' },
    { icon: User, screen: 'profile' }
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around">
      {navItems.map(({ icon: Icon, screen }) => (
        <button 
          key={screen}
          onClick={() => setActiveScreen(screen)}
          className={`p-2 rounded-full ${
            activeScreen === screen ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
          }`}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

// Main App Component
const FestivalAuditApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('dashboard');

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white relative">
      {activeScreen === 'dashboard' && <DashboardScreen />}
      {activeScreen === 'profile' && <ProfileScreen />}
      {activeScreen === 'add-audit' && <AddAuditScreen />}
      {activeScreen === 'my-audits' && <MyAuditsScreen />}
      
      <BottomNavigation 
        activeScreen={activeScreen} 
        setActiveScreen={setActiveScreen} 
      />
      
      <button 
        className="absolute top-4 right-4 text-gray-600"
        onClick={() => setIsLoggedIn(false)}
      >
        <LogOut size={24} />
      </button>
    </div>
  );
};

export default FestivalAuditApp;