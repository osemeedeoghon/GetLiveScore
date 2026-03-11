/* ============================================================
   CONFIG  — football-data.org
   ============================================================ */
const FD_TOKEN  = '545405b3beef4de8a144aae319371d46';
const FD_BASE   = 'https://api.football-data.org/v4';
const FD_COMPS  = 'PL,PD,BL1,SA,FL1,CL,WC,DED,ELC,PPL';
const LIVE_INTERVAL = 60_000;
const YT_KEY    = 'AIzaSyBaZGARBx5vDv0TlcEux1fOgFFVbNN5DMc'; // ← paste your key

/* ============================================================
   STATIC TEAM DATA
   ============================================================ */
const LEAGUES = [
  {
    id: 2021, name: 'Premier League', country: 'England',
    logo: 'https://crests.football-data.org/PL.png',
    teams: [
      { id: 57,   name: 'Arsenal',             venue: 'Emirates Stadium' },
      { id: 58,   name: 'Aston Villa',          venue: 'Villa Park' },
      { id: 1044, name: 'Bournemouth',           venue: 'Vitality Stadium' },
      { id: 402,  name: 'Brentford',             venue: 'Gtech Community Stadium' },
      { id: 397,  name: 'Brighton',              venue: 'Amex Stadium' },
      { id: 61,   name: 'Chelsea',               venue: 'Stamford Bridge' },
      { id: 354,  name: 'Crystal Palace',        venue: 'Selhurst Park' },
      { id: 62,   name: 'Everton',               venue: 'Goodison Park' },
      { id: 63,   name: 'Fulham',                venue: 'Craven Cottage' },
      { id: 64,   name: 'Liverpool',             venue: 'Anfield' },
      { id: 65,   name: 'Manchester City',       venue: 'Etihad Stadium' },
      { id: 66,   name: 'Manchester United',     venue: 'Old Trafford' },
      { id: 67,   name: 'Newcastle United',      venue: "St. James' Park" },
      { id: 351,  name: 'Nottingham Forest',     venue: 'City Ground' },
      { id: 340,  name: 'Southampton',           venue: "St Mary's Stadium" },
      { id: 73,   name: 'Tottenham Hotspur',     venue: 'Tottenham Hotspur Stadium' },
      { id: 563,  name: 'West Ham United',       venue: 'London Stadium' },
      { id: 76,   name: 'Wolverhampton',         venue: 'Molineux Stadium' },
      { id: 349,  name: 'Ipswich Town',          venue: 'Portman Road' },
      { id: 338,  name: 'Leicester City',        venue: 'King Power Stadium' },
    ],
  },
  {
    id: 2014, name: 'La Liga', country: 'Spain',
    logo: 'https://crests.football-data.org/PD.png',
    teams: [
      { id: 77,  name: 'Athletic Club',         venue: 'San Mamés' },
      { id: 78,  name: 'Atlético Madrid',       venue: 'Civitas Metropolitano' },
      { id: 81,  name: 'Barcelona',             venue: 'Estadi Olímpic' },
      { id: 90,  name: 'Real Betis',            venue: 'Estadio Benito Villamarín' },
      { id: 558, name: 'Celta Vigo',            venue: 'Abanca-Balaídos' },
      { id: 263, name: 'Deportivo Alavés',      venue: 'Mendizorrotza' },
      { id: 85,  name: 'Espanyol',              venue: 'RCDE Stadium' },
      { id: 94,  name: 'Getafe',                venue: 'Coliseum Alfonso Pérez' },
      { id: 298, name: 'Girona',                venue: 'Estadi Montilivi' },
      { id: 275, name: 'Las Palmas',            venue: 'Estadio Gran Canaria' },
      { id: 745, name: 'Leganés',               venue: 'Estadio Municipal de Butarque' },
      { id: 843, name: 'Mallorca',              venue: 'Visma | Lease a Bike Stadium' },
      { id: 727, name: 'Osasuna',               venue: 'El Sadar' },
      { id: 728, name: 'Rayo Vallecano',        venue: 'Campo de Fútbol de Vallecas' },
      { id: 86,  name: 'Real Madrid',           venue: 'Santiago Bernabéu' },
      { id: 92,  name: 'Real Sociedad',         venue: 'Reale Arena' },
      { id: 559, name: 'Sevilla',               venue: 'Estadio Ramón Sánchez Pizjuán' },
      { id: 95,  name: 'Valencia',              venue: 'Mestalla' },
      { id: 720, name: 'Valladolid',            venue: 'Estadio José Zorrilla' },
      { id: 533, name: 'Villarreal',            venue: 'Estadio de la Cerámica' },
    ],
  },
  {
    id: 2002, name: 'Bundesliga', country: 'Germany',
    logo: 'https://crests.football-data.org/BL1.png',
    teams: [
      { id: 11,  name: 'FC Augsburg',           venue: 'WWK Arena' },
      { id: 3,   name: 'Bayer Leverkusen',      venue: 'BayArena' },
      { id: 5,   name: 'Bayern Munich',         venue: 'Allianz Arena' },
      { id: 4,   name: 'Borussia Dortmund',     venue: 'Signal Iduna Park' },
      { id: 18,  name: "Borussia M'gladbach",   venue: 'Borussia-Park' },
      { id: 19,  name: 'Eintracht Frankfurt',   venue: 'Deutsche Bank Park' },
      { id: 17,  name: 'SC Freiburg',           venue: 'Europa-Park Stadion' },
      { id: 720, name: 'FC Heidenheim',         venue: 'Voith-Arena' },
      { id: 12,  name: 'TSG Hoffenheim',        venue: 'PreZero Arena' },
      { id: 756, name: 'Holstein Kiel',         venue: 'Holstein-Stadion' },
      { id: 10,  name: 'VfB Stuttgart',         venue: 'MHPArena' },
      { id: 28,  name: 'Union Berlin',          venue: 'Stadion An der Alten Försterei' },
      { id: 8,   name: 'Werder Bremen',         venue: 'Weserstadion' },
      { id: 14,  name: 'VfL Wolfsburg',         venue: 'Volkswagen Arena' },
      { id: 15,  name: 'FSV Mainz 05',          venue: 'MEWA Arena' },
      { id: 16,  name: 'VfL Bochum',            venue: 'Vonovia Ruhrstadion' },
      { id: 721, name: 'RB Leipzig',            venue: 'Red Bull Arena' },
      { id: 29,  name: 'FC St. Pauli',          venue: 'Millerntor-Stadion' },
    ],
  },
  {
    id: 2019, name: 'Serie A', country: 'Italy',
    logo: 'https://crests.football-data.org/SA.png',
    teams: [
      { id: 690, name: 'Atalanta',              venue: 'Gewiss Stadium' },
      { id: 691, name: 'Bologna',               venue: "Stadio Renato Dall'Ara" },
      { id: 472, name: 'Cagliari',              venue: 'Unipol Domus' },
      { id: 488, name: 'Como',                  venue: 'Stadio Giuseppe Sinigaglia' },
      { id: 693, name: 'Empoli',                venue: 'Stadio Carlo Castellani' },
      { id: 694, name: 'Fiorentina',            venue: 'Stadio Artemio Franchi' },
      { id: 108, name: 'Inter Milan',           venue: 'Giuseppe Meazza' },
      { id: 109, name: 'Juventus',              venue: 'Allianz Stadium' },
      { id: 749, name: 'Lecce',                 venue: 'Stadio Via del Mare' },
      { id: 110, name: 'Lazio',                 venue: 'Stadio Olimpico' },
      { id: 98,  name: 'AC Milan',              venue: 'Giuseppe Meazza' },
      { id: 715, name: 'Monza',                 venue: 'Stadio Brianteo' },
      { id: 113, name: 'Napoli',                venue: 'Stadio Diego Armando Maradona' },
      { id: 487, name: 'Parma',                 venue: 'Stadio Ennio Tardini' },
      { id: 100, name: 'Roma',                  venue: 'Stadio Olimpico' },
      { id: 586, name: 'Torino',                venue: 'Stadio Olimpico Grande Torino' },
      { id: 115, name: 'Udinese',               venue: 'Bluenergy Stadium' },
      { id: 454, name: 'Venezia',               venue: 'Stadio Pier Luigi Penzo' },
      { id: 450, name: 'Hellas Verona',         venue: 'Stadio Marcantonio Bentegodi' },
      { id: 107, name: 'Genoa',                 venue: 'Stadio Luigi Ferraris' },
    ],
  },
  {
    id: 2015, name: 'Ligue 1', country: 'France',
    logo: 'https://crests.football-data.org/FL1.png',
    teams: [
      { id: 519, name: 'Angers',                venue: 'Stade Raymond-Kopa' },
      { id: 532, name: 'Auxerre',               venue: 'Stade Abbé-Deschamps' },
      { id: 546, name: 'Brest',                 venue: 'Stade Francis-Le Blé' },
      { id: 521, name: 'Lens',                  venue: 'Stade Bollaert-Delelis' },
      { id: 522, name: 'Lille',                 venue: 'Stade Pierre-Mauroy' },
      { id: 523, name: 'Lyon',                  venue: 'Groupama Stadium' },
      { id: 516, name: 'Marseille',             venue: 'Orange Vélodrome' },
      { id: 548, name: 'Monaco',                venue: 'Stade Louis II' },
      { id: 524, name: 'Montpellier',           venue: 'Stade de la Mosson' },
      { id: 525, name: 'Nantes',                venue: 'Stade de la Beaujoire' },
      { id: 526, name: 'Nice',                  venue: 'Allianz Riviera' },
      { id: 530, name: 'Paris SG',              venue: 'Parc des Princes' },
      { id: 527, name: 'Reims',                 venue: 'Stade Auguste-Delaune' },
      { id: 528, name: 'Rennes',                venue: 'Roazhon Park' },
      { id: 529, name: 'Saint-Étienne',         venue: 'Stade Geoffroy-Guichard' },
      { id: 576, name: 'Strasbourg',            venue: 'Stade de la Meinau' },
      { id: 531, name: 'Toulouse',              venue: 'Stadium de Toulouse' },
      { id: 547, name: 'Le Havre',              venue: 'Stade Océane' },
    ],
  },
  {
    id: 2001, name: 'Champions League', country: 'UEFA',
    logo: 'https://crests.football-data.org/CL.png',
    teams: [
      { id: 57,  name: 'Arsenal',               venue: 'Emirates Stadium' },
      { id: 78,  name: 'Atlético Madrid',       venue: 'Civitas Metropolitano' },
      { id: 81,  name: 'Barcelona',             venue: 'Estadi Olímpic' },
      { id: 5,   name: 'Bayern Munich',         venue: 'Allianz Arena' },
      { id: 61,  name: 'Chelsea',               venue: 'Stamford Bridge' },
      { id: 4,   name: 'Borussia Dortmund',     venue: 'Signal Iduna Park' },
      { id: 3,   name: 'Bayer Leverkusen',      venue: 'BayArena' },
      { id: 65,  name: 'Manchester City',       venue: 'Etihad Stadium' },
      { id: 64,  name: 'Liverpool',             venue: 'Anfield' },
      { id: 98,  name: 'AC Milan',              venue: 'Giuseppe Meazza' },
      { id: 108, name: 'Inter Milan',           venue: 'Giuseppe Meazza' },
      { id: 109, name: 'Juventus',              venue: 'Allianz Stadium' },
      { id: 86,  name: 'Real Madrid',           venue: 'Santiago Bernabéu' },
      { id: 530, name: 'Paris SG',              venue: 'Parc des Princes' },
      { id: 73,  name: 'Tottenham Hotspur',     venue: 'Tottenham Hotspur Stadium' },
      { id: 721, name: 'RB Leipzig',            venue: 'Red Bull Arena' },
    ],
  },
  {
    id: 2000, name: 'FIFA World Cup', country: 'FIFA',
    logo: 'https://crests.football-data.org/WC.png',
    teams: [
      { id: 764, name: 'Argentina',             venue: 'Estadio Monumental' },
      { id: 759, name: 'Brazil',                venue: 'Maracanã' },
      { id: 760, name: 'England',               venue: 'Wembley Stadium' },
      { id: 773, name: 'France',                venue: 'Stade de France' },
      { id: 762, name: 'Germany',               venue: 'Olympiastadion' },
      { id: 765, name: 'Netherlands',           venue: 'Johan Cruyff Arena' },
      { id: 771, name: 'Portugal',              venue: 'Estádio da Luz' },
      { id: 766, name: 'Spain',                 venue: 'Wanda Metropolitano' },
      { id: 769, name: 'USA',                   venue: 'MetLife Stadium' },
      { id: 815, name: 'Morocco',               venue: 'Stade de Marrakech' },
      { id: 782, name: 'Japan',                 venue: 'Japan National Stadium' },
      { id: 828, name: 'Senegal',               venue: 'Stade Léopold Sédar Senghor' },
    ],
  },
  {
    id: 2003, name: 'Eredivisie', country: 'Netherlands',
    logo: 'https://crests.football-data.org/ED.png',
    teams: [
      { id: 674, name: 'Ajax',                  venue: 'Johan Cruyff Arena' },
      { id: 675, name: 'PSV Eindhoven',         venue: 'Philips Stadion' },
      { id: 676, name: 'Feyenoord',             venue: 'De Kuip' },
      { id: 677, name: 'AZ Alkmaar',            venue: 'AFAS Stadion' },
      { id: 682, name: 'FC Utrecht',            venue: 'Stadion Galgenwaard' },
      { id: 683, name: 'FC Twente',             venue: 'De Grolsch Veste' },
      { id: 678, name: 'SC Heerenveen',         venue: 'Abe Lenstra Stadion' },
      { id: 686, name: 'Sparta Rotterdam',      venue: 'Het Kasteel' },
      { id: 687, name: 'NEC Nijmegen',          venue: 'Goffertstadion' },
      { id: 679, name: 'Go Ahead Eagles',       venue: 'De Adelaarshorst' },
      { id: 718, name: 'Almere City',           venue: 'Yanmar Stadion' },
      { id: 719, name: 'Willem II',             venue: 'Koning Willem II Stadion' },
      { id: 716, name: 'NAC Breda',             venue: 'Rat Verlegh Stadion' },
    ],
  },
  {
    id: 2079, name: 'Süper Lig', country: 'Türkiye',
    logo: 'https://crests.football-data.org/TSL.png',
    teams: [
      { id: 602, name: 'Galatasaray',           venue: 'RAMS Park' },
      { id: 601, name: 'Fenerbahçe',            venue: 'Şükrü Saracoğlu Stadium' },
      { id: 603, name: 'Beşiktaş',              venue: 'Tüpraş Stadium' },
      { id: 604, name: 'Trabzonspor',           venue: 'Papara Park' },
      { id: 605, name: 'Başakşehir',            venue: 'Başakşehir Fatih Terim Stadium' },
      { id: 606, name: 'Sivasspor',             venue: '4 Eylül Stadium' },
      { id: 607, name: 'Alanyaspor',            venue: 'Bahçeşehir Okul Stadyumu' },
      { id: 608, name: 'Konyaspor',             venue: 'Konya Büyükşehir Stadium' },
      { id: 609, name: 'Kayserispor',           venue: 'Kadir Has Stadium' },
      { id: 610, name: 'Antalyaspor',           venue: 'Antalya Stadium' },
    ],
  },
  {
    id: 2016, name: 'Championship', country: 'England',
    logo: 'https://crests.football-data.org/ELC.png',
    teams: [
      { id: 341, name: 'Leeds United',          venue: 'Elland Road' },
      { id: 342, name: 'Sunderland',            venue: 'Stadium of Light' },
      { id: 343, name: 'Sheffield United',      venue: 'Bramall Lane' },
      { id: 344, name: 'Burnley',               venue: 'Turf Moor' },
      { id: 345, name: 'Middlesbrough',         venue: 'Riverside Stadium' },
      { id: 346, name: 'Coventry City',         venue: 'Coventry Building Society Arena' },
      { id: 347, name: 'Preston North End',     venue: 'Deepdale' },
      { id: 348, name: 'Millwall',              venue: 'The Den' },
      { id: 350, name: 'QPR',                   venue: 'Loftus Road' },
      { id: 356, name: 'Cardiff City',          venue: 'Cardiff City Stadium' },
      { id: 357, name: 'Hull City',             venue: 'MKM Stadium' },
      { id: 358, name: 'Swansea City',          venue: 'Swansea.com Stadium' },
      { id: 361, name: 'Norwich City',          venue: 'Carrow Road' },
      { id: 362, name: 'Plymouth Argyle',       venue: 'Home Park' },
      { id: 363, name: 'Watford',               venue: 'Vicarage Road' },
      { id: 364, name: 'Oxford United',         venue: 'KASSAM Stadium' },
      { id: 365, name: 'Portsmouth',            venue: 'Fratton Park' },
      { id: 366, name: 'Derby County',          venue: 'Pride Park Stadium' },
      { id: 368, name: 'West Brom',             venue: 'The Hawthorns' },
      { id: 369, name: 'Sheffield Wednesday',   venue: 'Hillsborough' },
    ],
  },
  {
    id: 2146, name: 'Europa League', country: 'UEFA',
    logo: 'https://crests.football-data.org/EL.png',
    teams: [
      { id: 57,  name: 'Arsenal',               venue: 'Emirates Stadium' },
      { id: 559, name: 'Sevilla',               venue: 'Estadio Ramón Sánchez Pizjuán' },
      { id: 92,  name: 'Real Sociedad',         venue: 'Reale Arena' },
      { id: 674, name: 'Ajax',                  venue: 'Johan Cruyff Arena' },
      { id: 676, name: 'Feyenoord',             venue: 'De Kuip' },
      { id: 19,  name: 'Eintracht Frankfurt',   venue: 'Deutsche Bank Park' },
      { id: 3,   name: 'Bayer Leverkusen',      venue: 'BayArena' },
      { id: 516, name: 'Marseille',             venue: 'Orange Vélodrome' },
    ],
  },
  {
    id: 2152, name: 'Conference League', country: 'UEFA',
    logo: 'https://crests.football-data.org/UECL.png',
    teams: [
      { id: 563, name: 'West Ham United',       venue: 'London Stadium' },
      { id: 694, name: 'Fiorentina',            venue: 'Stadio Artemio Franchi' },
      { id: 528, name: 'Rennes',                venue: 'Roazhon Park' },
      { id: 677, name: 'AZ Alkmaar',            venue: 'AFAS Stadion' },
      { id: 523, name: 'Lyon',                  venue: 'Groupama Stadium' },
      { id: 546, name: 'Brest',                 venue: 'Stade Francis-Le Blé' },
      { id: 690, name: 'Atalanta',              venue: 'Gewiss Stadium' },
      { id: 67,  name: 'Newcastle United',      venue: "St. James' Park" },
    ],
  },
  {
    id: 2017, name: 'Primeira Liga', country: 'Portugal',
    logo: 'https://crests.football-data.org/PPL.png',
    teams: [
      { id: 503, name: 'Benfica',               venue: 'Estádio da Luz' },
      { id: 504, name: 'Porto',                 venue: 'Estádio do Dragão' },
      { id: 505, name: 'Sporting CP',           venue: 'Estádio José Alvalade' },
      { id: 506, name: 'Braga',                 venue: 'Estádio Municipal de Braga' },
      { id: 507, name: 'Vitória SC',            venue: 'Estádio D. Afonso Henriques' },
      { id: 509, name: 'Boavista',              venue: 'Estádio do Bessa' },
      { id: 510, name: 'Moreirense',            venue: 'Parque de Jogos Comendador Joaquim de Almeida Freitas' },
      { id: 511, name: 'Gil Vicente',           venue: 'Estádio Cidade de Barcelos' },
      { id: 512, name: 'Santa Clara',           venue: 'Estádio de São Miguel' },
      { id: 513, name: 'Rio Ave',               venue: 'Estádio dos Arcos' },
      { id: 514, name: 'Estoril',               venue: 'Estádio António Coimbra da Mota' },
      { id: 515, name: 'Casa Pia',              venue: 'Estádio Municipal Pina Manique' },
      { id: 237, name: 'Nacional',              venue: 'Estádio da Madeira' },
      { id: 238, name: 'AVS',                   venue: 'Estádio do FC Famalicão' },
      { id: 240, name: 'Farense',               venue: 'Estádio de São Luís' },
      { id: 241, name: 'Arouca',                venue: 'Estádio Municipal de Arouca' },
    ],
  },
  {
    id: 2097, name: 'Premiership', country: 'Scotland',
    logo: 'https://crests.football-data.org/SPL.png',
    teams: [
      { id: 264, name: 'Celtic',                venue: 'Celtic Park' },
      { id: 265, name: 'Rangers',               venue: 'Ibrox Stadium' },
      { id: 266, name: 'Heart of Midlothian',   venue: 'Tynecastle Park' },
      { id: 267, name: 'Hibernian',             venue: 'Easter Road' },
      { id: 268, name: 'Aberdeen',              venue: 'Pittodrie Stadium' },
      { id: 269, name: 'Motherwell',            venue: 'Fir Park' },
      { id: 270, name: 'Dundee United',         venue: 'Tannadice Park' },
      { id: 271, name: 'St Mirren',             venue: 'SMiSA Stadium' },
      { id: 272, name: 'Kilmarnock',            venue: 'Rugby Park' },
      { id: 273, name: 'St Johnstone',          venue: 'McDiarmid Park' },
      { id: 274, name: 'Livingston',            venue: 'Tony Macaroni Arena' },
      { id: 275, name: 'Ross County',           venue: 'Global Energy Stadium' },
    ],
  },
  {
    id: 2267, name: 'Belgian Pro League', country: 'Belgium',
    logo: 'https://crests.football-data.org/BEL.png',
    teams: [
      { id: 450, name: 'Club Brugge',           venue: 'Jan Breydel Stadium' },
      { id: 451, name: 'Anderlecht',            venue: 'Lotto Park' },
      { id: 452, name: 'Gent',                  venue: 'Ghelamco Arena' },
      { id: 453, name: 'Standard Liège',        venue: 'Stade Maurice Dufrasne' },
      { id: 454, name: 'Genk',                  venue: 'Cegeka Arena' },
      { id: 456, name: 'Charleroi',             venue: 'Stade du Pays de Charleroi' },
      { id: 457, name: 'Mechelen',              venue: 'AFAS Stadion' },
      { id: 458, name: 'Cercle Brugge',         venue: 'Jan Breydel Stadium' },
      { id: 459, name: 'Westerlo',              venue: 'Het Kuipje' },
      { id: 460, name: 'Union SG',              venue: 'Joseph Marien Stadium' },
      { id: 461, name: 'Beerschot',             venue: 'Olympisch Stadion' },
      { id: 462, name: 'Oud-Heverlee Leuven',   venue: 'Den Dreef' },
      { id: 464, name: 'Dender',                venue: 'Tennisstraat' },
      { id: 465, name: 'RWDM',                  venue: 'Edmond Machtens Stadium' },
    ],
  },
  // ── ENGLAND ──────────────────────────────────────────
  {
    id: 2055, name: 'FA Cup', country: 'England',
    logo: 'https://crests.football-data.org/FAC.png',
    teams: [
      { id: 57,  name: 'Arsenal',           venue: 'Emirates Stadium' },
      { id: 58,  name: 'Aston Villa',        venue: 'Villa Park' },
      { id: 61,  name: 'Chelsea',            venue: 'Stamford Bridge' },
      { id: 354, name: 'Crystal Palace',     venue: 'Selhurst Park' },
      { id: 62,  name: 'Everton',            venue: 'Goodison Park' },
      { id: 64,  name: 'Liverpool',          venue: 'Anfield' },
      { id: 65,  name: 'Manchester City',    venue: 'Etihad Stadium' },
      { id: 66,  name: 'Manchester United',  venue: 'Old Trafford' },
      { id: 67,  name: 'Newcastle United',   venue: "St. James' Park" },
      { id: 73,  name: 'Tottenham Hotspur',  venue: 'Tottenham Hotspur Stadium' },
      { id: 563, name: 'West Ham United',    venue: 'London Stadium' },
      { id: 76,  name: 'Wolverhampton',      venue: 'Molineux Stadium' },
      { id: 341, name: 'Leeds United',       venue: 'Elland Road' },
      { id: 368, name: 'West Brom',          venue: 'The Hawthorns' },
      { id: 363, name: 'Watford',            venue: 'Vicarage Road' },
      { id: 356, name: 'Cardiff City',       venue: 'Cardiff City Stadium' },
    ],
  },
  {
    id: 2056, name: 'Carabao Cup', country: 'England',
    logo: 'https://crests.football-data.org/EFC.png',
    teams: [
      { id: 57,  name: 'Arsenal',           venue: 'Emirates Stadium' },
      { id: 64,  name: 'Liverpool',          venue: 'Anfield' },
      { id: 65,  name: 'Manchester City',    venue: 'Etihad Stadium' },
      { id: 66,  name: 'Manchester United',  venue: 'Old Trafford' },
      { id: 73,  name: 'Tottenham Hotspur',  venue: 'Tottenham Hotspur Stadium' },
      { id: 61,  name: 'Chelsea',            venue: 'Stamford Bridge' },
      { id: 67,  name: 'Newcastle United',   venue: "St. James' Park" },
      { id: 351, name: 'Nottingham Forest',  venue: 'City Ground' },
      { id: 58,  name: 'Aston Villa',        venue: 'Villa Park' },
      { id: 397, name: 'Brighton',           venue: 'Amex Stadium' },
    ],
  },
  // ── SPAIN ────────────────────────────────────────────
  {
    id: 3001, name: 'Copa del Rey', country: 'Spain',
    logo: 'https://crests.football-data.org/CDR.png',
    teams: [
      { id: 86,  name: 'Real Madrid',        venue: 'Santiago Bernabéu' },
      { id: 81,  name: 'Barcelona',          venue: 'Estadi Olímpic' },
      { id: 78,  name: 'Atlético Madrid',    venue: 'Civitas Metropolitano' },
      { id: 77,  name: 'Athletic Club',      venue: 'San Mamés' },
      { id: 559, name: 'Sevilla',            venue: 'Estadio Ramón Sánchez Pizjuán' },
      { id: 90,  name: 'Real Betis',         venue: 'Estadio Benito Villamarín' },
      { id: 92,  name: 'Real Sociedad',      venue: 'Reale Arena' },
      { id: 533, name: 'Villarreal',         venue: 'Estadio de la Cerámica' },
      { id: 95,  name: 'Valencia',           venue: 'Mestalla' },
      { id: 298, name: 'Girona',             venue: 'Estadi Montilivi' },
    ],
  },
  // ── GERMANY ──────────────────────────────────────────
  {
    id: 3002, name: 'DFB Pokal', country: 'Germany',
    logo: 'https://crests.football-data.org/DFB.png',
    teams: [
      { id: 5,   name: 'Bayern Munich',      venue: 'Allianz Arena' },
      { id: 4,   name: 'Borussia Dortmund',  venue: 'Signal Iduna Park' },
      { id: 3,   name: 'Bayer Leverkusen',   venue: 'BayArena' },
      { id: 721, name: 'RB Leipzig',         venue: 'Red Bull Arena' },
      { id: 19,  name: 'Eintracht Frankfurt',venue: 'Deutsche Bank Park' },
      { id: 10,  name: 'VfB Stuttgart',      venue: 'MHPArena' },
      { id: 18,  name: "Borussia M'gladbach",venue: 'Borussia-Park' },
      { id: 8,   name: 'Werder Bremen',      venue: 'Weserstadion' },
      { id: 17,  name: 'SC Freiburg',        venue: 'Europa-Park Stadion' },
      { id: 28,  name: 'Union Berlin',       venue: 'Stadion An der Alten Försterei' },
    ],
  },
  // ── ITALY ────────────────────────────────────────────
  {
    id: 3003, name: 'Coppa Italia', country: 'Italy',
    logo: 'https://crests.football-data.org/CIT.png',
    teams: [
      { id: 109, name: 'Juventus',           venue: 'Allianz Stadium' },
      { id: 108, name: 'Inter Milan',        venue: 'Giuseppe Meazza' },
      { id: 98,  name: 'AC Milan',           venue: 'Giuseppe Meazza' },
      { id: 113, name: 'Napoli',             venue: 'Stadio Diego Armando Maradona' },
      { id: 100, name: 'Roma',               venue: 'Stadio Olimpico' },
      { id: 110, name: 'Lazio',              venue: 'Stadio Olimpico' },
      { id: 690, name: 'Atalanta',           venue: 'Gewiss Stadium' },
      { id: 694, name: 'Fiorentina',         venue: 'Stadio Artemio Franchi' },
      { id: 691, name: 'Bologna',            venue: "Stadio Renato Dall'Ara" },
      { id: 586, name: 'Torino',             venue: 'Stadio Olimpico Grande Torino' },
    ],
  },
  // ── FRANCE ───────────────────────────────────────────
  {
    id: 3004, name: 'Coupe de France', country: 'France',
    logo: 'https://crests.football-data.org/CDF.png',
    teams: [
      { id: 530, name: 'Paris SG',           venue: 'Parc des Princes' },
      { id: 516, name: 'Marseille',          venue: 'Orange Vélodrome' },
      { id: 522, name: 'Lille',              venue: 'Stade Pierre-Mauroy' },
      { id: 523, name: 'Lyon',               venue: 'Groupama Stadium' },
      { id: 548, name: 'Monaco',             venue: 'Stade Louis II' },
      { id: 528, name: 'Rennes',             venue: 'Roazhon Park' },
      { id: 526, name: 'Nice',               venue: 'Allianz Riviera' },
      { id: 546, name: 'Brest',              venue: 'Stade Francis-Le Blé' },
      { id: 521, name: 'Lens',               venue: 'Stade Bollaert-Delelis' },
      { id: 527, name: 'Reims',              venue: 'Stade Auguste-Delaune' },
    ],
  },
  // ── NETHERLANDS ──────────────────────────────────────
  {
    id: 3005, name: 'KNVB Cup', country: 'Netherlands',
    logo: 'https://crests.football-data.org/KNVB.png',
    teams: [
      { id: 674, name: 'Ajax',               venue: 'Johan Cruyff Arena' },
      { id: 675, name: 'PSV Eindhoven',      venue: 'Philips Stadion' },
      { id: 676, name: 'Feyenoord',          venue: 'De Kuip' },
      { id: 677, name: 'AZ Alkmaar',         venue: 'AFAS Stadion' },
      { id: 682, name: 'FC Utrecht',         venue: 'Stadion Galgenwaard' },
      { id: 683, name: 'FC Twente',          venue: 'De Grolsch Veste' },
    ],
  },
  // ── PORTUGAL ─────────────────────────────────────────
  {
    id: 3006, name: 'Taça de Portugal', country: 'Portugal',
    logo: 'https://crests.football-data.org/TDP.png',
    teams: [
      { id: 503, name: 'Benfica',            venue: 'Estádio da Luz' },
      { id: 504, name: 'Porto',              venue: 'Estádio do Dragão' },
      { id: 505, name: 'Sporting CP',        venue: 'Estádio José Alvalade' },
      { id: 506, name: 'Braga',              venue: 'Estádio Municipal de Braga' },
      { id: 509, name: 'Boavista',           venue: 'Estádio do Bessa' },
      { id: 507, name: 'Vitória SC',         venue: 'Estádio D. Afonso Henriques' },
    ],
  },
  // ── SCOTLAND ─────────────────────────────────────────
  {
    id: 3007, name: 'Scottish Cup', country: 'Scotland',
    logo: 'https://crests.football-data.org/SC.png',
    teams: [
      { id: 264, name: 'Celtic',             venue: 'Celtic Park' },
      { id: 265, name: 'Rangers',            venue: 'Ibrox Stadium' },
      { id: 266, name: 'Heart of Midlothian',venue: 'Tynecastle Park' },
      { id: 267, name: 'Hibernian',          venue: 'Easter Road' },
      { id: 268, name: 'Aberdeen',           venue: 'Pittodrie Stadium' },
      { id: 269, name: 'Motherwell',         venue: 'Fir Park' },
    ],
  },
  // ── BELGIUM ──────────────────────────────────────────
  {
    id: 3008, name: 'Belgian Cup', country: 'Belgium',
    logo: 'https://crests.football-data.org/BELC.png',
    teams: [
      { id: 450, name: 'Club Brugge',        venue: 'Jan Breydel Stadium' },
      { id: 451, name: 'Anderlecht',         venue: 'Lotto Park' },
      { id: 452, name: 'Gent',               venue: 'Ghelamco Arena' },
      { id: 460, name: 'Union SG',           venue: 'Joseph Marien Stadium' },
      { id: 454, name: 'Genk',               venue: 'Cegeka Arena' },
      { id: 453, name: 'Standard Liège',     venue: 'Stade Maurice Dufrasne' },
    ],
  },
  // ── TURKEY ───────────────────────────────────────────
  {
    id: 3009, name: 'Turkish Cup', country: 'Türkiye',
    logo: 'https://crests.football-data.org/TC.png',
    teams: [
      { id: 602, name: 'Galatasaray',        venue: 'RAMS Park' },
      { id: 601, name: 'Fenerbahçe',         venue: 'Şükrü Saracoğlu Stadium' },
      { id: 603, name: 'Beşiktaş',           venue: 'Tüpraş Stadium' },
      { id: 604, name: 'Trabzonspor',        venue: 'Papara Park' },
      { id: 605, name: 'Başakşehir',         venue: 'Başakşehir Fatih Terim Stadium' },
    ],
  },
  // ── UEFA INTERNATIONAL ───────────────────────────────
  {
    id: 2018, name: 'European Championship', country: 'UEFA',
    logo: 'https://crests.football-data.org/EC.png',
    teams: [
      { id: 770, name: 'England',            venue: 'Wembley Stadium' },
      { id: 773, name: 'France',             venue: 'Stade de France' },
      { id: 766, name: 'Spain',              venue: 'Wanda Metropolitano' },
      { id: 762, name: 'Germany',            venue: 'Allianz Arena' },
      { id: 771, name: 'Portugal',           venue: 'Estádio da Luz' },
      { id: 765, name: 'Netherlands',        venue: 'Johan Cruyff Arena' },
      { id: 805, name: 'Belgium',            venue: 'King Baudouin Stadium' },
      { id: 799, name: 'Croatia',            venue: 'Stadion Maksimir' },
      { id: 788, name: 'Switzerland',        venue: 'Stade de Genève' },
      { id: 816, name: 'Austria',            venue: 'Ernst-Happel-Stadion' },
      { id: 781, name: 'Scotland',           venue: 'Hampden Park' },
      { id: 781, name: 'Norway',             venue: 'Ullevaal Stadion' },
      { id: 784, name: 'Italy',              venue: 'Stadio Olimpico' },
      { id: 791, name: 'Turkey',             venue: 'Atatürk Olympic Stadium' },
      { id: 792, name: 'Czech Republic',     venue: 'Fortuna Arena' },
      { id: 793, name: 'Denmark',            venue: 'Parken Stadium' },
    ],
  },
  {
    id: 3010, name: 'UEFA Nations League', country: 'UEFA',
    logo: 'https://crests.football-data.org/UNL.png',
    teams: [
      { id: 773, name: 'France',             venue: 'Stade de France' },
      { id: 766, name: 'Spain',              venue: 'Wanda Metropolitano' },
      { id: 771, name: 'Portugal',           venue: 'Estádio da Luz' },
      { id: 770, name: 'England',            venue: 'Wembley Stadium' },
      { id: 762, name: 'Germany',            venue: 'Allianz Arena' },
      { id: 765, name: 'Netherlands',        venue: 'Johan Cruyff Arena' },
      { id: 805, name: 'Belgium',            venue: 'King Baudouin Stadium' },
      { id: 781, name: 'Norway',             venue: 'Ullevaal Stadion' },
      { id: 784, name: 'Italy',              venue: 'Stadio Olimpico' },
      { id: 788, name: 'Switzerland',        venue: 'Stade de Genève' },
      { id: 793, name: 'Denmark',            venue: 'Parken Stadium' },
      { id: 799, name: 'Croatia',            venue: 'Stadion Maksimir' },
    ],
  },
  // ── SOUTH AMERICA ────────────────────────────────────
  {
    id: 3011, name: 'Copa América', country: 'CONMEBOL',
    logo: 'https://crests.football-data.org/CA.png',
    teams: [
      { id: 764, name: 'Argentina',          venue: 'Estadio Monumental' },
      { id: 759, name: 'Brazil',             venue: 'Maracanã' },
      { id: 760, name: 'Uruguay',            venue: 'Estadio Centenario' },
      { id: 779, name: 'Colombia',           venue: 'Estadio El Campín' },
      { id: 780, name: 'Ecuador',            venue: 'Estadio Rodrigo Paz Delgado' },
      { id: 790, name: 'Paraguay',           venue: 'Estadio Defensores del Chaco' },
      { id: 794, name: 'Chile',              venue: 'Estadio Nacional' },
      { id: 795, name: 'Peru',               venue: 'Estadio Nacional' },
      { id: 796, name: 'Bolivia',            venue: 'Estadio Hernando Siles' },
      { id: 797, name: 'Venezuela',          venue: 'Estadio Olímpico' },
    ],
  },
  // ── AFRICA ───────────────────────────────────────────
  {
    id: 3012, name: 'Africa Cup of Nations', country: 'CAF',
    logo: 'https://crests.football-data.org/AFCON.png',
    teams: [
      { id: 815, name: 'Morocco',            venue: 'Grand Stade Hassan II' },
      { id: 828, name: 'Senegal',            venue: 'Stade Léopold Sédar Senghor' },
      { id: 831, name: 'Egypt',              venue: 'Cairo International Stadium' },
      { id: 832, name: 'Algeria',            venue: 'Stade Mustapha Tchaker' },
      { id: 833, name: 'Tunisia',            venue: 'Stade de Radès' },
      { id: 834, name: 'South Africa',       venue: 'FNB Stadium' },
      { id: 835, name: 'Ivory Coast',        venue: "Stade Félix Houphouët-Boigny" },
      { id: 836, name: 'Ghana',              venue: 'Accra Sports Stadium' },
      { id: 837, name: 'Cape Verde',         venue: 'Estádio Nacional' },
      { id: 838, name: 'Nigeria',            venue: 'Moshood Abiola Stadium' },
      { id: 839, name: 'Cameroon',           venue: 'Stade Omnisports de Yaoundé' },
      { id: 840, name: 'Mali',               venue: 'Stade du 26 Mars' },
    ],
  },
  // ── ASIA ─────────────────────────────────────────────
  {
    id: 3013, name: 'AFC Asian Cup', country: 'AFC',
    logo: 'https://crests.football-data.org/AFC.png',
    teams: [
      { id: 782, name: 'Japan',              venue: 'Japan National Stadium' },
      { id: 784, name: 'South Korea',        venue: 'Seoul World Cup Stadium' },
      { id: 783, name: 'Iran',               venue: 'Azadi Stadium' },
      { id: 785, name: 'Australia',          venue: 'Stadium Australia' },
      { id: 786, name: 'Saudi Arabia',       venue: 'King Fahd International Stadium' },
      { id: 787, name: 'Qatar',              venue: 'Lusail Stadium' },
      { id: 789, name: 'Uzbekistan',         venue: 'Bunyodkor Stadium' },
      { id: 791, name: 'Jordan',             venue: 'Amman International Stadium' },
    ],
  },
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  date:           todayStr(),
  filter:         'all',
  fixtures:       [],
  leagues:        [],
  selectedLeague: null,
  leagueSearch:   '',
  liveTimer:      null,
};
const fixtureMap = new Map();

