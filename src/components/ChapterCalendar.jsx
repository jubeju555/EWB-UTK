import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Calendar from 'react-calendar'
import { ChevronDown, Calendar as CalendarIcon, Download } from 'lucide-react'
import 'react-calendar/dist/Calendar.css'

const ChapterCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCalendarDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Utility function to format date for calendar URLs
  const formatDateForCalendar = (date, time) => {
    const eventDate = new Date(date)
    const [timeStr, ampm] = time.split(' ')
    const [hours, minutes] = timeStr.split(':')
    let hour24 = parseInt(hours)
    
    if (ampm === 'PM' && hour24 !== 12) hour24 += 12
    if (ampm === 'AM' && hour24 === 12) hour24 = 0
    
    eventDate.setHours(hour24, parseInt(minutes), 0, 0)
    
    // Format as YYYYMMDDTHHMMSSZ
    return eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  // Generate calendar links for different providers
  const generateCalendarLinks = (event) => {
    const startTime = formatDateForCalendar(event.date, event.time)
    const endDate = new Date(event.date)
    const [timeStr, ampm] = event.time.split(' ')
    const [hours, minutes] = timeStr.split(':')
    let hour24 = parseInt(hours)
    
    if (ampm === 'PM' && hour24 !== 12) hour24 += 12
    if (ampm === 'AM' && hour24 === 12) hour24 = 0
    
    endDate.setHours(hour24 + 1, parseInt(minutes), 0, 0) // 1 hour duration
    const endTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const title = encodeURIComponent(event.title)
    const description = encodeURIComponent(event.description || `${event.title} - Engineers Without Borders UTK Chapter`)
    const location = encodeURIComponent(event.location)
    
    return {
      google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}&location=${location}`,
      outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startTime}&enddt=${endTime}&body=${description}&location=${location}`,
      office365: `https://outlook.office.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startTime}&enddt=${endTime}&body=${description}&location=${location}`,
      yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${title}&st=${startTime}&et=${endTime}&desc=${description}&in_loc=${location}`
    }
  }

  // Generate ICS file content
  const generateICSFile = (event) => {
    const startTime = formatDateForCalendar(event.date, event.time)
    const endDate = new Date(event.date)
    const [timeStr, ampm] = event.time.split(' ')
    const [hours, minutes] = timeStr.split(':')
    let hour24 = parseInt(hours)
    
    if (ampm === 'PM' && hour24 !== 12) hour24 += 12
    if (ampm === 'AM' && hour24 === 12) hour24 = 0
    
    endDate.setHours(hour24 + 1, parseInt(minutes), 0, 0)
    const endTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Engineers Without Borders UTK//Event//EN
BEGIN:VEVENT
UID:${Date.now()}@ewb-utk.org
DTSTART:${startTime}
DTEND:${endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description || `${event.title} - Engineers Without Borders UTK Chapter`}
LOCATION:${event.location}
ORGANIZER:CN=Engineers Without Borders UTK:MAILTO:ewb@utk.edu
END:VEVENT
END:VCALENDAR`
    
    return icsContent
  }

  // Download ICS file
  const downloadICSFile = (event) => {
    const icsContent = generateICSFile(event)
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowCalendarDropdown(false)
  }

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
              
              {/* Add to Calendar Section */}
              <div className="mt-6 relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-utk-orange to-utk-orange-dark text-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <CalendarIcon size={18} />
                  <span className="font-medium">Add to Calendar</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${showCalendarDropdown ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {showCalendarDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-2xl z-50 overflow-hidden max-h-80 overflow-y-auto"
                      style={{
                        maxHeight: 'min(20rem, calc(100vh - 200px))'
                      }}
                    >
                      {(() => {
                        const links = generateCalendarLinks(selectedEvent)
                        return (
                          <div className="py-2">
                            <a
                              href={links.google}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-utk-orange"
                              onClick={() => setShowCalendarDropdown(false)}
                            >
                              <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                              <span className="font-medium">Google Calendar</span>
                            </a>
                            
                            <a
                              href={links.outlook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-utk-orange"
                              onClick={() => setShowCalendarDropdown(false)}
                            >
                              <div className="w-5 h-5 bg-blue-600 rounded"></div>
                              <span className="font-medium">Outlook.com</span>
                            </a>
                            
                            <a
                              href={links.office365}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-utk-orange"
                              onClick={() => setShowCalendarDropdown(false)}
                            >
                              <div className="w-5 h-5 bg-blue-700 rounded"></div>
                              <span className="font-medium">Office 365</span>
                            </a>
                            
                            <a
                              href={links.yahoo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-utk-orange"
                              onClick={() => setShowCalendarDropdown(false)}
                            >
                              <div className="w-5 h-5 bg-purple-600 rounded"></div>
                              <span className="font-medium">Yahoo Calendar</span>
                            </a>
                            
                            <div className="border-t border-gray-100 mt-1 pt-1">
                              <button
                                onClick={() => downloadICSFile(selectedEvent)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-gray-700 hover:text-utk-orange w-full text-left"
                              >
                                <Download size={20} className="text-gray-500" />
                                <span className="font-medium">Download .ics file</span>
                                <span className="text-xs text-gray-500 ml-auto">(Apple Calendar, etc.)</span>
                              </button>
                            </div>
                          </div>
                        )
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChapterCalendar
