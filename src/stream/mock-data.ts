// mock-data.ts
export const mockGameData = {
  gameId: 'mock-001',
  homeTeam: {
    name: 'Golden State Warriors',
    players: ['Stephen Curry', 'Klay Thompson', 'Draymond Green'],
  },
  awayTeam: {
    name: 'LA Lakers',
    players: ['LeBron James', 'Luka Doncic', 'Anthony Davis'],
  },
  score: {
    home: 92,
    away: 89,
    quarter: 4,
    time: '01:22',
  },
};

export const mockPlays = [
  {
    time: '04:30',
    quarter: 4,
    home: 92,
    away: 86,
    event: 'Stephen Curry hits a deep 3-pointer from the logo!',
    story: '🏀 Steph is heating up! That\'s his 5th triple tonight.',
    status: 'ongoing',
  },
  {
    time: '03:55',
    quarter: 4,
    home: 92,
    away: 88,
    event: 'LeBron James answers back with a tough layup in traffic.',
    story: '💪 LeBron showing why he\'s still the king.',
    status: 'ongoing',
  },
  {
    time: '02:30',
    quarter: 4,
    home: 92,
    away: 91,
    event: 'Luka Doncic drains a stepback 3 to bring the Lakers within 1!',
    story: '🎯 Luka with that signature stepback magic!',
    status: 'ongoing',
  },
  {
    time: '01:45',
    quarter: 4,
    home: 92,
    away: 91,
    event: 'Draymond Green with a big-time block on Austin Reaves!',
    story: '🛑 Draymond says NOPE!',
    status: 'ongoing',
  },
  {
    time: '01:22',
    quarter: 4,
    home: 95,
    away: 91,
    event: 'Stephen Curry shakes Luka and nails another 3!',
    story: '🔥 Curry\'s cooking — it might be game over!',
    status: 'ongoing',
  },
  {
    time: '01:10',
    quarter: 4,
    home: 95,
    away: 93,
    event: 'Dalton Knecht comes off the screen and sinks a clutch jumper!',
    story: '🧊 Ice in the veins of the rookie!',
    status: 'ongoing',
  },
  {
    time: '00:54',
    quarter: 4,
    home: 95,
    away: 95,
    event: 'Austin Reaves ties the game with a smooth floater!',
    story: '🎈 Reaves floats it up and in — tie game!',
    status: 'ongoing',
  },
  {
    time: '00:34',
    quarter: 4,
    home: 97,
    away: 95,
    event: 'Jimmy Butler with a strong take and finish!',
    story: '🔥 Buckets being Buckets!',
    status: 'ongoing',
  },
  {
    time: '00:18',
    quarter: 4,
    home: 97,
    away: 98,
    event: 'LeBron dishes to Luka for a corner 3 — and it\'s GOOD!',
    story: '💥 Luka with ice-cold nerves — Lakers lead!',
    status: 'ongoing',
  },
  {
    time: '00:05',
    quarter: 4,
    home: 97,
    away: 98,
    event: 'Stephen Curry gets double-teamed and kicks to Butler... MISS!',
    story: '😱 Jimmy had a shot for the win but it rims out!',
    status: 'ongoing',
  },
  {
    time: '00:00',
    quarter: 4,
    home: 97,
    away: 98,
    event: 'Game Over — Lakers complete the comeback in a thriller!',
    story: '🎉 What a finish! Lakers snatch victory on the road!',
    status: 'decided',
  },
];