/* ============================================================
   UTILS
   ============================================================ */
function todayStr() { return new Date().toISOString().split('T')[0]; }
function offsetDate(base, days) {
  const d = new Date(base + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}
function formatKickoff(isoStr) {
  return new Date(isoStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function formatFullDate(isoStr) {
  return new Date(isoStr).toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ============================================================
   SESSION CACHE
   ============================================================ */
const cache = {
  set(k, v, ttl = 300_000) { try { sessionStorage.setItem(k, JSON.stringify({ v, exp: Date.now() + ttl })); } catch {} },
  get(k) {
    try { const r = JSON.parse(sessionStorage.getItem(k)); return (!r || Date.now() > r.exp) ? null : r.v; }
    catch { return null; }
  },
  del(k) { try { sessionStorage.removeItem(k); } catch {} },
};

/* ============================================================
   API — multi-proxy fdFetch
   ============================================================ */
async function fdFetch(path) {
  const target = `${FD_BASE}${path}`;
  const proxies = [
    `https://corsproxy.io/?${encodeURIComponent(target)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`,
    `https://cors-anywhere.herokuapp.com/${target}`,
  ];
  for (const url of proxies) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 8000);
      const res = await fetch(url, { headers: { 'X-Auth-Token': FD_TOKEN }, cache: 'no-store', signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    } catch (err) {
      console.warn(`Proxy failed (${url}):`, err.message);
    }
  }
  throw new Error('All proxies failed');
}

function mapFdStatus(m) {
  switch (m.status) {
    case 'IN_PLAY':   return { short: (m.minute ?? 0) <= 45 ? '1H' : '2H', elapsed: m.minute ?? '?' };
    case 'PAUSED':    return { short: 'HT',   elapsed: 45 };
    case 'FINISHED':  return { short: 'FT',   elapsed: 90 };
    case 'TIMED':
    case 'SCHEDULED': return { short: 'NS',   elapsed: null };
    case 'POSTPONED': return { short: 'PST',  elapsed: null };
    case 'CANCELLED': return { short: 'CANC', elapsed: null };
    default:          return { short: 'NS',   elapsed: null };
  }
}
function mapFdMatch(m) {
  const st = mapFdStatus(m);
  // Cache crests as we receive them from the API
  if (m.homeTeam?.id && m.homeTeam?.crest) teamCrestMap.set(m.homeTeam.id, m.homeTeam.crest);
  if (m.awayTeam?.id && m.awayTeam?.crest) teamCrestMap.set(m.awayTeam.id, m.awayTeam.crest);
  return {
    fixture: { id: String(m.id), date: m.utcDate, status: st, venue: { name: m.venue ?? '' }, referee: m.referees?.[0]?.name ?? null },
    league:  { id: m.competition.id, name: m.competition.name, logo: m.competition.emblem ?? '', country: m.area?.name ?? '', flag: m.area?.flag ?? '', season: m.season?.startDate?.slice(0,4) ?? '' },
    teams:   { home: { id: m.homeTeam.id, name: m.homeTeam.shortName ?? m.homeTeam.name ?? 'TBD', logo: m.homeTeam.crest ?? '' }, away: { id: m.awayTeam.id, name: m.awayTeam.shortName ?? m.awayTeam.name ?? 'TBD', logo: m.awayTeam.crest ?? '' } },
    goals:   { home: m.score?.fullTime?.home ?? null, away: m.score?.fullTime?.away ?? null },
  };
}

/* ============================================================
   DATA LOADING
   ============================================================ */
async function loadFixtures(date) {
  const key = `fx_${date}`;
  const hit = cache.get(key);
  if (hit) return hit;
  try {
    const data = await fdFetch(`/matches?date=${date}&competitions=${FD_COMPS}`);
    const fixtures = (data.matches ?? []).map(mapFdMatch);
    cache.set(key, fixtures, date === todayStr() ? 55_000 : 7_200_000);
    return fixtures;
  } catch (err) {
    console.warn('API failed, using static fallback:', err);
    return generateStaticFixtures(date);
  }
}
async function loadLeagues() {
  const hit = cache.get('all_leagues');
  if (hit) return hit;
  const normalised = LEAGUES.map(l => ({ id: l.id, name: l.name, logo: l.logo, country: l.country, flag: '' }));
  cache.set('all_leagues', normalised, 6 * 3_600_000);
  return normalised;
}
function leaguesFromFixtures(fixtures) {
  const map = new Map();
  fixtures.forEach(({ league }) => { if (!map.has(league.id)) map.set(league.id, { ...league }); });
  return [...map.values()];
}

/* ============================================================
   STATIC FALLBACK
   ============================================================ */
function seededInt(str, max) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff;
  return Math.abs(h) % max;
}
function determineStatus(kickoff) {
  const diff = Math.round((Date.now() - kickoff) / 60000);
  if (diff >= 0 && diff < 90) return { short: diff < 45 ? '1H' : '2H', elapsed: Math.min(90,diff), homeScore: seededInt(kickoff+'h',4), awayScore: seededInt(kickoff+'a',4) };
  if (diff >= 90) return { short: 'FT', elapsed: 90, homeScore: seededInt(kickoff+'h',4), awayScore: seededInt(kickoff+'a',4) };
  return { short: 'NS', elapsed: null, homeScore: null, awayScore: null };
}
function generateStaticFixtures(date) {
  const fixtures = [];
  LEAGUES.forEach(league => {
    const teams = league.teams.slice(0, 8);
    for (let i = 0; i < teams.length - 1; i += 2) {
      const home = teams[i], away = teams[i+1];
      const kickoff = new Date(`${date}T${String(12+i).padStart(2,'0')}:00:00`);
      const st = determineStatus(kickoff.getTime());
      fixtures.push({
        fixture: { id: `static-${league.id}-${i}-${date}`, date: kickoff.toISOString(), status: { short: st.short, elapsed: st.elapsed }, venue: { name: home.venue } },
        league:  { id: league.id, name: league.name, logo: league.logo, country: league.country, flag: '' },
        teams:   { home: { id: home.id, name: home.name, logo: `https://crests.football-data.org/${home.id}.png` }, away: { id: away.id, name: away.name, logo: `https://crests.football-data.org/${away.id}.png` } },
        goals:   { home: st.homeScore, away: st.awayScore },
      });
    }
  });
  return fixtures;
}

/* ============================================================
   STATUS HELPERS
   ============================================================ */
const LIVE_SET     = new Set(['1H','2H','ET','BT','P']);
const FINISHED_SET = new Set(['FT','AET','PEN']);
const SCHED_SET    = new Set(['NS','TBD']);

function parseStatus(fixture) {
  const { short, elapsed } = fixture.status;
  if (LIVE_SET.has(short))     return { display: `${elapsed}'`, cls: 'live',      isLive: true,  group: 'live' };
  if (short === 'HT')          return { display: 'HT',          cls: 'ht',        isLive: true,  group: 'live' };
  if (FINISHED_SET.has(short)) return { display: short,         cls: 'finished',  isLive: false, group: 'finished' };
  if (SCHED_SET.has(short))    return { display: formatKickoff(fixture.date), cls: 'scheduled', isLive: false, group: 'scheduled' };
  if (short === 'PST')         return { display: 'PST',         cls: 'other',     isLive: false, group: 'finished' };
  if (short === 'CANC')        return { display: 'CANC',        cls: 'other',     isLive: false, group: 'finished' };
  return { display: short, cls: 'other', isLive: false, group: 'scheduled' };
}

/* ============================================================
   FILTER & GROUP
   ============================================================ */
function applyFilter(fixtures) {
  let out = fixtures;
  if (state.filter !== 'all') out = out.filter(f => parseStatus(f.fixture).group === state.filter);
  if (state.selectedLeague !== null) out = out.filter(f => f.league.id === state.selectedLeague);
  return out;
}
function groupByLeague(fixtures) {
  const map = new Map();
  fixtures.forEach(f => {
    if (!map.has(f.league.id)) map.set(f.league.id, { meta: f.league, fixtures: [] });
    map.get(f.league.id).fixtures.push(f);
  });
  return [...map.values()];
}

/* ============================================================
   RENDER — DATE STRIP
   ============================================================ */
function renderDateStrip() {
  const tabs = document.getElementById('dateTabs');
  tabs.innerHTML = [-3,-2,-1,0,1,2,3].map(offset => {
    const ds = offsetDate(state.date, offset);
    const d  = new Date(ds + 'T12:00:00');
    const top = ds === todayStr() ? 'TODAY' : d.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
    const bot = d.toLocaleDateString('en', { day: 'numeric', month: 'short' });
    return `<button class="date-tab ${ds === state.date ? 'active' : ''}" data-date="${ds}">
              <span class="day">${top}</span><span class="month">${bot}</span>
            </button>`;
  }).join('');
}

/* ============================================================
   RENDER — SIDEBAR
   ============================================================ */
function renderSidebar(leagues) {
  const list   = document.getElementById('sidebarList');
  const search = state.leagueSearch.toLowerCase();
  const byCountry = new Map();
  leagues.forEach(l => {
    const c = l.country || 'World';
    if (!byCountry.has(c)) byCountry.set(c, { flag: l.flag, leagues: [] });
    byCountry.get(c).leagues.push(l);
  });
  const sorted  = [...byCountry.entries()].sort(([a],[b]) => a === 'World' ? 1 : b === 'World' ? -1 : a.localeCompare(b));
  const visible = search ? sorted.filter(([c,{leagues:ls}]) => c.toLowerCase().includes(search) || ls.some(l => l.name.toLowerCase().includes(search))) : sorted;
  if (!visible.length) { list.innerHTML = `<div class="sidebar-msg">No competitions found.</div>`; return; }
  list.innerHTML = visible.map(([country, { flag, leagues: ls }]) => {
    const cid  = 'sc-' + country.replace(/[^a-z0-9]/gi, '_');
    const rows = search ? ls.filter(l => l.name.toLowerCase().includes(search) || country.toLowerCase().includes(search)) : ls;
    return `
      <div class="sidebar-country">
        <button class="sidebar-country-btn${search ? ' open' : ''}" data-cid="${cid}">
          ${flag ? `<img class="c-flag" src="${esc(flag)}" alt="" loading="lazy" onerror="this.style.display='none'" />` : '<span style="width:20px;display:inline-block"></span>'}
          <span class="c-name">${esc(country)}</span><span class="c-arrow">›</span>
        </button>
        <div class="sidebar-league-list${search ? ' open' : ''}" id="${cid}">
          ${rows.map(l => `
            <button class="sidebar-league-btn${state.selectedLeague === l.id ? ' active' : ''}" data-lid="${l.id}">
              <img class="l-logo" src="${esc(l.logo)}" alt="" loading="lazy" onerror="this.style.display='none'" />
              <span>${esc(l.name)}</span>
            </button>`).join('')}
        </div>
      </div>`;
  }).join('');
}

/* ============================================================
   RENDER — MATCHES
   ============================================================ */
function renderMatches() {
  const container = document.getElementById('matchesContainer');
  const filtered  = applyFilter(state.fixtures);
  if (!filtered.length) {
    const leagueName = state.selectedLeague
      ? (state.leagues.find(l => l.id === state.selectedLeague)?.name ?? 'this league')
      : 'this selection';
    container.innerHTML = `
      <div class="empty-state">
        <div style="font-size:2rem;margin-bottom:12px">📅</div>
        <div>No matches for <strong>${esc(leagueName)}</strong> on this date.</div>
        <div style="margin-top:8px;font-size:.82rem;color:var(--dim)">Try a different date using the strip above.</div>
        ${state.selectedLeague ? `<button onclick="filterByLeague(${state.selectedLeague})" style="margin-top:14px;padding:7px 18px;border-radius:999px;border:1px solid var(--border2);color:var(--green);font-size:.82rem;cursor:pointer;background:var(--green-bg)">Clear filter · Show all matches</button>` : ''}
      </div>`;
    return;
  }
  const groups = groupByLeague(filtered);
  container.innerHTML = groups.map(({ meta, fixtures }) => {
    const liveN = fixtures.filter(f => parseStatus(f.fixture).isLive).length;
    return `
      <div class="league-section">
        <div class="league-header" data-lid="${meta.id}" data-lname="${esc(meta.name)}" data-llogo="${esc(meta.logo)}" data-lcountry="${esc(meta.country)}">
          <img class="league-flag" src="${esc(meta.flag)}" alt="" onerror="this.style.display='none'" />
          <img class="league-logo" src="${esc(meta.logo)}" alt="" onerror="this.style.display='none'" />
          <span class="league-country">${esc(meta.country)}</span>
          <span class="league-sep">›</span>
          <span class="league-name">${esc(meta.name)}</span>
          ${liveN ? `<span class="live-badge">${liveN} LIVE</span>` : ''}
        </div>
        <div>${fixtures.map(renderMatchRow).join('')}</div>
      </div>`;
  }).join('');
}

function renderMatchRow(f) {
  const { fixture, teams, goals } = f;
  const s  = parseStatus(fixture);
  return `
    <div class="match-row${s.isLive ? ' is-live' : ''}" data-mid="${fixture.id}">
      <div class="match-status">
        ${s.isLive ? '<span class="live-dot"></span>' : ''}
        <span class="status-text ${s.cls}">${s.display}</span>
      </div>
      <div class="match-teams">
        <div class="team-row">
          <img class="team-logo" src="${esc(teams.home.logo)}" alt="" loading="lazy" onerror="this.style.display='none'" />
          <span class="team-name">${esc(teams.home.name)}</span>
          <span class="team-score${s.isLive ? ' bright' : ''}">${goals.home ?? '-'}</span>
        </div>
        <div class="team-row">
          <img class="team-logo" src="${esc(teams.away.logo)}" alt="" loading="lazy" onerror="this.style.display='none'" />
          <span class="team-name">${esc(teams.away.name)}</span>
          <span class="team-score${s.isLive ? ' bright' : ''}">${goals.away ?? '-'}</span>
        </div>
      </div>
      <div class="match-arrow">›</div>
    </div>`;
}

/* ============================================================
   MATCH MODAL
   ============================================================ */
function openModal(id) {
  const f = fixtureMap.get(String(id));
  if (!f) return;
  const { fixture, teams, goals, league } = f;
  const s = parseStatus(fixture);

  document.getElementById('modalTitle').textContent = `${league.country} · ${league.name}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-league">
      <img src="${esc(league.logo)}" style="width:18px;height:18px;object-fit:contain" onerror="this.style.display='none'" />
      <span>${esc(league.country)} · ${esc(league.name)}</span>
    </div>
    <div class="modal-scoreboard">
      <div class="modal-team" id="modalHomeTeam" style="cursor:pointer">
        <img src="${esc(teams.home.logo)}" alt="${esc(teams.home.name)}" onerror="this.style.display='none'" />
        <div class="modal-team-name">${esc(teams.home.name)}</div>
      </div>
      <div>
        <div class="modal-scores">
          <span class="modal-score">${goals.home ?? '-'}</span>
          <span class="modal-sep">–</span>
          <span class="modal-score">${goals.away ?? '-'}</span>
        </div>
        <div class="modal-status-wrap"><span class="modal-status-pill ${s.cls}">${s.display}</span></div>
      </div>
      <div class="modal-team" id="modalAwayTeam" style="cursor:pointer">
        <img src="${esc(teams.away.logo)}" alt="${esc(teams.away.name)}" onerror="this.style.display='none'" />
        <div class="modal-team-name">${esc(teams.away.name)}</div>
      </div>
    </div>
    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="summary">Summary</button>
      ${s.cls === 'finished' ? `<button class="modal-tab" data-tab="highlights">Highlights</button>` : ''}
      <button class="modal-tab" data-tab="lineups">Line-ups</button>
      <button class="modal-tab" data-tab="info">Info</button>
    </div>
    <div id="modalTabContent">
      <div class="modal-tab-loading"><div class="spinner"></div><p>Loading…</p></div>
    </div>
  `;

  document.getElementById('modal').setAttribute('aria-hidden', 'false');

  document.querySelectorAll('.modal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderModalTab(fixture.id, f, btn.dataset.tab);
    });
  });
  document.getElementById('modalHomeTeam').addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === 'lineups'));
    renderModalTab(fixture.id, f, 'lineups', teams.home.id);
  });
  document.getElementById('modalAwayTeam').addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === 'lineups'));
    renderModalTab(fixture.id, f, 'lineups', teams.away.id);
  });

  renderModalTab(fixture.id, f, 'summary');
}

