const profiles = {
  flatulunce: {
    username: 'flatulunce',
    bio: 'OG fart artist. Been leaking since birth.',
    avatar: 'https://source.unsplash.com/40x40/?cat'
  },
  zuck: {
    username: 'zuck',
    bio: 'Just coded a fart 💻💨',
    avatar: 'https://source.unsplash.com/40x40/?monkey'
  },
  queenfarter: {
    username: 'queenfarter',
    bio: 'Slay & spray 👑💨',
    avatar: 'https://source.unsplash.com/40x40/?dog'
  }
};

const posts = [
  {
    id: 1,
    user: 'flatulunce',
    image: 'https://source.unsplash.com/600x400/?cat,fart,funny',
    caption: 'Just ripped one on the carpet 💨',
    likes: 55682,
    comments: ['bro 💀', 'this one smelled digital']
  },
  {
    id: 2,
    user: 'zuck',
    image: 'https://source.unsplash.com/600x400/?monkey,tech,fart',
    caption: 'Just coded a fart',
    likes: 120789,
    comments: ['meta methane', 'open source stink']
  },
  {
    id: 3,
    user: 'queenfarter',
    image: 'https://source.unsplash.com/600x400/?dog,royalty,fart',
    caption: 'silent but deadly 😳',
    likes: 8420,
    comments: ['bow to the queen', 'she gassed the throne']
  }
];

const fartKeywords = ['cat', 'dog', 'fart', 'meme', 'stink', 'weird', 'funny', 'gross', 'toilet', 'face'];

for (let i = 4; i <= 20; i++) {
  const users = Object.keys(profiles);
  const user = users[Math.floor(Math.random() * users.length)];
  const randomKeyword = fartKeywo
