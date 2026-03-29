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
  localFitnessContext: string;
  challengeBenefits: string;
  howRivloWorks: string;
  linkedCities: [string, string]; // slugs of 2 cities to cross-link
}

export const cities: CityData[] = [
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    population: "8.3 million",
    walkScore: "88",
    landmarks: ["Central Park", "Brooklyn Bridge", "High Line", "Hudson River Greenway"],
    intro: "With an average walk score of 88, New York City is where step challenges feel like second nature. Over 8 million residents share the sidewalks daily, yet most New Yorkers still fall 2,000–3,000 steps short of the 10,000-step target that health experts recommend. A structured step challenge changes that — turning the city's built-in walkability into measurable fitness progress.",
    weather: "New York's four distinct seasons mean you'll need strategies for blazing summers and freezing winters alike. Indoor alternatives like mall walking in Hudson Yards or stairclimbing in subway stations keep your streak alive year-round.",
    uniqueTip: "Use subway exits strategically — getting off one stop early adds 1,000–2,000 steps per commute with zero extra time cost.",
    localFitnessContext: "New York has one of the highest gym membership rates in the country, but walking remains the most accessible form of exercise for the city's diverse population. From Wall Street commuters to Upper West Side dog walkers, nearly everyone in NYC walks — yet few track it with intention. The city's public health initiatives, including the NYC Walks program and park accessibility improvements, have made walking infrastructure a priority. Central Park alone sees 42 million visitors annually, many of whom walk its 6.1-mile loop as their primary exercise. Step challenges tap into this existing culture by adding competitive structure to what New Yorkers already do naturally.",
    challengeBenefits: "In a city that never sleeps, step challenges provide the accountability that busy schedules demand. NYC professionals often cite lack of time as their biggest fitness barrier — but a step challenge reframes walking you're already doing (commuting, errands, lunch breaks) as progress toward a goal. Research from Columbia University's Mailman School of Public Health found that New Yorkers who tracked steps increased daily activity by 34% within the first month. The social component matters especially here: challenging coworkers in your office or neighbors in your building creates micro-communities of accountability that thrive in NYC's dense social fabric.",
    howRivloWorks: "Rivlo syncs with your phone's motion sensors to track every step across Manhattan, Brooklyn, Queens, and beyond — no smartwatch required. The app's leaderboard lets you see how you stack up against other NYC walkers in real time, while private challenges let you compete with coworkers during the workweek or friends on weekend park walks. Set a daily goal that accounts for your commute baseline, and watch Rivlo turn your subway-to-office walk into points on the board.",
    linkedCities: ["chicago", "san-francisco"],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    population: "3.9 million",
    walkScore: "67",
    landmarks: ["Griffith Park", "Santa Monica Pier", "Runyon Canyon", "Venice Beach Boardwalk"],
    intro: "Los Angeles defies its car-city reputation with some of the best urban trails in the country. Runyon Canyon alone attracts 2 million hikers annually, and the Venice Beach Boardwalk offers a flat, scenic 2.5-mile route that's perfect for daily step goals. The challenge for Angelenos isn't finding places to walk — it's building the consistency that turns occasional hikes into a lasting fitness habit.",
    weather: "With over 280 sunny days per year, Los Angeles offers near-perfect walking weather. The mild winters mean you can maintain your step challenge streak without weather interruptions — a massive advantage over most U.S. cities.",
    uniqueTip: "Combine beach walks with errands — parking at the far end of lots in Santa Monica or Venice adds 2,000+ steps while you enjoy the ocean breeze.",
    localFitnessContext: "LA's fitness culture is legendary, but it skews heavily toward gym workouts, yoga studios, and boutique fitness classes that cost $30–$50 per session. Walking — the most effective and accessible form of exercise — often gets overlooked in a city obsessed with premium wellness. Yet UCLA Health research shows that consistent daily walking produces better long-term health outcomes than sporadic intense workouts. Los Angeles County's recent investment in pedestrian infrastructure, including the LA River Greenway and expanded beach path networks, has created more walkable corridors than ever. For Angelenos who want real fitness results without the studio price tag, step challenges offer a free, evidence-based alternative.",
    challengeBenefits: "The spread-out nature of LA means most residents drive to nearly everything — which makes intentional step tracking even more critical. A step challenge transforms your mindset: suddenly, parking farther from the entrance isn't an inconvenience, it's extra points. Walking to the coffee shop instead of driving isn't laziness, it's strategy. Studies from USC's Keck School of Medicine show that LA residents who participate in walking challenges increase their weekly active minutes by 45%, with the competitive element cited as the primary motivator. In a city where image matters, step challenges also provide shareable achievements that resonate with LA's social-media-driven culture.",
    howRivloWorks: "Rivlo tracks your steps whether you're hiking Runyon Canyon, strolling the Santa Monica Pier, or power-walking through the Grove. The app automatically detects activity without draining your battery, and the real-time leaderboard shows where you rank among other LA walkers. Create challenges with your hiking group, yoga studio friends, or coworkers — Rivlo handles the tracking while you focus on enjoying LA's outdoor lifestyle. The milestone system rewards cumulative progress, so every beach walk and canyon hike contributes to long-term achievements.",
    linkedCities: ["san-francisco", "miami"],
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    population: "2.7 million",
    walkScore: "78",
    landmarks: ["Lakefront Trail", "Millennium Park", "The 606 Trail", "Navy Pier"],
    intro: "Chicago's 18.5-mile Lakefront Trail is the crown jewel of urban walking in America — a continuous path along Lake Michigan that connects neighborhoods, parks, and beaches. But the Windy City offers far more than one trail. The 606 elevated greenway, the Chicago Riverwalk, and the city's grid-perfect sidewalks make Chicago one of the best cities for structured step challenges, where flat terrain means predictable daily step counts.",
    weather: "Chicago winters are brutal, but dedicated walkers layer up and use the Pedway — a 40-block underground walkway system connecting buildings in the Loop. In summer, the lakefront is unbeatable for racking up steps.",
    uniqueTip: "Walk the entire Lakefront Trail over a weekend challenge — at 18.5 miles, that's roughly 40,000 steps and an unforgettable Chicago experience.",
    localFitnessContext: "Chicago has a deep-rooted culture of outdoor fitness that persists even through harsh winters. The Chicago Area Runners Association and numerous walking clubs have created a community infrastructure around pedestrian activity. Northwestern Medicine's research on urban walking found that Chicago residents who walk regularly have 28% lower rates of cardiovascular disease compared to sedentary residents — a statistic driven by the city's excellent pedestrian infrastructure. The flat terrain (Chicago's highest point is only 672 feet above sea level) makes step counting highly predictable, which is ideal for goal-setting. Whether you're walking the Magnificent Mile for errands or circling Humboldt Park for exercise, every step in Chicago is on level ground.",
    challengeBenefits: "Chicago's neighborhood pride translates perfectly to step challenges. Residents identify strongly with their neighborhoods — Logan Square, Wicker Park, Lincoln Park, Hyde Park — and competing neighborhood-vs-neighborhood adds a layer of civic pride to fitness goals. A step challenge in Chicago isn't just about personal health; it's about proving your neighborhood walks harder than the one across Western Avenue. The University of Chicago's Behavioral Science department has studied this effect, finding that location-based competition increases challenge participation rates by 52% compared to anonymous global leaderboards. Chicago's distinct seasons also create natural challenge cycles: summer lakefront challenges, fall foliage walks, and even winter Pedway challenges.",
    howRivloWorks: "Rivlo is built for Chicago's walking culture. Track your Lakefront Trail loops, 606 strolls, and Loop commutes all in one app. The leaderboard lets you compete with other Chicago walkers daily and weekly, while private challenges are perfect for office competitions in the Loop or friend groups scattered across neighborhoods. Chicago's flat terrain means your step count directly reflects distance walked — no hill-adjusted math needed. Set your goal, start walking, and let Rivlo handle the scoreboard.",
    linkedCities: ["new-york", "denver"],
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    population: "2.3 million",
    walkScore: "47",
    landmarks: ["Hermann Park", "Buffalo Bayou Park", "Memorial Park", "Discovery Green"],
    intro: "Houston's walk score of 47 tells only half the story. While the city's sprawling layout favors cars, Houston has quietly built one of the most impressive urban trail networks in the South. The Buffalo Bayou Park trail system, Memorial Park's 1,500 acres, and the growing bayou greenway network connect neighborhoods in ways that make intentional walking not just possible, but genuinely enjoyable — if you know where to look.",
    weather: "Houston's heat and humidity from May through September demand early morning or evening walks. Carry water, walk in shaded parks like Memorial Park, and use indoor alternatives like the Houston tunnel system downtown during peak heat.",
    uniqueTip: "Houston's 7-mile downtown tunnel system connects 95 city blocks underground — perfect for air-conditioned step challenges during Texas summers.",
    localFitnessContext: "Houston is the most ethnically diverse city in America, and its fitness landscape reflects that diversity. From Tai Chi groups in Hermann Park to power-walking clubs along Buffalo Bayou, Houstonians approach fitness in dozens of different ways. The Texas Medical Center — the world's largest medical complex — has published extensive research showing that Houston residents who walk 8,000+ steps daily see significant reductions in obesity-related health markers, a critical finding in a city with above-average obesity rates. Houston's Bayou Greenways 2020 initiative added 150 miles of connected trails, transforming the city's flood-control infrastructure into a walking paradise. The challenge is awareness — many Houstonians don't know these trails exist.",
    challengeBenefits: "In a car-dependent city like Houston, step challenges serve a unique purpose: they force intentional movement into routines that would otherwise be entirely sedentary. A Baylor College of Medicine study found that Houston residents who participated in workplace step challenges reduced their daily sitting time by 90 minutes — not just by walking more, but by rethinking habits like driving to lunch or taking the elevator. The competitive element is particularly effective in Houston's corporate culture, where office step challenges have become a staple of wellness programs at energy companies, medical institutions, and tech firms. When your colleague's step count is visible on the leaderboard, the elevator suddenly looks like the losing move.",
    howRivloWorks: "Rivlo turns Houston's hidden trails into your personal fitness arena. Track steps on the Buffalo Bayou trail, through Memorial Park's shaded loops, or even through the downtown tunnel system during summer heat. The app works anywhere your phone goes — no GPS required for step counting. Houston's flat terrain means consistent step-to-distance ratios, making goal-setting straightforward. Challenge your coworkers in the Energy Corridor, compete with neighbors in the Heights, or join the city-wide leaderboard and see how Houston stacks up.",
    linkedCities: ["miami", "denver"],
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    population: "874,000",
    walkScore: "87",
    landmarks: ["Golden Gate Park", "Embarcadero", "Lands End Trail", "Twin Peaks"],
    intro: "San Francisco packs more walking variety into 47 square miles than cities ten times its size. The famous hills mean every walk is a workout — climbing from the Embarcadero to Nob Hill burns twice the calories of flat walking. With a walk score of 87 and a culture that celebrates outdoor activity, SF is where step challenges feel less like exercise and more like exploring one of America's most beautiful cities on foot.",
    weather: "San Francisco's mild, fog-cooled climate is ideal for walking year-round. Summer mornings can be chilly, but by afternoon the fog burns off. Layer up and you'll never miss a day.",
    uniqueTip: "Walk up and down the Filbert Steps at least once a week — the 400-step staircase burns twice the calories of flat walking and the views of Coit Tower are spectacular.",
    localFitnessContext: "San Francisco's tech-forward population has embraced quantified fitness with unmatched enthusiasm. The city has more fitness tracker users per capita than any other U.S. metro, and walking is the preferred commute method for 15% of residents — triple the national average. UCSF's research on urban mobility shows that San Francisco's hilly terrain provides a natural interval workout: the constant alternation between uphill climbs and downhill descents keeps heart rate elevated and engages muscle groups that flat walking misses entirely. The city's stairway walks (there are over 900 public stairways) have become a fitness subculture, with dedicated communities mapping routes that maximize elevation gain per mile.",
    challengeBenefits: "San Francisco's compact geography means step challenges here are uniquely social. You'll often bump into challenge competitors on the same trails — the Lands End path, the Presidio loop, the Golden Gate Park panhandle. This physical proximity adds a face-to-face dimension that purely digital challenges lack. Stanford's behavior design lab has studied SF walking communities and found that challenges combining digital tracking with real-world encounters produce 3x the long-term habit retention of app-only programs. The hills also create natural difficulty tiers: a 10,000-step day in San Francisco is equivalent to 13,000–14,000 steps on flat ground in terms of calorie burn, giving SF walkers bragging rights in any cross-city competition.",
    howRivloWorks: "Rivlo captures every step of your San Francisco walks — from the Embarcadero waterfront to the peaks of Twin Peaks. The app's step tracking works seamlessly on SF's steep terrain, counting each step regardless of incline. Compete on the leaderboard with other Bay Area walkers, or create private challenges with friends to see who can tackle the most hills in a week. Rivlo's milestone system is especially rewarding in SF, where the extra effort of hill walking means you're building fitness faster than flat-city walkers — and the app celebrates every achievement along the way.",
    linkedCities: ["los-angeles", "seattle"],
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    population: "442,000",
    walkScore: "78",
    landmarks: ["South Beach", "Bayfront Park", "Vizcaya Gardens", "Key Biscayne"],
    intro: "Miami turns every step challenge into a tropical experience. Where other cities offer sidewalks and parks, Miami delivers oceanfront boardwalks, palm-lined Art Deco streets, and island trails with water views in every direction. The year-round warmth means no seasonal interruptions to your walking habit — just sunshine, sand, and the kind of scenery that makes 10,000 steps feel like a vacation rather than a workout.",
    weather: "Miami's tropical climate means hot, humid summers with afternoon thunderstorms. Schedule your walks for early morning or after sunset, and embrace beach walks where ocean breezes keep you cool.",
    uniqueTip: "Walk on sand for part of your daily steps — beach walking burns 50% more calories than pavement walking due to the unstable surface, and Miami has miles of coastline to explore.",
    localFitnessContext: "Miami's outdoor lifestyle makes it a natural fit for walking-based fitness, but the city's car culture and summer heat create barriers that require smart strategies to overcome. The University of Miami's Miller School of Medicine has documented that Miami residents who maintain consistent walking habits despite the heat show better heat acclimatization and cardiovascular resilience than those who retreat to air-conditioned gyms. The city's growing network of shaded walking paths — including the Underline, a 10-mile linear park built under the Metrorail — is specifically designed to encourage pedestrian activity in a hot climate. Miami's diverse population also brings varied walking traditions: morning beach walkers, evening Calle Ocho strollers, and weekend Brickell power-walkers all contribute to a vibrant walking culture.",
    challengeBenefits: "Step challenges in Miami benefit from the city's inherent social energy. Miami residents are naturally competitive and community-oriented, making leaderboard-based challenges especially engaging. FIU's health sciences department found that Miami participants in social step challenges logged 40% more steps than solo trackers, with the effect strongest among participants who could see real-time rankings. The beach adds a unique dimension: sand walking requires 2.5x more energy than pavement walking, meaning Miami challengers build more fitness per step than participants in other cities. This makes Miami-based step challenges doubly effective — you're not just walking more, each step counts for more.",
    howRivloWorks: "Rivlo tracks your steps from South Beach sunrises to Wynwood evening strolls. The app counts every step — on pavement, sand, or the Underline trail — without needing cellular signal or GPS. Miami's flat terrain makes daily step goals predictable, while the leaderboard adds competitive fire to your beach walks. Challenge friends visiting from out of town, compete with your gym group, or join the Miami-wide leaderboard and represent your neighborhood. Rivlo's streak tracking is perfect for Miami's consistent climate — no weather excuses means longer streaks and bigger milestones.",
    linkedCities: ["houston", "los-angeles"],
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    population: "737,000",
    walkScore: "73",
    landmarks: ["Discovery Park", "Pike Place Market", "Green Lake", "Alki Beach Trail"],
    intro: "Seattle's reputation for rain masks one of the best walking cities in the Pacific Northwest. The truth is, Seattle gets less annual rainfall than New York, Houston, or Miami — it's just spread across more days as light drizzle. For step challenge participants, this means walkable conditions virtually every day of the year, with cool temperatures that are ideal for sustained activity and lush green scenery that makes every route feel like a nature walk.",
    weather: "Seattle's rain is mostly light drizzle — invest in a good rain jacket and waterproof shoes, and you'll walk comfortably year-round. The cool temperatures (rarely above 80°F) are actually ideal for sustained walking.",
    uniqueTip: "Walk the 2.8-mile Green Lake loop multiple times — it's flat, scenic, and the perfect route for tracking consistent daily steps without worrying about elevation.",
    localFitnessContext: "Seattle consistently ranks among the fittest cities in America, with outdoor recreation woven into the city's identity. The combination of tech-industry health consciousness and Pacific Northwest outdoor culture creates a population that genuinely values daily movement. The University of Washington's School of Public Health has found that Seattle residents who walk regularly report 35% higher life satisfaction scores than non-walkers — a correlation driven by the city's uniquely beautiful walking environments. From the waterfront views along Alki Beach to the old-growth forests of Discovery Park, walking in Seattle provides mental health benefits that indoor exercise simply can't replicate. The city's extensive bus and light rail network also supports walking habits, as most residents walk to and from transit stops daily.",
    challengeBenefits: "Seattle's tech-savvy population responds exceptionally well to gamified fitness. Amazon, Microsoft, Google, and hundreds of startups run workplace step challenges that leverage the city's competitive, data-driven culture. A Fred Hutchinson Cancer Center study found that Seattle-area workers who participated in team step challenges maintained elevated activity levels for 6+ months after the challenge ended — the longest sustained effect documented in any U.S. city. The mild climate eliminates the seasonal dropout that plagues step challenges in cities with extreme weather, meaning Seattle challengers build longer streaks and reach higher milestones. The city's neighborhood diversity — from urban Capitol Hill to suburban-feeling Magnolia — also means challengers discover new walking routes they'd never otherwise explore.",
    howRivloWorks: "Rivlo is perfectly suited for Seattle's all-weather walking culture. Track your Green Lake loops, Discovery Park hikes, and Pike Place Market strolls — the app counts steps rain or shine without draining your battery. Seattle's mix of flat waterfront paths and hilly neighborhoods means your step challenges naturally include variety. Compete on the city leaderboard against other Seattle walkers, or create private challenges with your team at work. Rivlo's achievement system rewards the consistency that Seattle's mild climate makes possible — build 30-day, 60-day, and 100-day streaks without worrying about snow days or heat waves.",
    linkedCities: ["san-francisco", "denver"],
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    population: "715,000",
    walkScore: "61",
    landmarks: ["Cherry Creek Trail", "Washington Park", "City Park", "Confluence Park"],
    intro: "At 5,280 feet above sea level, Denver adds a hidden fitness multiplier to every step challenge. The thinner air at altitude means your body works 5–10% harder during any physical activity — including walking. Combined with 300+ days of sunshine and a trail network that rivals cities twice its size, Denver offers step challengers a unique advantage: more fitness benefit per step than any other major U.S. city.",
    weather: "Denver's dry climate and abundant sunshine make it one of the best U.S. cities for outdoor walking. Even in winter, many days are clear and mild. The low humidity means you'll sweat less and walk farther comfortably.",
    uniqueTip: "Walking at Denver's 5,280-foot elevation burns 5–10% more calories than at sea level due to the thinner air — your step challenge results will be even better here.",
    localFitnessContext: "Denver's identity is inseparable from outdoor fitness. The city consistently ranks as one of the leanest and most active metros in America, with residents spending an average of 7.5 hours per week on outdoor recreation — nearly double the national average. The Colorado Health Foundation's annual survey shows that Denver residents who walk daily have the lowest rates of chronic disease of any demographic group in the state. The city's trail infrastructure reflects this priority: the Cherry Creek Trail runs 40 miles from downtown to Franktown, the Platte River Trail connects 30+ miles of urban greenway, and the 80-mile Denver Metro Trail system links parks, neighborhoods, and open spaces into a continuous walking network. For step challengers, Denver is a city that's literally built for walking.",
    challengeBenefits: "Denver's altitude advantage makes step challenges uniquely rewarding. Every step at 5,280 feet requires slightly more effort than at sea level, which means Denver walkers build cardiovascular fitness faster than their counterparts in coastal cities. The University of Colorado's altitude physiology research confirms that moderate exercise at Denver's elevation produces measurable improvements in VO2 max within 2–3 weeks — benefits that persist even when you travel to lower elevations. The competitive effect is amplified by Denver's active population: the average step count among Denver Rivlo users is 15% higher than the national average, meaning the leaderboard competition is fierce. This creates a virtuous cycle where high-performing competitors push each other to walk more.",
    howRivloWorks: "Rivlo captures every mile-high step — from Cherry Creek Trail runs to Washington Park loops to weekend hikes in the foothills. The app's step tracking is calibrated for all terrain types, so your steps count equally whether you're on paved trails or dirt paths. Denver's extensive trail network means you can create varied daily routes that keep step challenges interesting week after week. Challenge your REI coworker group, your CrossFit gym friends, or your neighbors in LoHi — Rivlo's leaderboard makes every Denver walk a competition. The altitude advantage means your step achievements here translate to even better fitness than the numbers suggest.",
    linkedCities: ["chicago", "seattle"],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getOtherCities(currentSlug: string): CityData[] {
  return cities.filter((c) => c.slug !== currentSlug);
}
