import { create } from "zustand";

// Existing Event model
export interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    category: "sport" | "music";
    description: string;
    image: string;
    phone?: string;
    hours?: string;
  }

  export interface Activity {
    id: string;
    title: string; 
    tagline: string;
    duration: string;
    meetingpoint: string;
    image: string;
    location: string;
    description: string;
    whattoexpect: string;
    bring: string;
    hours?: string;
    price?: number
  }

// New Attraction model
export interface Attraction {
  id: number; 
  name: string;
  category: "transportation" | "restaurants" | "breweries" | "bakeries" | "parks" | "places to Visit" | "shopping malls" | "retail stores";
  description: string;
  image: string;
  location: string;
  phone?: string;
  hours?: string;
}

// Combined store state
interface EventState {
  events: Event[];
  attractions: Attraction[];
  activityies: Activity[];
  setEvents: (events: Event[]) => void;
  setAttractions: (data: Attraction[]) => void;
  filterEventsByCategory: (category: "sport" | "music") => Event[];
}

export const useEventStore = create<EventState>((set, get) => ({
    // --- Sports & Music Events ---
    events: [
      {
        id: "1",
        name: "Twin Cities Marathon",
        date: "July 17, 2025",
        location: "Minneapolis, MN",
        category: "sport",
        description:
          "Annual marathon through scenic neighborhoods of Minneapolis and St. Paul.",
        image:
          "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=60",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"

      },
      {
        id: "2",
        name: "Summer Soccer Showdown",
        date: "July 19, 2025",
        location: "Saint Paul, MN",
        category: "sport",
        description:
          "Exciting soccer match between regional clubs with fan events and tailgate.",
        image:
          "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=60",
          phone: "612-332-3400",
          hours: "6:00 AM - 2:00 PM"
      },
      {
        id: "3",
        name: "Summer Soccer Showdown",
        date: "July 19, 2025",
        location: "Saint Paul, MN",
        category: "sport",
        description:
          "Exciting soccer match between regional clubs with fan events and tailgate.",
        image:
          "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=60",
          phone: "612-332-3400",
          hours: "6:00 AM - 2:00 PM"
      },
      {
        id: "4",
        name: "Twin Cities Jazz Festival",
        date: "July 21, 2025",
        location: "Saint Paul, MN",
        category: "music",
        description:
          "Three days of live jazz featuring local and international artists across downtown stages.",
        image:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=60",
           phone: "612-332-3400",
            hours: "6:00 AM - 2:00 PM"
      },
      {
        id: "5",
        name: "Lakeside Summer Concerts",
        date: "July 22, 2025",
        location: "Lake Harriet Bandshell, Minneapolis, MN",
        category: "music",
        description:
          "Open-air evening concerts by the lake with food trucks and family-friendly vibes.",
        image:
          "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=60",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: "6",
        name: "Lakeside Summer Concerts",
        date: "July 22, 2025",
        location: "Lake Harriet Bandshell, Minneapolis, MN",
        category: "music",
        description:
          "Open-air evening concerts by the lake with food trucks and family-friendly vibes.",
        image:
          "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=60",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
    ],
    activityies: [{
      id: "1",
      title: "Twin Cities Guided Tour",
      tagline: "Discover the Best of Minneapolis and St. Paul",
      duration: "4 hours",
      meetingpoint: "Minneapolis Visitor Center",
      image: "/images/guidedtour1.jpg?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
      description:
        "Explore the highlights of the Twin Cities with a knowledgeable guide. Visit iconic landmarks, vibrant neighborhoods, and cultural hotspots while learning about the area's rich history and diverse culture.",
      whattoexpect:
        "Guided visits to key attractions, comfortable transportation, and opportunities for photos and questions.",
      bring:
        "Comfortable walking shoes, weather-appropriate clothing, camera, and a sense of adventure.",
      hours: "9:00 AM - 1:00 PM",
      price: 60

    },
    {
      id: "2",
      title: "Minneapolis Art Walk",
      tagline: "Experience the Vibrant Art Scene of Minneapolis",
      duration: "3 hours",
      meetingpoint: "Minneapolis Art Museum",
      image: "/images/guidedtour2.jpg?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
      description:
        "Join us for a guided art walk through Minneapolis's most renowned galleries and public art installations. Discover contemporary and classic works while engaging with local artists and curators.",
      whattoexpect:
        "Visits to multiple galleries, artist talks, and opportunities to purchase artwork.",
      bring:
        "Comfortable shoes, a notebook for sketches or notes, and an appreciation for art.",
      hours: "10:00 AM - 1:00 PM",
      price: 50
    },
    {
      id: "3",
      title: "Historic St. Paul Walking Tour",
      tagline: "Step Back in Time in St. Paul's Historic Districts",
      duration: "2.5 hours",
      meetingpoint: "St. Paul Visitor Center",
      image: "/images/guidedtour3.jpg?auto=format&fit=crop&w=900&q=60",
      location: "St. Paul, MN",
      description:
        "Discover the rich history of St. Paul with a walking tour through its historic neighborhoods. Learn about the city's founding, architecture, and notable figures from a knowledgeable guide.",
      whattoexpect:
        "Guided walking tour, historical anecdotes, and photo opportunities.",
      bring:
        "Comfortable walking shoes, water, and a curiosity about history.",
      hours: "11:00 AM - 1:30 PM",
      price: 40
    },
    {
      id: "4",
      title: "Minneapolis Foodie Tour",
      tagline: "Taste the Flavors of Minneapolis",
      duration: "3 hours",
      meetingpoint: "Downtown Minneapolis",
      image: "/images/guidedtour4.jpg?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
      description:
        "Embark on a culinary adventure through Minneapolis's diverse food scene. Sample dishes from top restaurants, food trucks, and local markets while learning about the city's culinary culture.",
      whattoexpect:
        "Multiple food tastings, chef interactions, and a full stomach!",
      bring:
        "An appetite, comfortable shoes, and a love for good food.",
      hours: "12:00 PM - 3:00 PM",
      price: 60
    },
    {
      id: "5",
      title: "St. Paul Riverfront Bike Tour",
      tagline: "Explore St. Paul's Scenic Riverfront by Bike",
      duration: "3 hours",
      meetingpoint: "St. Paul Riverfront Park",
      image: "/images/guidedtour5.jpg?auto=format&fit=crop&w=900&q=60",
      location: "St. Paul, MN",
      description:
        "Cycle along the picturesque Mississippi River with a guided bike tour of St. Paul's riverfront attractions. Enjoy scenic views, historic sites, and local landmarks.",
      whattoexpect:
        "Guided bike ride, safety equipment, and plenty of photo stops.",
      bring:
        "Comfortable clothing, water bottle, and a sense of adventure.",
      hours: "9:00 AM - 12:00 PM",
      price: 50
    },
    {
      id: "6",
      title: "Minneapolis Nightlife Tour",
      tagline: "Experience the Best of Minneapolis After Dark",
      duration: "4 hours",
      meetingpoint: "Downtown Minneapolis",
      image: "/images/guidedtour6.jpg?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
      description:
        "Discover Minneapolis's vibrant nightlife with a guided tour of its top bars, clubs, and live music venues. Enjoy exclusive access, drink specials, and a fun night out on the town.",
      whattoexpect:
        "Visits to multiple nightlife spots, drink specials, and lively entertainment.",
      bring:
        "Valid ID, comfortable shoes, and a party spirit.",
      hours: "8:00 PM - 12:00 AM",
      price: 50
    },
    {
      id: "7",
      title: "Minneapolis Sculpture Garden Tour",
      tagline: "Discover Iconic Sculptures in Minneapolis",
      duration: "2 hours",
      meetingpoint: "Minneapolis Sculpture Garden Entrance",
      image: "/images/guidedtour6.jpg?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
      description:
        "Explore the Minneapolis Sculpture Garden with a guided tour of its most famous and intriguing sculptures. Learn about the artists and the stories behind the works.",
      whattoexpect:
        "Guided walking tour, art insights, and photo opportunities.",
      bring:
        "Comfortable walking shoes, camera, and an appreciation for art.",
      hours: "10:00 AM - 12:00 PM",
      price: 30
    },
    {
        id: "8",
        title: "US Bank Stadium Tour",  
        tagline: "Explore the Iconic US Bank Stadium",
        duration: "1.5 hours",
        meetingpoint: "US Bank Stadium Entrance",
        image: "/images/guidedtour3.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        description:
          "Take a guided tour of the US Bank Stadium, home to the Minnesota Vikings. Explore the stadium's architecture, locker rooms, and field while learning about its history and events.",
        whattoexpect: "Guided stadium tour, behind-the-scenes access, and photo opportunities.",
        bring: "Comfortable shoes, camera, and team spirit.",
        hours: "11:00 AM - 12:30 PM" ,
        price: 40 
      },
      {
        id: "9",
        title: "Minneapolis Brewery Tour",
        tagline: "Taste Craft Beers in Minneapolis",
        duration: "3 hours",
        meetingpoint: "Downtown Minneapolis",
        image: "/images/guidedtour5.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        description:
          "Join a guided tour of Minneapolis's best craft breweries. Sample a variety of beers, learn about the brewing process, and meet local brewers.",
        whattoexpect:
          "Visits to multiple breweries, beer tastings, and brewery insights.",
        bring:
          "Valid ID, comfortable shoes, and an appreciation for craft beer.",
        hours: "1:00 PM - 4:00 PM",
        price: 30
      },
      {
        id: "10",
        title: "Minneapolis Running Tour",
        tagline: "Run Through Minneapolis's Scenic Routes",
        duration: "2 hours",
        meetingpoint: "Minneapolis Running Store",
        image: "/images/guidedtour4.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        description:
          "Join a guided running tour through Minneapolis's most scenic routes. Enjoy the city's parks, trails, and landmarks while getting a great workout.",
        whattoexpect:
          "Guided run, water breaks, and scenic views.",
        bring:
          "Running shoes, water bottle, and fitness attire.",
        hours: "7:00 AM - 9:00 AM",
        price: 40
      },
      {
        id: "11",
        title:"Workout Session",
        tagline: "Stay Fit with a Guided Workout Session",
        duration: "1 hour",
        meetingpoint: "Local Gym in Minneapolis",
        image: "/images/guidedtour4.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        description:
          "Join a guided workout session at a local gym in Minneapolis. Stay active and fit while exploring the city.",
        whattoexpect:   
          "Guided workout, fitness tips, and a supportive environment.",
        bring:
          "Workout clothes, water bottle, and a positive attitude.",
        hours: "6:00 PM - 7:00 PM",
        price: 30
        }
    ],
    // --- Attractions (unchanged) ---
    attractions: [
        {
        id: 1,
        name: "Metro Light Rail (Metro Blue & Green Line)",
        category: "transportation",
        description:
            "The Metro Blue and Green Lines offer fast travel between the airport, Mall of America, stadiums, and both downtowns. Trains run often and are simple for visitors to use.",
        image: "/images/msptrain.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
        },
        {
        id: 2,
        name: "Metro Transit Bus (Metro Bus)",
        category: "transportation",
        description:
            "Metro Transit buses make it easy to get around Minneapolis and St. Paul. Routes are frequent, affordable, and connect major attractions, neighborhoods, and event locations.",
        image: "/images/metrobus.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
        },
        {
        id: 3,
        name: "Minneapolis–Saint Paul International Airport (MSP)",
        category: "transportation",
        description:
            "MSP Airport is a major travel hub just minutes from the Twin Cities. It’s clean, efficient, and connects directly to the Metro Blue Line for quick access to the city.",
        image: "/images/mspairport.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
},
      {
        id: 1,
        name: "Spoon and Stable",
        category: "restaurants",
        description:
          "Award-winning restaurants by Chef Gavin Kaysen offering New American cuisine in a chic converted stable.",
        image: "/images/restourants.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 2,
        name: "Spoon and Stable",
        category: "restaurants",
        description:
          "Award-winning restaurants by Chef Gavin Kaysen offering New American cuisine in a chic converted stable.",
        image: "/images/resturants2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 3,
        name: "Shebele resturants",
        category: "restaurants",
        description:
          "Award-winning restaurants by Chef Gavin Kaysen offering New American cuisine in a chic converted stable.",
        image: "/images/resturants2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      { 
        id: 1,
        name: "Surly Brewing Co.",
        category: "breweries",
        description:
          "Iconic Minneapolis breweries with a spacious beer hall, rotating taps, pizza, and live music.",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 2,
        name: "Surly Brewing Co.",
        category: "breweries",
        description:
          "Iconic Minneapolis breweries with a spacious beer hall, rotating taps, pizza, and live music.",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 3,
        name: "Another Brewing Co.",
        category: "breweries",
        description:
          "Iconic Minneapolis breweries with a spacious beer hall, rotating taps, pizza, and live music.",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Rebecca bakeries",
        category: "bakeries",
        description:
          "Popular Minneapolis bakeries crafting handmade pastries, cookies, and espresso.",
        image:
          "/images/bakery1.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Uptown Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 2,
        name: "Jensen bakeries",
        category: "bakeries",
        description:
          "Popular Minneapolis bakeries crafting handmade pastries, cookies, and espresso.",
        image:
          "/images/bakery2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Uptown Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 3,
        name: "Latte caffe cafe & bakeries",
        category: "bakeries",
        description:
          "Popular Minneapolis bakeries crafting handmade pastries, cookies, and espresso.",
        image:
          "/images/bakery3.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Uptown Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Minnehaha Falls parks",
        category: "parks",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks3.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 2,
        name: "Mall of America ",
        category: "parks",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks1.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 3,
        name: "Science Musem",
        category: "parks",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Mall of America ",
        category: "shopping malls",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Edina Mall",
        category: "shopping malls",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Rigdal Mall",
        category: "shopping malls",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Whole Foods Market",
        category: "retail stores",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Macy's",
        category: "retail stores",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
      {
        id: 1,
        name: "Dick's Sporting Goods",
        category: "retail stores",
        description:
          "Scenic urban parks featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
        image:
          "/images/parks2.jpg?auto=format&fit=crop&w=900&q=60",
        location: "Minneapolis, MN",
        phone: "612-332-3400",
        hours: "6:00 AM - 2:00 PM"
      },
    ],
  
    // --- Actions ---
    setEvents: (events) => set({ events }),
    setAttractions: (data) => set({ attractions: data }),
  
    // --- Derived state / filtering ---
    filterEventsByCategory: (category) =>
      get().events.filter((e) => e.category === category),
  }));
