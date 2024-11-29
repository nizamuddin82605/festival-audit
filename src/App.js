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
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// Dummy data for visualizations
const FOOD_WASTAGE_DATA = [
  { area: 'Commercial Events', amount: 45 },
  { area: 'Wedding Halls', amount: 35 },
  { area: 'Restaurants', amount: 55 },
  { area: 'Catering Services', amount: 40 },
  { area: 'Festivals', amount: 50 }
];

const FOOD_WASTAGE_ORPHANAGES = {
  'Commercial Events': [
    { name: 'Hope Foundation', phone: '9876543210', pincode: '560001' },
    { name: 'Child Care Trust', phone: '8765432109', pincode: '560002' }
  ],
  'Wedding Halls': [
    { name: 'Smile Orphanage', phone: '7654321098', pincode: '560003' },
    { name: 'Helping Hands', phone: '6543210987', pincode: '560004' },
    { name: 'Friends Being Heling Hand', phone: '234567901', pincode: '560004' },
    { name: 'Being Human', phone: '3456791203', pincode: '560004' },
    
  ]
};

const ENVIRONMENTAL_IMPACT_DATA = [
  { name: 'Food Wastage', value: 30 },
  { name: 'Water Wastage', value: 25 },
  { name: 'Plastic Usage', value: 20 },
  { name: 'Energy Consumption', value: 15 },
  { name: 'Air Pollution', value: 10 }
];

const RADAR_DATA = [
  { subject: 'Energy', A: 120, B: 110, fullMark: 150 },
  { subject: 'Water', A: 98, B: 130, fullMark: 150 },
  { subject: 'Waste', A: 86, B: 130, fullMark: 150 },
  { subject: 'Pollution', A: 99, B: 100, fullMark: 150 },
  { subject: 'Carbon', A: 85, B: 90, fullMark: 150 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

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

// Enhanced Dashboard Screen
const DashboardScreen = () => {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [foodWastageFocus, setFoodWastageFocus] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  const handleFoodWastageClick = () => {
    setFoodWastageFocus(true);
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  const handleBackToDashboard = () => {
    setFoodWastageFocus(false);
    setSelectedArea(null);
  };

  // Food Wastage Details Screen
  if (foodWastageFocus && !selectedArea) {
    return (
      <div className="p-4">
        <button 
          onClick={handleBackToDashboard} 
          className="mb-4 text-blue-600 flex items-center"
        >
          ← Back to Dashboard
        </button>
        <h2 className="text-2xl font-bold mb-4">Food Wastage Details (Gachibowli)</h2>
        {FOOD_WASTAGE_DATA.map(item => (
          <div 
            key={item.area} 
            onClick={() => handleAreaClick(item.area)}
            className="bg-gray-100 p-4 rounded-lg mb-3 flex justify-between items-center cursor-pointer"
          >
            <div>
              <h3 className="font-semibold">{item.area}</h3>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">{item.amount}%</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Orphanages Screen
  if (foodWastageFocus && selectedArea) {
    return (
      <div className="p-4">
        <button 
          onClick={() => setSelectedArea(null)} 
          className="mb-4 text-blue-600 flex items-center"
        >
          ← Back to Food Wastage
        </button>
        <h2 className="text-2xl font-bold mb-4">Redirect Food to Needy</h2>
        {FOOD_WASTAGE_ORPHANAGES[selectedArea].map((org, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-4 rounded-lg mb-3"
          >
            <h3 className="font-semibold">{org.name}</h3>
            <p className="text-sm text-gray-600">Phone: {org.phone}</p>
            <p className="text-sm text-gray-600">Pincode: {org.pincode}</p>
          </div>
        ))}
      </div>
    );
  }

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
          {['Diwali', 'Holi', 'Ganesh Chaturthi', 'Durga Puja', 'Navratri', 'Christmas'].map(festival => (
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
      
      {/* Animated Bar Chart for Food Wastage */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-3">Food Wastage Insights</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={FOOD_WASTAGE_DATA}>
            <XAxis dataKey="area" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="amount" 
              fill="#8884d8" 
              animationDuration={1000}
              animationBegin={0}
            />
          </BarChart>
        </ResponsiveContainer>
        <button 
          onClick={handleFoodWastageClick}
          className="mt-2 text-blue-600 underline"
        >
          View Detailed Food Wastage Breakdown
        </button>
      </div>
      
      {/* Animated Colorful Donut Chart for Environmental Impact */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-3">Environmental Impact</h3>
        <ResponsiveContainer width="100%" height={250}>
          <RechartsPieChart>
            <Pie
              data={ENVIRONMENTAL_IMPACT_DATA}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationDuration={1000}
              animationBegin={0}
            >
              {ENVIRONMENTAL_IMPACT_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Animated Radar Chart */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Sustainability Metrics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart data={RADAR_DATA}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar 
              name="Planned" 
              dataKey="A" 
              stroke="#8884d8" 
              fill="#8884d8" 
              fillOpacity={0.6}
              animationDuration={1000}
              animationBegin={0}
            />
            <Radar 
              name="Actual" 
              dataKey="B" 
              stroke="#82ca9d" 
              fill="#82ca9d" 
              fillOpacity={0.6}
              animationDuration={1000}
              animationBegin={0}
            />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// (Rest of the code remains the same as in the original App.js)
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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