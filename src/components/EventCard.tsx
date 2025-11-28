import type { Event } from '../store/eventStore';


export default function EventCard({ event }: { event: Event }) {
return (
<div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
<h3 className="text-lg font-bold text-blue-700">{event.id}</h3>
<p className="text-gray-700 text-sm">{event.description}</p>
<p className="text-xs text-gray-500 mt-2">{event.date}</p>
</div>
);
}