async function renderModalTab(fixtureId, f, tab, highlightTeamId = null) {
  const content = document.getElementById('modalTabContent');
  content.innerHTML = `<div class="modal-tab-loading"><div class="spinner"></div><p>Loading…</p></div>`;

  if (tab === 'info') {
    content.innerHTML = `
      <div class="modal-detail"><span class="modal-detail-lbl">Date</span><span>${formatFullDate(f.fixture.date)}</span></div>
      <div class="modal-detail"><span class="modal-detail-lbl">Kick-off</span><span>${formatKickoff(f.fixture.date)}</span></div>
      ${f.fixture.venue?.name ? `<div class="modal-detail"><span class="modal-detail-lbl">Venue</span><span>${esc(f.fixture.venue.name)}</span></div>` : ''}
      ${f.fixture.referee ? `<div class="modal-detail"><span class="modal-detail-lbl">Referee</span><span>${esc(f.fixture.referee)}</span></div>` : ''}
    `;
    return;
  }

  if (tab === 'highlights') {
    await renderHighlightsTab(content, f);
    return;
  }

  try {
    const cacheKey = `match_${fixtureId}`;
    let detail = cache.get(cacheKey);
    if (!detail) {
      detail = await fdFetch(`/matches/${fixtureId}`);
      cache.set(cacheKey, detail, 120_000);
    }
    if (tab === 'summary') renderSummaryTab(content, detail, f);
    if (tab === 'lineups') renderLineupsTab(content, detail, f, highlightTeamId);
  } catch (err) {
    content.innerHTML = `<div class="modal-tab-empty">Could not load match details.</div>`;
  }
}

