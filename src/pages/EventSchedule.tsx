import { useState } from "react";
type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

type ScheduleEvent = {
  time: string;
  title: string;
  location?: string;
  description?: string;
};

const days: DayKey[] = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// typed schedule: Record<DayKey, ScheduleEvent[]>
const sampleSchedule: Record<DayKey, ScheduleEvent[]> = {
  Mon: [
    { time: "9:00 AM", title: "Opening Ceremony", location: "Target Field" },
    { time: "1:00 PM", title: "Soccer Match", location: "US Bank Stadium" },
  ],
  Tue: [
    { time: "10:00 AM", title: "City Running Tour", location: "Bde Maka Ska" },
    { time: "6:00 PM", title: "Live Music Night", location: "Downtown Minneapolis" },
  ],
  Wed: [
    { time: "8:00 AM", title: "Morning Workout", location: "Gold Medal Park" },
    { time: "2:00 PM", title: "Basketball Showcase", location: "Target Center" },
  ],
  Thu: [
    { time: "9:30 AM", title: "Community Tennis", location: "Local Courts" },
    { time: "7:00 PM", title: "Indie Music Night", location: "Warehouse District" },
  ],
  Fri: [
    { time: "11:00 AM", title: "Family Fun Run", location: "Lake Harriet" },
    { time: "7:30 PM", title: "Outdoor Concert", location: "Lakeside Stage" },
  ],
  Sat: [
    { time: "10:00 AM", title: "Kids Soccer Clinic", location: "Community Field" },
    { time: "4:00 PM", title: "Street Food Market", location: "Nicollet Mall" },
  ],
  Sun: [
    { time: "9:00 AM", title: "Farewell Brunch", location: "Downtown Plaza" },
    { time: "2:00 PM", title: "Charity Match", location: "Stadium B" },
  ],
};

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState<DayKey>("Mon");

  return (
    <div className="max-w-5xl mx-auto p-16 mb-4">
      {/* Horizontal Tabs */}
      <div className="flex gap-2 overflow-x-auto border-b pb-3 mb-6 p-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition 
              ${activeDay === day 
                ? "bg-blue-600 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Vertical Timeline */}
      <div className="border-l pl-6 relative">
        {sampleSchedule[activeDay].map((event, idx) => (
          <div key={idx} className="mb-10 relative">
            {/* Time Indicator */}
            <div className="absolute -left-6 top-1 w-3 h-3 bg-blue-600 rounded-full"></div>
            <p className="text-sm font-semibold text-gray-700">{event.time}</p>
            <h3 className="text-lg font-bold mt-1">{event.title}</h3>
            {event.location && <p className="text-sm text-gray-500">{event.location}</p>}
            {event.description && <p className="text-sm text-gray-600 mt-1">{event.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}