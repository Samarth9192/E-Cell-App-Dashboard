import React from 'react'
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar
  } from 'recharts';
  
  const data = [
      { name: 'Jan', Visit_Track: 400, Music: 240 },
      { name: 'Feb', Visit_Track: 300, Music: 139 },
      { name: 'Mar', Visit_Track: 200, Music: 980 },
      { name: 'Apr', Visit_Track: 278, Music: 390 },
      { name: 'May', Visit_Track: 189, Music: 480 },
      { name: 'Jun', Visit_Track: 239, Music: 380 },
    ];

function Charts() {
      
  return (
    <>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Visit Track</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#F3F4F6'
                }}
              />
              <Line type="monotone" dataKey="Visit_Track" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Music Played</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#F3F4F6'
                }}
              />
              <Bar dataKey="Music" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

  </>
  )
}

export default Charts