async function renderHighlightsTab(el, f) {
  if (!YT_KEY || YT_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
    el.innerHTML = `<div class="modal-tab-empty">Add your YouTube API key to <code>script.js</code> to enable highlights.</div>`;
    return;
  }

  const { teams, fixture, league } = f;
  const date     = fixture.date.slice(0, 10);
  const matchDay = new Date(fixture.date).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' });
  const query    = `${teams.home.name} vs ${teams.away.name} ${league.name} highlights ${matchDay}`;
  const publishedAfter = new Date(new Date(fixture.date).getTime() - 86_400_000).toISOString(); // 1 day before match
  const publishedBefore = new Date(new Date(fixture.date).getTime() + 7 * 86_400_000).toISOString(); // 7 days after
  const cacheKey = `yt_${fixture.id}`;
  let videoId = cache.get(cacheKey);

  if (!videoId) {
    try {
      const res  = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=10&publishedAfter=${encodeURIComponent(publishedAfter)}&publishedBefore=${encodeURIComponent(publishedBefore)}&key=${YT_KEY}`
      );
      const data = await res.json();
      const items = data.items ?? [];
      // Prefer videos with "highlight" in title, then any result
      const best = items.find(v => /highlight/i.test(v.snippet.title))
                ?? items.find(v => new RegExp(teams.home.name, 'i').test(v.snippet.title))
                ?? items[0];
      videoId = best?.id?.videoId ?? null;
      if (videoId) cache.set(cacheKey, videoId, 24 * 3_600_000);
    } catch (err) {
      videoId = null;
    }
  }

  if (!videoId) {
    el.innerHTML = `<div class="modal-tab-empty">No highlights available for this match yet.</div>`;
    return;
  }

  el.innerHTML = `
    <div class="yt-wrap">
      <iframe
        src="https://www.youtube.com/embed/${esc(videoId)}?autoplay=0&rel=0"
        title="${esc(teams.home.name)} vs ${esc(teams.away.name)} highlights"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div style="margin-top:10px;text-align:center">
      <a href="https://www.youtube.com/watch?v=${esc(videoId)}" target="_blank" rel="noopener"
         style="font-size:.78rem;color:var(--muted)">Open on YouTube ↗</a>
    </div>`;
}

function renderSummaryTab(el, detail, f) {
  const goals    = detail.goals    ?? [];
  const bookings = detail.bookings ?? [];
  const events = [
    ...goals.map(g => ({ type: 'goal', minute: g.minute, extraTime: g.injuryTime ?? 0, team: g.team?.id, scorer: g.scorer?.name, assist: g.assist?.name })),
    ...bookings.map(b => ({ type: b.card, minute: b.minute, extraTime: b.injuryTime ?? 0, team: b.team?.id, player: b.player?.name })),
  ].sort((a,b) => (a.minute + a.extraTime * 0.01) - (b.minute + b.extraTime * 0.01));

  if (!events.length) { el.innerHTML = `<div class="modal-tab-empty">No events recorded yet.</div>`; return; }

  const homeId = f.teams.home.id;
  el.innerHTML = events.map(ev => {
    const isHome = ev.team === homeId;
    const min = ev.extraTime ? `${ev.minute}+${ev.extraTime}'` : `${ev.minute}'`;
    let icon = '', label = '';
    if (ev.type === 'goal') {
      icon  = '⚽';
      label = ev.scorer ? `${esc(ev.scorer)}${ev.assist ? ` <span class="evt-assist">(${esc(ev.assist)})</span>` : ''}` : 'Goal';
    } else if (ev.type === 'YELLOW_CARD') {
      icon = '<span class="card yellow-card"></span>'; label = esc(ev.player ?? '');
    } else if (ev.type === 'RED_CARD') {
      icon = '<span class="card red-card"></span>'; label = esc(ev.player ?? '');
    } else if (ev.type === 'YELLOW_RED_CARD') {
      icon = '<span class="card yellow-card"></span><span class="card red-card"></span>'; label = esc(ev.player ?? '');
    }
    return `
      <div class="evt-row ${isHome ? 'evt-home' : 'evt-away'}">
        ${isHome  ? `<div class="evt-label">${label}</div><div class="evt-icon">${icon}</div><div class="evt-min">${min}</div>` : ''}
        ${!isHome ? `<div class="evt-min">${min}</div><div class="evt-icon">${icon}</div><div class="evt-label">${label}</div>` : ''}
      </div>`;
  }).join('');
}

function renderLineupsTab(el, detail, f, highlightTeamId) {
  const lineups = detail.lineups ?? [];
  if (!lineups.length) { el.innerHTML = `<div class="modal-tab-empty">Lineups not available (free tier limitation).</div>`; return; }

  const homeLineup = lineups.find(l => l.team.id === f.teams.home.id) ?? lineups[0];
  const awayLineup = lineups.find(l => l.team.id === f.teams.away.id) ?? lineups[1];

  const renderTeam = (lineup, highlighted) => {
    if (!lineup) return '';
    const startXI = lineup.startXIs ?? [];
    const subs    = lineup.substitutes ?? [];
    return `
      <div class="lineup-block${highlighted ? ' lineup-highlight' : ''}">
        <div class="lineup-header">
          <img src="${esc(lineup.team.crest ?? '')}" onerror="this.style.display='none'" style="width:24px;height:24px;object-fit:contain" />
          <span>${esc(lineup.team.name)}</span>
          <span class="lineup-formation">${esc(lineup.formation ?? '')}</span>
        </div>
        <div class="lineup-section-title">Starting XI</div>
        ${startXI.map(p => `
          <div class="lineup-player">
            <span class="lineup-num">${p.player?.shirtNumber ?? ''}</span>
            <span class="lineup-name">${esc(p.player?.name ?? '')}</span>
            ${p.player?.position ? `<span class="lineup-pos">${esc(p.player.position)}</span>` : ''}
          </div>`).join('')}
        ${subs.length ? `
          <div class="lineup-section-title">Substitutes</div>
          ${subs.map(p => `
            <div class="lineup-player lineup-sub">
              <span class="lineup-num">${p.player?.shirtNumber ?? ''}</span>
              <span class="lineup-name">${esc(p.player?.name ?? '')}</span>
            </div>`).join('')}` : ''}
      </div>`;
  };

  el.innerHTML = `<div class="lineups-wrap">${renderTeam(homeLineup, highlightTeamId === f.teams.home.id)}${renderTeam(awayLineup, highlightTeamId === f.teams.away.id)}</div>`;
}

/* ============================================================
   LEAGUE MODAL — Table & Scorers
   ============================================================ */
function openLeagueModal(leagueId, leagueName, leagueLogo, country) {
  document.getElementById('modalTitle').textContent = `${country} · ${leagueName}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-league">
      <img src="${esc(leagueLogo)}" style="width:18px;height:18px;object-fit:contain" onerror="this.style.display='none'" />
      <span>${esc(country)} · ${esc(leagueName)}</span>
    </div>
    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="table">Table</button>
      <button class="modal-tab" data-tab="scorers">Top Scorers</button>
    </div>
    <div id="modalTabContent">
      <div class="modal-tab-loading"><div class="spinner"></div><p>Loading…</p></div>
    </div>
  `;
  document.getElementById('modal').setAttribute('aria-hidden', 'false');
  document.querySelectorAll('.modal-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadLeagueTab(leagueId, btn.dataset.tab);
    });
  });
  loadLeagueTab(leagueId, 'table');
}

async function loadLeagueTab(leagueId, tab) {
  const content = document.getElementById('modalTabContent');
  content.innerHTML = `<div class="modal-tab-loading"><div class="spinner"></div><p>Loading…</p></div>`;
  try {
    if (tab === 'table') {
      const key = `standings_${leagueId}`;
      let data = cache.get(key);
      if (!data) { data = await fdFetch(`/competitions/${leagueId}/standings`); cache.set(key, data, 300_000); }
      renderStandings(content, data);
    } else {
      const key = `scorers_${leagueId}`;
      let data = cache.get(key);
      if (!data) { data = await fdFetch(`/competitions/${leagueId}/scorers?limit=20`); cache.set(key, data, 300_000); }
      renderScorers(content, data);
    }
  } catch (err) {
    content.innerHTML = `<div class="modal-tab-empty">Could not load data. This competition may not support standings on the free tier.</div>`;
  }
}

function renderStandings(el, data) {
  const groups = data.standings ?? [];
  if (!groups.length) { el.innerHTML = `<div class="modal-tab-empty">No standings available.</div>`; return; }
  const total = groups.find(g => g.type === 'TOTAL') ?? groups[0];
  const rows  = total.table ?? [];
  el.innerHTML = `
    <div class="table-wrap">
      <table class="league-table">
        <thead><tr>
          <th>#</th><th class="th-team">Team</th>
          <th title="Played">P</th><th title="Won">W</th><th title="Drawn">D</th><th title="Lost">L</th>
          <th title="Goals For">GF</th><th title="Goals Against">GA</th><th title="Goal Difference">GD</th>
          <th title="Points"><strong>Pts</strong></th>
        </tr></thead>
        <tbody>
          ${rows.map(r => `
            <tr>
              <td class="td-pos">${r.position}</td>
              <td class="td-team"><img src="${esc(r.team?.crest ?? '')}" onerror="this.style.display='none'" /><span>${esc(r.team?.shortName ?? r.team?.name ?? '')}</span></td>
              <td>${r.playedGames}</td><td>${r.won}</td><td>${r.draw}</td><td>${r.lost}</td>
              <td>${r.goalsFor}</td><td>${r.goalsAgainst}</td>
              <td class="${r.goalDifference > 0 ? 'pos' : r.goalDifference < 0 ? 'neg' : ''}">${r.goalDifference > 0 ? '+' : ''}${r.goalDifference}</td>
              <td><strong>${r.points}</strong></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderScorers(el, data) {
  const scorers = data.scorers ?? [];
  if (!scorers.length) { el.innerHTML = `<div class="modal-tab-empty">No scorers available.</div>`; return; }
  el.innerHTML = `
    <div class="table-wrap">
      <table class="league-table">
        <thead><tr>
          <th>#</th><th class="th-team">Player</th><th class="th-team">Team</th>
          <th title="Goals">⚽</th><th title="Assists">🅰️</th><th title="Penalties">Pen</th>
        </tr></thead>
        <tbody>
          ${scorers.map((s,i) => `
            <tr>
              <td class="td-pos">${i+1}</td>
              <td class="td-team"><span>${esc(s.player?.name ?? '')}</span></td>
              <td class="td-team"><img src="${esc(s.team?.crest ?? '')}" onerror="this.style.display='none'" /><span>${esc(s.team?.shortName ?? s.team?.name ?? '')}</span></td>
              <td><strong>${s.goals ?? 0}</strong></td><td>${s.assists ?? 0}</td><td>${s.penalties ?? 0}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

/* ============================================================
   closeModal — defined before wireEvents
   ============================================================ */
function closeModal() {
  document.getElementById('modal').setAttribute('aria-hidden', 'true');
}

/* ============================================================
   CORE ACTIONS
   ============================================================ */
function selectDate(date) {
  state.date = date;
  state.selectedLeague = null; // clear league filter on date change
  renderDateStrip();
  renderSidebar(state.leagues);
  loadAndRender();
}
function setFilter(filter) {
  state.filter = filter;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
  renderMatches();
}
function filterByLeague(id) {
  state.selectedLeague = state.selectedLeague === id ? null : id;
  renderMatches();
  renderSidebar(state.leagues);
}

/* ============================================================
   MAIN LOAD
   ============================================================ */
async function loadAndRender(invalidate = false) {
  const container = document.getElementById('matchesContainer');
  const info      = document.getElementById('refreshInfo');
  if (invalidate) cache.del(`fx_${state.date}`);
  container.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Loading matches…</p></div>`;
  info.textContent = 'Loading…';
  try {
    const fixtures = await loadFixtures(state.date);
    state.fixtures = fixtures;
    fixtureMap.clear();
    fixtures.forEach(f => fixtureMap.set(String(f.fixture.id), f));
    renderMatches();
    const liveN = fixtures.filter(f => parseStatus(f.fixture).isLive).length;
    const time  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    info.textContent = `Updated ${time} · ${fixtures.length} matches · ${liveN} live`;
  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="empty-state">⚠ Could not load matches. Please refresh.</div>`;
    info.textContent = 'Error';
  }
}

async function loadSidebar() {
  let leagues = await loadLeagues();
  if (!leagues.length && state.fixtures.length) leagues = leaguesFromFixtures(state.fixtures);
  state.leagues = leagues;
  renderSidebar(leagues);
}

function startLiveRefresh() {
  clearInterval(state.liveTimer);
  state.liveTimer = setInterval(() => { if (state.date === todayStr()) loadAndRender(true); }, LIVE_INTERVAL);
}

/* ============================================================
   TOP LEAGUES PAGE
   ============================================================ */
const TOP_LEAGUES = LEAGUES.map(({ id, name, country, logo }) => ({ id, name, country, logo }));
const SEASON = 2025;

function renderLeaguePills() {
  const wrap = document.getElementById('tlPills');
  if (!wrap) return;
  wrap.innerHTML = TOP_LEAGUES.map(l => `
    <button class="tl-pill" data-lid="${l.id}">
      <img src="${esc(l.logo)}" alt="${esc(l.name)}" onerror="this.style.display='none'" />
      <span class="tl-pill-name">${esc(l.name)}</span>
      <span class="tl-pill-country">${esc(l.country)}</span>
    </button>`).join('');
}

async function selectLeague(league) {
  document.querySelectorAll('.tl-pill').forEach(b => b.classList.toggle('active', parseInt(b.dataset.lid) === league.id));
  const section = document.getElementById('tlTeamsSection');
  const grid    = document.getElementById('tlTeamsGrid');
  const banner  = document.getElementById('tlBanner');
  section.style.display = 'block';
  grid.innerHTML = `<div class="tl-loading"><div class="spinner"></div><p>Loading teams…</p></div>`;
  banner.innerHTML = `
    <img src="${esc(league.logo)}" alt="${esc(league.name)}" />
    <div><div class="tl-banner-name">${esc(league.name)}</div>
    <div class="tl-banner-meta">${esc(league.country)} · Season ${league.id === 2000 ? SEASON + 1 : `${SEASON}/${SEASON+1}`}</div></div>
    <span class="tl-banner-count">Loading…</span>`;

  let teams = [];
  try {
    // Try to get real teams + crests from API
    const apiTeams = await loadCompetitionTeams(league.id);
    if (apiTeams.length) {
      teams = apiTeams
        .map(t => ({ team: { id: t.id, name: t.shortName ?? t.name, logo: t.crest ?? '' }, venue: { name: t.venue ?? '' } }))
        .sort((a,b) => a.team.name.localeCompare(b.team.name));
    }
  } catch (err) {
    console.warn('API teams failed, using static:', err);
  }

  // Fallback to static data if API failed or returned nothing
  if (!teams.length) {
    const found = LEAGUES.find(l => l.id === league.id);
    teams = (found?.teams ?? [])
      .map(t => ({ team: { ...t, logo: teamCrestMap.get(t.id) ?? `https://crests.football-data.org/${t.id}.png` }, venue: { name: t.venue } }))
      .sort((a,b) => a.team.name.localeCompare(b.team.name));
  }

  banner.querySelector('.tl-banner-count').textContent = `${teams.length} clubs`;
  grid.innerHTML = teams.map(({ team, venue }) => {
    const initials = team.name.split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase();
    return `
      <div class="team-card">
        <div class="team-logo-wrap">
          <img src="${esc(team.logo)}" alt="${esc(team.name)}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
          <div class="team-logo-fallback" style="display:none">${esc(initials)}</div>
        </div>
        <div class="team-card-name">${esc(team.name)}</div>
        ${venue?.name ? `<div class="team-card-venue">${esc(venue.name)}</div>` : ''}
      </div>`;
  }).join('');
}

/* ============================================================
   NEWS
   ============================================================ */
const NEWS_FEEDS = {
  bbc:      'https://feeds.bbci.co.uk/sport/football/rss.xml',
  sky:      'https://www.skysports.com/rss/12040',
  guardian: 'https://www.theguardian.com/football/rss',
};
let activeNewsSrc = 'bbc';

async function loadNews(src = activeNewsSrc) {
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Loading news…</p></div>`;

  const cacheKey = `news_${src}`;
  let articles = cache.get(cacheKey);

  if (!articles) {
    try {
      const feedUrl = NEWS_FEEDS[src];
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
      const res = await fetch(proxyUrl, { cache: 'no-store' });
      const text = await res.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      const items = Array.from(xml.querySelectorAll('item')).slice(0, 20);

      articles = items.map(item => {
        // Try to extract image from media:content, enclosure, or description
        const mediaContent = item.querySelector('content');
        const enclosure   = item.querySelector('enclosure');
        const desc        = item.querySelector('description')?.textContent ?? '';
        const imgMatch    = desc.match(/<img[^>]+src=["']([^"']+)["']/i);

        return {
          title:   item.querySelector('title')?.textContent?.trim() ?? '',
          link:    item.querySelector('link')?.textContent?.trim() ?? '#',
          desc:    desc.replace(/<[^>]+>/g, '').trim(),
          date:    item.querySelector('pubDate')?.textContent ?? '',
          image:   mediaContent?.getAttribute('url') || enclosure?.getAttribute('url') || imgMatch?.[1] || null,
          category:item.querySelector('category')?.textContent?.trim() ?? 'Football',
        };
      }).filter(a => a.title);

      cache.set(cacheKey, articles, 300_000); // 5 min
    } catch (err) {
      grid.innerHTML = `<div class="empty-state">⚠ Could not load news. Please try again.</div>`;
      return;
    }
  }

  renderNews(articles);
}

function renderNews(articles) {
  const grid = document.getElementById('newsGrid');
  if (!articles.length) {
    grid.innerHTML = `<div class="empty-state">No news articles found.</div>`;
    return;
  }

  grid.innerHTML = articles.map((a, i) => {
    const dateStr = a.date ? new Date(a.date).toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    const imgHtml = a.image
      ? `<img class="news-card-img" src="${esc(a.image)}" alt="" loading="lazy" onerror="this.parentElement.querySelector('.news-card-img-placeholder').style.display='flex';this.style.display='none'" /><div class="news-card-img-placeholder" style="display:none">⚽</div>`
      : `<div class="news-card-img-placeholder">⚽</div>`;

    return `
      <a class="news-card${i === 0 ? ' news-featured' : ''}" href="${esc(a.link)}" target="_blank" rel="noopener">
        ${imgHtml}
        <div class="news-card-body">
          <div class="news-card-tag">${esc(a.category)}</div>
          <div class="news-card-title">${esc(a.title)}</div>
          ${a.desc ? `<div class="news-card-desc">${esc(a.desc)}</div>` : ''}
          <div class="news-card-meta">${dateStr}</div>
        </div>
      </a>`;
  }).join('');
}

/* ============================================================
   PAGE SWITCHING (updated)
   ============================================================ */
function showMainView() {
  document.querySelector('.app-layout').style.display = '';
  document.querySelector('.date-strip').style.display = '';
  document.querySelector('.filter-bar').style.display = '';
  document.getElementById('topLeaguesPage').style.display = 'none';
  document.getElementById('newsPage').style.display = 'none';
  document.getElementById('topLeaguesLink').classList.remove('active');
  document.getElementById('navNews').classList.remove('active');
  document.getElementById('navFootball').classList.add('active');
}
function showTopLeagues() {
  document.querySelector('.app-layout').style.display = 'none';
  document.querySelector('.date-strip').style.display = 'none';
  document.querySelector('.filter-bar').style.display = 'none';
  document.getElementById('topLeaguesPage').style.display = 'block';
  document.getElementById('newsPage').style.display = 'none';
  document.getElementById('topLeaguesLink').classList.add('active');
  document.getElementById('navNews').classList.remove('active');
  document.getElementById('navFootball').classList.remove('active');
}
function showNews() {
  document.querySelector('.app-layout').style.display = 'none';
  document.querySelector('.date-strip').style.display = 'none';
  document.querySelector('.filter-bar').style.display = 'none';
  document.getElementById('topLeaguesPage').style.display = 'none';
  document.getElementById('newsPage').style.display = 'block';
  document.getElementById('navNews').classList.add('active');
  document.getElementById('navFootball').classList.remove('active');
  document.getElementById('topLeaguesLink').classList.remove('active');
  loadNews();
}

/* ============================================================
   COMPETITION CODE MAP  (id → API code)
   ============================================================ */
const COMP_CODES = {
  2021: 'PL', 2014: 'PD',  2002: 'BL1', 2019: 'SA',  2015: 'FL1',
  2001: 'CL',   2000: 'WC',  2003: 'DED', 2016: 'ELC', 2017: 'PPL',
  2097: 'SPL',2079: 'TSL', 2146: 'EL',  2152: 'UECL',2267: 'BEL',
};

/* Global crest cache: teamId → crestUrl (populated from API) */
const teamCrestMap = new Map();

async function loadCompetitionTeams(leagueId) {
  const code = COMP_CODES[leagueId];
  if (!code) return [];
  const key = `comp_teams_${leagueId}`;
  let data = cache.get(key);
  if (!data) {
    data = await fdFetch(`/competitions/${code}/teams`);
    cache.set(key, data, 24 * 3_600_000); // 24 h
  }
  (data.teams ?? []).forEach(t => {
    if (t.id && t.crest) teamCrestMap.set(t.id, t.crest);
  });
  return data.teams ?? [];
}
async function jumpToLeague(leagueId) {
  // Show loading in main content while we search
  const container = document.getElementById('matchesContainer');
  const info      = document.getElementById('refreshInfo');
  container.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Finding next match…</p></div>`;
  info.textContent = 'Searching…';

  try {
    // Fetch upcoming + recent matches for this competition (last 30 + next 30 days)
    const from = offsetDate(todayStr(), -30);
    const to   = offsetDate(todayStr(),  30);
    const cacheKey = `comp_dates_${leagueId}`;
    let data = cache.get(cacheKey);
    if (!data) {
      data = await fdFetch(`/competitions/${leagueId}/matches?dateFrom=${from}&dateTo=${to}&status=SCHEDULED,TIMED,IN_PLAY,PAUSED,FINISHED`);
      cache.set(cacheKey, data, 300_000); // 5 min
    }

    const matches = data.matches ?? [];
    if (!matches.length) {
      // No matches in range — just filter on current date
      state.selectedLeague = leagueId;
      await loadAndRender();
      renderSidebar(state.leagues);
      return;
    }

    // Find the date closest to today (prefer future, then most recent past)
    const today = todayStr();
    const dates = [...new Set(matches.map(m => m.utcDate.slice(0, 10)))].sort();

    // First look for today or future dates
    let targetDate = dates.find(d => d >= today);
    // If nothing upcoming, take the most recent past date
    if (!targetDate) targetDate = dates[dates.length - 1];

    // Navigate to that date with the league filter active
    state.selectedLeague = leagueId;
    state.date = targetDate;
    renderDateStrip();
    await loadAndRender();
    renderSidebar(state.leagues);
    document.querySelector('.main-content')?.scrollTo(0, 0);

  } catch (err) {
    console.warn('jumpToLeague failed:', err);
    // Fallback: just apply filter on current date
    state.selectedLeague = leagueId;
    await loadAndRender();
    renderSidebar(state.leagues);
  }
}

/* ============================================================
   EVENT WIRING
   ============================================================ */
function wireEvents() {
  document.getElementById('burgerBtn').onclick = () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('open');
  };
  const closeSidebar = () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
  };
  document.getElementById('sidebarClose').onclick   = closeSidebar;
  document.getElementById('sidebarOverlay').onclick = closeSidebar;
  document.getElementById('prevDay').onclick = () => selectDate(offsetDate(state.date, -1));
  document.getElementById('nextDay').onclick = () => selectDate(offsetDate(state.date,  1));
  document.getElementById('dateTabs').addEventListener('click', e => {
    const tab = e.target.closest('.date-tab');
    if (tab) selectDate(tab.dataset.date);
  });
  document.querySelectorAll('.filter-tab').forEach(b =>
    b.addEventListener('click', () => setFilter(b.dataset.filter)));
  document.getElementById('refreshBtn').onclick = () => loadAndRender(true);
  document.getElementById('sidebarList').addEventListener('click', async e => {
    const cBtn = e.target.closest('.sidebar-country-btn');
    const lBtn = e.target.closest('.sidebar-league-btn');
    if (cBtn) {
      const el = document.getElementById(cBtn.dataset.cid);
      if (el) { el.classList.toggle('open'); cBtn.classList.toggle('open'); }
    }
    if (lBtn) {
      const id = parseInt(lBtn.dataset.lid, 10);
      if (window.innerWidth < 769) closeSidebar();
      await jumpToLeague(id);
    }
  });
  document.getElementById('leagueSearchInput').addEventListener('input', e => {
    state.leagueSearch = e.target.value;
    renderSidebar(state.leagues);
  });
  document.getElementById('matchesContainer').addEventListener('click', e => {
    const row    = e.target.closest('.match-row');
    const header = e.target.closest('.league-header');
    if (row) openModal(row.dataset.mid);
    if (header) {
      const id      = parseInt(header.dataset.lid, 10);
      const name    = header.dataset.lname ?? '';
      const logo    = header.dataset.llogo ?? '';
      const country = header.dataset.lcountry ?? '';
      openLeagueModal(id, name, logo, country);
    }
  });
  document.getElementById('modalClose').onclick    = closeModal;
  document.getElementById('modalBackdrop').onclick = closeModal;
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const topLink = document.getElementById('topLeaguesLink');
  if (topLink) topLink.addEventListener('click', e => { e.preventDefault(); showTopLeagues(); });

  const navNews = document.getElementById('navNews');
  if (navNews) navNews.addEventListener('click', e => { e.preventDefault(); showNews(); });

  const navFootball = document.getElementById('navFootball');
  if (navFootball) navFootball.addEventListener('click', e => { e.preventDefault(); showMainView(); });

  document.querySelectorAll('.news-src-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.news-src-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeNewsSrc = btn.dataset.src;
      loadNews(activeNewsSrc);
    });
  });

  document.querySelectorAll('.sport-link:not(#topLeaguesLink):not(#navNews):not(#navFootball)').forEach(a =>
    a.addEventListener('click', e => { e.preventDefault(); showMainView(); }));
  const tlPills = document.getElementById('tlPills');
  if (tlPills) tlPills.addEventListener('click', e => {
    const pill = e.target.closest('.tl-pill');
    if (!pill) return;
    const league = TOP_LEAGUES.find(l => l.id === parseInt(pill.dataset.lid));
    if (league) selectLeague(league);
  });
}

/* ============================================================
   INIT
   ============================================================ */
async function init() {
  wireEvents();
  renderDateStrip();
  renderLeaguePills();
  await loadAndRender();
  await loadSidebar();
  startLiveRefresh();
}

window.addEventListener('DOMContentLoaded', init);