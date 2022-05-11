export const promise = (value, delay = 2000) => new Promise(resolve => setTimeout(resolve, delay, value));

export const FAKE_SERVER_CONFIGS = {
  urls: {
    translations: 'http://localhost:3000/translations/',
    images: 'http://localhost:3000/images/',
  },
};

export const FAKE_USER = {
  id: 33033,
  name: 'Angelina Jolie',
  gender: 2,
  balance: 307050,
  units: '10',
  date: new Date(),
  country: 'Armenia',
  address: 'Yerevan',
  currency: 'TZS',
  email: 'test_mail@gmail.com',
  number: '099789789',
  documentType: '1',
  documentNumber: 'AQ456545',
  token: 'dsfsdfk-8sd8g7gs4df84s1dg8s7d-8r45r-ew45rw4er5r4',
  isVerified: false,
};

export const FAKE_SPORTS_LIST = [
  {
    id: '50',
    priority: 0,
    sportId: 50,
    sportName: 'Football',
    visible: 1,
    count: 19,
    countries: [
      {
        name: 'Germany',
        leagues: [
          {
            competitionId: 45,
            competitionName: 'Bundesliga',
            country: 'Germany',
            eventsCount: 18,
            fullName: 'Germany - Bundesliga',
            priority: 0,
            top: 1,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    priority: 1,
    sportId: 4,
    sportName: 'Basketball',
    visible: 1,
    count: 29,
  },
  {
    id: '3',
    priority: 2,
    sportId: 3,
    sportName: 'Tennis',
    visible: 1,
    count: 35,
  },
  {
    id: '2',
    priority: 3,
    sportId: 2,
    sportName: 'Ice Hockey',
    visible: 1,
    count: 89,
  },
  {
    id: '5',
    priority: 4,
    sportId: 5,
    sportName: 'Volleyball',
    visible: 1,
    count: 25,
  },
  {
    id: '16',
    priority: 5,
    sportId: 16,
    sportName: 'Table Tennis',
    visible: 1,
    count: 78,
  },
  {
    id: '6',
    priority: 6,
    sportId: 6,
    sportName: 'Handball',
    visible: 1,
    count: 8,
  },
  {
    id: '7',
    priority: 7,
    sportId: 7,
    sportName: 'Baseball',
    visible: 1,
    count: 7,
  },
  {
    id: '81',
    priority: 9,
    sportId: 81,
    sportName: 'Aussie Rules',
    visible: 1,
    count: 16,
  },
];

export const FAKE_SPORT_ITEMS = [
  {
    id: 1,
    country: 'Spain',
    league: 'La Liga',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 2, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 3, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 2,
    country: 'Europe',
    league: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 4, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 5, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 6, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 3,
    country: 'Spain',
    league: 'La Liga',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 7, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 8, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 9, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 4,
    country: 'England',
    league: 'Premier League',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 10, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 11, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 12, name: 'Match Result', type: '2', coefficient: '8', burn: true,
      },
    ],
  },
  {
    id: 5,
    country: 'England',
    league: 'Championship',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 13, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 14, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 15, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 6,
    country: 'Europe',
    league: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 16, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 17, name: 'Match Result', type: 'x', coefficient: '4.2', burn: true,
      },
      {
        id: 18, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 7,
    country: 'Spain',
    league: 'Segunda B',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 19, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 20, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 21, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 8,
    country: 'England',
    league: 'Premier League',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 22, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 23, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 24, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 9,
    country: 'Spain',
    league: 'Segunda B',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 25, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 26, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 27, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 10,
    country: 'England',
    league: 'Premier League',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 28, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 29, name: 'Match Result', type: 'x', coefficient: '4.2', burn: true,
      },
      {
        id: 30, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 11,
    country: 'Europe',
    league: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 31, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 32, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 33, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 12,
    country: 'England',
    league: 'Championship',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 34, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 35, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 36, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 13,
    country: 'Spain',
    league: 'La Liga',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 22, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 23, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 24, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 14,
    country: 'Spain',
    league: 'La Liga',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 25, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 26, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 27, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 15,
    country: 'Spain',
    league: 'La Liga',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 28, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 29, name: 'Match Result', type: 'x', coefficient: '4.2', burn: true,
      },
      {
        id: 30, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 16,
    country: 'England',
    league: 'Premier League',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 31, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 32, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 33, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 17,
    country: 'England',
    league: 'Championship',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 34, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 35, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 36, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
];

function groupSports(sports) {
  if (!Array.isArray(sports)) return {};
  const value = {};
  sports.forEach((sport) => {
    if (value[sport.country]) {
      if (value[sport.country][sport.league]) {
        value[sport.country][sport.league].push(sport);
        value[sport.country].length += 1;
      } else {
        value[sport.country][sport.league] = [ sport ];
        value[sport.country].length += 1;
      }
    } else {
      value[sport.country] = { [sport.league]: [ sport ], length: 1 };
    }
  });
  return value;
}

export const FAKE_SPORT_GROUPS = groupSports(FAKE_SPORT_ITEMS);
