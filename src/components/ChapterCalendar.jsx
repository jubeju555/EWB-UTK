import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const ChapterCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Sample events data - in production, this could come from a JSON file or CMS
  const events = [
    {
      date: new Date(2025, 7, 6), // August 6, 2025 (Tuesday)
      title: "Weekly Chapter Meeting",
      time: "7:00 PM",
      location: "Engineering Building, Room 205",
      type: "meeting",
      description: "Regular chapter meeting to discuss ongoing projects and upcoming opportunities."
    },
    {
      date: new Date(2025, 7, 13), // August 13, 2025
      title: "Weekly Chapter Meeting",
      time: "7:00 PM",
      location: "Engineering Building, Room 205",
      type: "meeting"
    },
    {
      date: new Date(2025, 7, 20), // August 20, 2025
      title: "Weekly Chapter Meeting",
      time: "7:00 PM",
      location: "Engineering Building, Room 205",
      type: "meeting"
    },
    {
      date: new Date(2025, 7, 27), // August 27, 2025
      title: "Weekly Chapter Meeting",
      time: "7:00 PM",
      location: "Engineering Building, Room 205",
      type: "meeting"
    },
    {
      date: new Date(2025, 7, 15), // August 15, 2025
      title: "Project Planning Workshop",
      time: "6:00 PM",
      location: "Engineering Building, Room 301",
      type: "workshop",
      description: "Collaborative session to plan our first community impact project."
    },
    {
      date: new Date(2025, 7, 22), // August 22, 2025
      title: "Fundraising Brainstorm",
      time: "6:30 PM",
      location: "Student Union, Room B12",
      type: "workshop",
      description: "Brainstorming session for fundraising strategies and grant opportunities."
    },
    {
      date: new Date(2025, 8, 5), // September 5, 2025
      title: "Community Outreach Fair",
      time: "10:00 AM",
      location: "Pedestrian Walkway",
      type: "event",
      description: "Information booth at the campus community involvement fair."
    }
  ]

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    )
  }

  const hasEvents = (date) => {
    return getEventsForDate(date).length > 0
  }

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting': return 'bg-ewb-blue'
      case 'workshop': return 'bg-utk-orange'
      case 'event': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const handleDateClick = (date) => {
    const dayEvents = getEventsForDate(date)
    if (dayEvents.length > 0) {
      setSelectedEvent(dayEvents[0])
      setShowModal(true)
    }
    setDate(date)
  }

  const tileContent = ({ date, view }) => {
    if (view === 'month' && hasEvents(date)) {
      const dayEvents = getEventsForDate(date)
      return (
        <div className="flex justify-center mt-1">
          <div className={`w-2 h-2 rounded-full ${getEventTypeColor(dayEvents[0].type)}`} />
        </div>
      )
    }
    return null
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && hasEvents(date)) {
      return 'has-events'
    }
    return null
  }

  return (
    <div className="w-full">
      <style jsx>{`
        .react-calendar {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 20px;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          width: 100%;
          max-width: none;
        }
        
        .react-calendar__navigation {
          margin-bottom: 16px;
        }
        
        .react-calendar__navigation button {
          background: transparent;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        
        .react-calendar__navigation button:hover {
          background: rgba(232, 119, 34, 0.1);
          color: #e87722;
        }
        
        .react-calendar__month-view__weekdays {
          font-weight: 600;
          font-size: 14px;
          color: #6b7280;
        }
        
        .react-calendar__month-view__weekdays__weekday {
          padding: 8px;
          text-align: center;
        }
        
        .react-calendar__tile {
          background: transparent;
          border: none;
          padding: 12px 8px;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.2s;
          position: relative;
        }
        
        .react-calendar__tile:hover {
          background: rgba(0, 119, 200, 0.1);
          transform: scale(1.05);
        }
        
        .react-calendar__tile--active {
          background: #0077C8 !important;
          color: white;
        }
        
        .react-calendar__tile--now {
          background: rgba(232, 119, 34, 0.1);
          color: #e87722;
          font-weight: 600;
        }
        
        .react-calendar__tile.has-events {
          font-weight: 600;
          color: #0077C8;
        }
        
        .react-calendar__tile.has-events:hover {
          background: rgba(0, 119, 200, 0.2);
          cursor: pointer;
        }
      `}</style>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          📅 Chapter Calendar
        </h3>
        <p className="text-gray-600">
          Click on highlighted dates to see event details
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
          tileContent={tileContent}
          tileClassName={tileClassName}
          showNavigation={true}
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
        />
        
        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ewb-blue"></div>
            <span>Meetings</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-utk-orange"></div>
            <span>Workshops</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Events</span>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {showModal && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-heading font-bold text-gray-900">
                  {selectedEvent.title}
                </h4>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-ewb-blue">📅</span>
                  <span>{selectedEvent.date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-ewb-blue">🕐</span>
                  <span>{selectedEvent.time}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-ewb-blue">📍</span>
                  <span>{selectedEvent.location}</span>
                </div>
                
                {selectedEvent.description && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn-secondary flex-1 text-sm"
                >
                  Got it!
                </button>
                <a
                  href="mailto:ewb@utk.edu?subject=Question about upcoming event"
                  className="btn-primary flex-1 text-sm text-center"
                >
                  Ask Question
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChapterCalendar
