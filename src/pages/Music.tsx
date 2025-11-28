import { useEventStore } from '../store/eventStore';
import Footer from '../components/Footer';


export default function Music() {
const { events } = useEventStore();
const musicEvents = events.filter(e => e.category === 'music');


return (
    <div>
    <div className="container mx-auto px-4 py-12 mt-6 ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Explore the Twin Cities
      </h1>

    <section className="mb-16">
        <h2 className="text-2xl font-semibold text-red-600 mb-6 border-b border-gray-300 pb-2">
            Music Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicEvents.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        <div className="mt-4 text-sm text-gray-700 space-y-1">
                            <p>
                                📍 <span className="font-medium">{item.location}</span>
                            </p>
                            <p>
                                📞 <span className="font-medium">{item.phone}</span>
                            </p>
                            <p>
                                🕒 <span className="font-medium">{item.hours}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </div>
    <Footer />
    </div>
);  
}


