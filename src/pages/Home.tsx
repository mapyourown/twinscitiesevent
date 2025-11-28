import {Icon, Music, MapPin, Binoculars } from "lucide-react";
import { soccerBall } from '@lucide/lab';
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <div>
          <section className="bg-gray-100 py-16 mt-4" >
              <div className="max-w-6xl mx-auto px-4 mb-8">
                  <h2 className="text-4xl font-bold text-center mb-2 text-red-800">
                  Your Hand-Picked Guide to Twin Cities
                  </h2>
                  <h2 className="text-3xl font-bold text-center mb-10 text-red-800">
                  Celebrate Sports, Music, and Community Energy.
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-2 text-center">
                  {/* SPORTS */}
                  <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
                      <h3 className="text-2xl font-semibold mb-4 text-blue-600">SPORTS</h3>
                      <a href="/sports">
                        <Icon iconNode={soccerBall} className="mx-auto w-16 h-16 text-blue-500" />
                      </a>
                      <p className="mt-4 text-gray-600">
                      Experience thrilling matches and local tournaments across the city.
                      </p>
                  </div>

                  {/* MUSIC */}
                  <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
                      <h3 className="text-2xl font-semibold mb-4 text-green-600">MUSIC</h3>
                      <a href="/music">
                         <Music className="mx-auto w-16 h-16 text-green-500" />
                      </a>
                      <p className="mt-4 text-gray-600">
                      Enjoy live performances and open-air concerts every night.
                      </p>
                  </div>

                  {/* ATTRACTION */}
                  <div className="bg-white rounded-2xl shadow-md p-8  hover:shadow-lg transition">
                      <h3 className="text-2xl font-semibold mb-4 text-red-600">ATTRACTION</h3>
                      <a href="/attractions">
                        <MapPin className="mx-auto w-16 h-16 text-red-500" />
                      </a>
                      <p className="mt-4 text-gray-600">
                      Discover iconic landmarks and cultural hotspots of the Twin Cities.
                      </p>
                  </div>
                  {/* ATTRACTION */}
                  <div className="bg-white rounded-2xl shadow-md p-8  hover:shadow-lg transition">
                      <h3 className="text-2xl font-semibold mb-4 text-red-600">GUIDED TOUR</h3>
                      <a href="/guidedtour">
                        <Binoculars className="mx-auto w-16 h-16 text-red-500" />
                      </a>
                      <p className="mt-4 text-gray-600">
                      Uncover the Twin Cities’ top attractions and local favorites in one unforgettable journey.
                      </p>
                  </div>
                </div>
              </div>
              <div>
                  <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                      Explore Event Week
                  </h2>
              </div>
          
          <div className="flex flex-col items-center justify-center mt-8 space-y-4">
        {/* Date */}
        <h3 className="text-3xl font-bold text-white bg-red-600 px-6 py-2 rounded-lg shadow-md tracking-wide">
              JULY 17–23
          </h3>

        {/* Button */}
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition">
        <a href="/eventschedule">View Schedule</a>
        </button>
      </div>
      </section>
      <Footer />
    </div>
  );
}