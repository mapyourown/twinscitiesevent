export interface Attraction {
    name: string;
    category: "restaurant" | "brewery" | "bakery" | "park";
    description: string;
    image: string;
    location: string;
  }
  
  export const attractions: Attraction[] = [
    {
      name: "Spoon and Stable",
      category: "restaurant",
      description:
        "Award-winning restaurant by Chef Gavin Kaysen offering New American cuisine in a chic converted stable.",
      image:
        "https://images.unsplash.com/photo-1555992336-03a23c17f408?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
    },
    {
      name: "Revival",
      category: "restaurant",
      description:
        "Southern comfort food with famous fried chicken and craft cocktails in a cozy atmosphere.",
      image:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=900&q=60",
      location: "Saint Paul, MN",
    },
    {
      name: "Surly Brewing Co.",
      category: "brewery",
      description:
        "Iconic Minneapolis brewery with a spacious beer hall, rotating taps, pizza, and live music.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
    },
    {
      name: "Indeed Brewing Company",
      category: "brewery",
      description:
        "Northeast brewery known for its flavorful IPAs and vibrant taproom scene.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
    },
    {
      name: "Patisserie 46",
      category: "bakery",
      description:
        "French-inspired bakery offering croissants, macarons, and artisanal breads.",
      image:
        "https://images.unsplash.com/photo-1511918984145-48de785d4c4f?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
    },
    {
      name: "Rustica Bakery",
      category: "bakery",
      description:
        "Popular Minneapolis bakery crafting handmade pastries, cookies, and espresso.",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e0054848e?auto=format&fit=crop&w=900&q=60",
      location: "Uptown Minneapolis, MN",
    },
    {
      name: "Minnehaha Falls Park",
      category: "park",
      description:
        "Scenic urban park featuring a dramatic 53-foot waterfall, walking trails, and picnic areas.",
      image:
        "https://images.unsplash.com/photo-1565623833408-2f6a766a5b4f?auto=format&fit=crop&w=900&q=60",
      location: "Minneapolis, MN",
    },
    {
      name: "Como Park Zoo & Conservatory",
      category: "park",
      description:
        "Historic zoo and botanical garden with family-friendly exhibits and concerts in summer.",
      image:
        "https://images.unsplash.com/photo-1597874192306-1f6c59d8b6a6?auto=format&fit=crop&w=900&q=60",
      location: "Saint Paul, MN",
    },
  ];
  