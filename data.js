// Fake user profiles
const profiles = {
  flatulunce: {
    username: 'flatulunce',
    bio: 'OG fart artist. Been leaking since birth.',
    avatar: 'https://cdn.pixabay.com/photo/2015/05/31/11/45/cat-791612_1280.jpg'
  },
  zuck: {
    username: 'zuck',
    bio: 'Just coded a fart 💻💨',
    avatar: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/monkey-2939888_1280.jpg'
  },
  queenfarter: {
    username: 'queenfarter',
    bio: 'Slay & spray 👑💨',
    avatar: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
  }
};

// Starting custom posts
const posts = [
  {
    id: 1,
    user: 'flatulunce',
    image: 'https://cdn.pixabay.com/photo/2020/02/06/16/18/surprised-cat-4827021_1280.jpg',
    caption: 'Just ripped one on the carpet 💨',
    likes: 55682,
    comments: ['bro 💀', 'this one smelled digital']
  },
  {
    id: 2,
    user: 'zuck',
    image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    caption: 'Just coded a fart',
    likes: 120789,
    comments: ['meta methane', 'open source stink']
  },
  {
    id: 3,
    user: 'queenfarter',
    image: 'https://cdn.pixabay.com/photo/2017/03/12/13/41/animal-2135875_1280.jpg',
    caption: 'silent but deadly 😳',
    likes: 8420,
    comments: ['bow to the queen', 'she gassed the throne']
  }
];

// Working image URLs for random fart posts
const fartImages = [
  'https://cdn.pixabay.com/photo/2020/02/06/16/18/surprised-cat-4827021_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/06/01/01/03/animal-793632_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/11/09/21/41/monkey-2939888_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/03/12/13/41/animal-2135875_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/05/31/11/45/cat-791612_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/11/17/13/17/cat-534846_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/02/10/16/37/dog-1194086_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/01/25/09/51/dog-4791018_1280.jpg'
];

// Generate 17 additional posts
for (let i = 4; i <= 20; i++) {
  const users = Object.keys(profiles);
  const user = users[Math.floor(Math.random() * users.length)];
  const image = fartImages[Math.floor(Math.random() * fartImages.length)];
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
    image,
    caption,
    likes: Math.floor(Math.random() * 100000),
    comments: ['🔥🔥', 'that was gnarly']
  });
}
