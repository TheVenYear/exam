import gameImage from '../assets/game.png';
import newsImage from '../assets/news.png';
import mogoImage from '../assets/mogo.png';

const items = [
  {
    title: 'Простейший игровой движок на JavaScript',
    description:
      'Примитивный игровой движок с восможностью передвижения и прыжками написанный на JavaScript с использованием Babel и Webpack',
    img: gameImage,
    link: 'https://thevenyear.github.io/adventure_game/',
  },
  {
    title: 'Новостной сайт на Django',
    description:
      'Простой новостной подключенный к базе данных, написаный на Python с использованием веб-фреймворка Django и CSS библиотекой Bootstrap',
    img: newsImage,
    link: 'http://thevenyear.pythonanywhere.com/',
  },
  {
    title: 'Сайт-лендинг Mogo',
    description:
      'Вёрстка с бесплатного ресурса с PSD макетами для тренировки. В проекте используются только HTML и CSS',
    img: mogoImage,
    link: 'https://thevenyear.github.io/MoGo/',
  },
];

export default items;
