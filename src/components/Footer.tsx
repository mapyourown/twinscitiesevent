import { Facebook, Twitter, Instagram } from "lucide-react";
export default function Foote() {
    return (
    <footer
        className="relative bg-cover bg-center text-white"
        style={{
        backgroundImage:
            "url('/images/twincities.jpg?auto=format&fit=crop&w=1600&q=80')",
        }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-wide">TWIN CITIES EVENT WEEK</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
            Celebrate an unforgettable week of sports, music, and culture in the heart of the Twin Cities.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
            <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
            <Facebook className="w-6 h-6" />
            </a>
            <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
            <Twitter className="w-6 h-6" />
            </a>
            <a
            href="#"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
            <Instagram className="w-6 h-6" />
            </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Twin Cities Event Week. All rights reserved.
        </div>
        </div>
    </footer>   
    );
}