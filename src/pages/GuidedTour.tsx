import { useEventStore } from '../store/eventStore';
import Footer from '../components/Footer';

export default function GuidedTour() {

const { activityies } = useEventStore();


return (
    <div>
    <div className="container mx-auto px-4 py-12 mt-6 ">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Explore the Twin Cities
        </h1>

        <section className="mb-16">
            <h2 className="text-2xl font-semibold text-red-600 mb-6 border-b border-gray-300 pb-2">
                Guided Tour
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {activityies.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                            <div className="mt-4 text-sm text-gray-700 space-y-1">
                                <p>
                                    📍 <span className="font-medium">{item.location}</span>
                                </p>
                                <p>
                                    🕒 <span className="font-medium">{item.meetingpoint}</span>
                                </p>
                                <p>
                                    🕒 <span className="font-medium">{item.whattoexpect}</span>
                                </p>
                                <p>
                                    🕒 <span className="font-medium">{item.bring}</span>
                                </p>
                    
                                <p>
                                    🕒 <span className="font-medium">{item.hours}</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="text-lg font-bold">${item.price}</div>
                <div className="text-sm text-gray-600">per person</div>

                <button
                className="mt-4 w-full bg-green-600 text-white py-2 full hover:bg-green-700"
                >
                <a href="booktour">Book Tour </a>
                </button>
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