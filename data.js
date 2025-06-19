// Fake user profiles
const profiles = {
  flatulunce: {
    username: 'flatulunce',
    bio: 'OG fart artist. Been leaking since birth.',
    avatar: 'https://i.imgur.com/NH5Q1U0.png'
  },
  zuck: {
    username: 'zuck',
    bio: 'Just coded a fart 💻💨',
    avatar: 'https://i.imgur.com/hq6GL3j.png'
  },
  queenfarter: {
    username: 'queenfarter',
    bio: 'Slay & spray 👑💨',
    avatar: 'https://i.imgur.com/bQorX5E.png'
  }
};

// Initial 3 custom posts
const posts = [
  {
    id: 1,
    user: 'flatulunce',
    image: 'https://i.imgur.com/9NyG1k1.jpeg',
    caption: 'Just ripped one on the carpet 💨',
    likes: 55682,
    comments: ['bro 💀', 'this one smelled digital']
  },
  {
    id: 2,
    user: 'zuck',
    image: 'https://i.imgur.com/UGfwMhv.jpeg',
    caption: 'Just coded a fart',
    likes: 120789,
    comments: ['meta methane', 'open source stink']
  },
  {
    id: 3,
    user: 'queenfarter',
    image: 'https://i.imgur.com/5y2clmg.jpeg',
    caption: 'silent but deadly 😳',
    likes: 8420,
    comments: ['bow to the queen', 'she gassed the throne']
  }
];

// Fartgram meme-worthy image bank
const fartImages = [
  'https://i.ibb.co/2kGgKWT/fart1.jpg',
  'https://i.ibb.co/DYHftm7/fart2.jpg',
  'https://i.ibb.co/vhcq2Pj/fart3.jpg',
  'https://i.ibb.co/qyK9fx1/fart4.jpg',
  'https://i.ibb.co/1nSD7Nz/fart5.jpg',
  'https://i.ibb.co/k9Rw1Lk/fart6.jpg',
  'https://i.ibb.co/k5SL8x3/fart7.jpg',
  'https://i.ibb.co/pQhP0K0/fart8.jpg',
  'https://i.ibb.co/wd2Xhn3/fart9.jpg',
  'https://i.ibb.co/ZJKbfJz/fart10.jpg'
];

// Generate 17 more posts to reach 20 total
for (let i = 4; i <= 20; i++) {
  const users = Object.keys(profiles);
  const user = users[Math.floor(Math.random() * users.length)];
  const randomImg = fartImages[Math.floor(Math.random() * fartImages.length)];
  const captions = [
    'accidentally crop-dusted 😶‍🌫️',
    'farted in line at Chipotle',
    'my chair is now haunted',
    'I shouldn’t have trusted that one',
    'blamed it on the cat 🐱💨',
    'silent... but biblical',
    'that one had lore',
    'left something behind 💀',
    '🔥💨 felt spiritual',
    'this one had a storyline'
  ];
  const caption = captions[Math.floor(Math.random() * captions.length)];

  posts.push({
    id: i,
    user,
    image: randomImg,
    caption,
    likes: Math.floor(Math.random() * 100000),
    comments: ['🔥🔥', 'that was gnarly']
  });
}
