export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  walkScore: string;
  landmarks: string[];
  intro: string;
  weather: string;
  uniqueTip: string;
}

export const cities: CityData[] = [
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    population: "8.3 million",
    walkScore: "88",
    landmarks: ["Central Park", "Brooklyn Bridge", "High Line", "Hudson River Greenway"],
    intro: "New York City is one of the most walkable cities on Earth. With endless sidewalks, iconic parks, and a culture built around walking, NYC residents already average more steps than most Americans — but there's always room to push further.",
    weather: "New York's four distinct seasons mean you'll need strategies for blazing summers and freezing winters alike. Indoor alternatives like mall walking in Hudson Yards or stairclimbing in subway stations keep your streak alive year-round.",
    uniqueTip: "Use subway exits strategically — getting off one stop early adds 1,000–2,000 steps per commute with zero extra time cost.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    population: "3.9 million",
    walkScore: "67",
    landmarks: ["Griffith Park", "Santa Monica Pier", "Runyon Canyon", "Venice Beach Boardwalk"],
    intro: "Los Angeles may be known as a car city, but its trails, beaches, and neighborhoods offer world-class walking opportunities. From Runyon Canyon hikes to Santa Monica boardwalk strolls, LA has more walkable gems than most people realize.",
    weather: "With over 280 sunny days per year, Los Angeles offers near-perfect walking weather. The mild winters mean you can maintain your step challenge streak without weather interruptions — a massive advantage over most U.S. cities.",
    uniqueTip: "Combine beach walks with errands — parking at the far end of lots in Santa Monica or Venice adds 2,000+ steps while you enjoy the ocean breeze.",
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    population: "2.7 million",
    walkScore: "78",
    landmarks: ["Lakefront Trail", "Millennium Park", "The 606 Trail", "Navy Pier"],
    intro: "Chicago's legendary Lakefront Trail stretches 18.5 miles along Lake Michigan, making it one of America's premier walking cities. The flat terrain and grid layout make step tracking predictable — perfect for hitting consistent daily goals.",
    weather: "Chicago winters are brutal, but dedicated walkers layer up and use the Pedway — a 40-block underground walkway system connecting buildings in the Loop. In summer, the lakefront is unbeatable for racking up steps.",
    uniqueTip: "Walk the entire Lakefront Trail over a weekend challenge — at 18.5 miles, that's roughly 40,000 steps and an unforgettable Chicago experience.",
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    population: "2.3 million",
    walkScore: "47",
    landmarks: ["Hermann Park", "Buffalo Bayou Park", "Memorial Park", "Discovery Green"],
    intro: "Houston's sprawling layout makes it a car-dependent city by default, which means intentional walking is even more important. The city's expansive park system and growing trail network provide excellent step challenge routes for those willing to seek them out.",
    weather: "Houston's heat and humidity from May through September demand early morning or evening walks. Carry water, walk in shaded parks like Memorial Park, and use indoor alternatives like the Houston tunnel system downtown during peak heat.",
    uniqueTip: "Houston's 7-mile downtown tunnel system connects 95 city blocks underground — perfect for air-conditioned step challenges during Texas summers.",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    population: "874,000",
    walkScore: "87",
    landmarks: ["Golden Gate Park", "Embarcadero", "Lands End Trail", "Twin Peaks"],
    intro: "San Francisco's compact size and famous hills make it a step challenge paradise. Walking here isn't just exercise — it's a full-body workout. The steep inclines mean fewer steps burn more calories, and the views from every hilltop make every climb worth it.",
    weather: "San Francisco's mild, fog-cooled climate is ideal for walking year-round. Summer mornings can be chilly, but by afternoon the fog burns off. Layer up and you'll never miss a day.",
    uniqueTip: "Walk up and down the Filbert Steps at least once a week — the 400-step staircase burns twice the calories of flat walking and the views of Coit Tower are spectacular.",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    population: "442,000",
    walkScore: "78",
    landmarks: ["South Beach", "Bayfront Park", "Vizcaya Gardens", "Key Biscayne"],
    intro: "Miami's vibrant neighborhoods and beachfront paths make walking feel like a vacation. From the Art Deco streets of South Beach to the shaded trails of Key Biscayne, every step comes with sunshine and scenery that most cities can't match.",
    weather: "Miami's tropical climate means hot, humid summers with afternoon thunderstorms. Schedule your walks for early morning or after sunset, and embrace beach walks where ocean breezes keep you cool.",
    uniqueTip: "Walk on sand for part of your daily steps — beach walking burns 50% more calories than pavement walking due to the unstable surface, and Miami has miles of coastline to explore.",
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    population: "737,000",
    walkScore: "73",
    landmarks: ["Discovery Park", "Pike Place Market", "Green Lake", "Alki Beach Trail"],
    intro: "Seattle's lush green spaces and waterfront trails make it a walker's dream despite its rainy reputation. The city's hilly terrain and outdoor culture mean step challenges here come with elevation gains and Pacific Northwest beauty at every turn.",
    weather: "Seattle's rain is mostly light drizzle — invest in a good rain jacket and waterproof shoes, and you'll walk comfortably year-round. The cool temperatures (rarely above 80°F) are actually ideal for sustained walking.",
    uniqueTip: "Walk the 2.8-mile Green Lake loop multiple times — it's flat, scenic, and the perfect route for tracking consistent daily steps without worrying about elevation.",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    population: "715,000",
    walkScore: "61",
    landmarks: ["Cherry Creek Trail", "Washington Park", "City Park", "Confluence Park"],
    intro: "Denver's mile-high elevation and 300+ days of sunshine create ideal conditions for step challenges. The city's extensive trail network connects neighborhoods, parks, and waterways — making it easy to walk thousands of steps while exploring the city.",
    weather: "Denver's dry climate and abundant sunshine make it one of the best U.S. cities for outdoor walking. Even in winter, many days are clear and mild. The low humidity means you'll sweat less and walk farther comfortably.",
    uniqueTip: "Walking at Denver's 5,280-foot elevation burns 5–10% more calories than at sea level due to the thinner air — your step challenge results will be even better here.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getOtherCities(currentSlug: string): CityData[] {
  return cities.filter((c) => c.slug !== currentSlug);
}
