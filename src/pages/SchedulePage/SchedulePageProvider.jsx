import React from 'react';
import SchedulePage from './SchedulePage';
import itemImage from '../../assets/images/Rectangle 4newMoviesPhoto1.jpg';

const schedule = [
{
  id: 1,
  title: 'Понеділок',
  items: [
    {
      id: 17,
      name: 'Мені, який тебе кохав',
      type: 'Фільм',
      status: 'Вийшов',
      genre: ['Романтика', 'Фантастика'],
      studio: 'TMS Entertainment',
      createdAt: 'Осінь 2022',
      rating: '5/5',
      description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
      duration: '1 год 42 хв',
      voicing: 'ojoy',
      mainPhotoUrl: itemImage,
      photos: [],
      episods: 1,
      videoUrl: '',
    },
    {
      id: 20,
      name: 'Людина бензопила',
      type: 'Серіал',
      status: 'Вийшов',
      genre: ['Демони', 'Пригоди', 'Надприроднє', 'Сьонен', 'Фентезі', 'Екшен'],
      studio: 'MAPPA',
      createdAt: 'Осінь 2022',
      rating: '5/5',
      description: 'Дендзі доводиться повністю змінити своє життя, щоб відпрацювати непомірні борги батька. Він стає підручним якудзи у нелегкій справі знищення демонів. На другий план відійшли не лише сон та відпочинок, а й спілкування з коханою дівчиною. Тільки диявольський вихованець-помічник Почита вносить трохи різноманітності до низки кривавих буднів. Тепер у Дендзі лише одна мета – гроші, тільки в них він бачить шанс на визволення. Бажаючи швидше отримати прибуток, хлопець забуває про обережність і в одній із сутичок гине. Вірний Почіто рятує господаря, злившись з ним і давши здатність часткового перетворення на бензопилу.',
      duration: '24 хв',
      voicing: 'ojoy',
      mainPhotoUrl: itemImage,
      photos: [],
      episods: 12,
      videoUrl: '',
    },
    {
      id: 19,
      name: 'Мені, який тебе кохав',
      type: 'Фільм',
      status: 'Вийшов',
      genre: ['Романтика', 'Фантастика'],
      studio: 'TMS Entertainment',
      createdAt: 'Осінь 2022',
      rating: '5/5',
      description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
      duration: '1 год 42 хв',
      voicing: 'ojoy',
      mainPhotoUrl: itemImage,
      photos: [],
      episods: 1,
      videoUrl: '',
    },
  ]

},
  {
    id: 2,
    title: 'Вівторок',
    items: [
      {
        id: 17,
        name: 'Мені, який тебе кохав',
        type: 'Фільм',
        status: 'Вийшов',
        genre: ['Романтика', 'Фантастика'],
        studio: 'TMS Entertainment',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
        duration: '1 год 42 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 1,
        videoUrl: '',
      },
      {
        id: 20,
        name: 'Людина бензопила',
        type: 'Серіал',
        status: 'Вийшов',
        genre: ['Демони', 'Пригоди', 'Надприроднє', 'Сьонен', 'Фентезі', 'Екшен'],
        studio: 'MAPPA',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Дендзі доводиться повністю змінити своє життя, щоб відпрацювати непомірні борги батька. Він стає підручним якудзи у нелегкій справі знищення демонів. На другий план відійшли не лише сон та відпочинок, а й спілкування з коханою дівчиною. Тільки диявольський вихованець-помічник Почита вносить трохи різноманітності до низки кривавих буднів. Тепер у Дендзі лише одна мета – гроші, тільки в них він бачить шанс на визволення. Бажаючи швидше отримати прибуток, хлопець забуває про обережність і в одній із сутичок гине. Вірний Почіто рятує господаря, злившись з ним і давши здатність часткового перетворення на бензопилу.',
        duration: '24 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 12,
        videoUrl: '',
      },
      {
        id: 19,
        name: 'Мені, який тебе кохав',
        type: 'Фільм',
        status: 'Вийшов',
        genre: ['Романтика', 'Фантастика'],
        studio: 'TMS Entertainment',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
        duration: '1 год 42 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 1,
        videoUrl: '',
      },
    ]

  },
  {
    id: 3,
    title: 'Середа',
    items: [
      {
        id: 17,
        name: 'Мені, який тебе кохав',
        type: 'Фільм',
        status: 'Вийшов',
        genre: ['Романтика', 'Фантастика'],
        studio: 'TMS Entertainment',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
        duration: '1 год 42 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 1,
        videoUrl: '',
      },
      {
        id: 20,
        name: 'Людина бензопила',
        type: 'Серіал',
        status: 'Вийшов',
        genre: ['Демони', 'Пригоди', 'Надприроднє', 'Сьонен', 'Фентезі', 'Екшен'],
        studio: 'MAPPA',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Дендзі доводиться повністю змінити своє життя, щоб відпрацювати непомірні борги батька. Він стає підручним якудзи у нелегкій справі знищення демонів. На другий план відійшли не лише сон та відпочинок, а й спілкування з коханою дівчиною. Тільки диявольський вихованець-помічник Почита вносить трохи різноманітності до низки кривавих буднів. Тепер у Дендзі лише одна мета – гроші, тільки в них він бачить шанс на визволення. Бажаючи швидше отримати прибуток, хлопець забуває про обережність і в одній із сутичок гине. Вірний Почіто рятує господаря, злившись з ним і давши здатність часткового перетворення на бензопилу.',
        duration: '24 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 12,
        videoUrl: '',
      },
      {
        id: 19,
        name: 'Мені, який тебе кохав',
        type: 'Фільм',
        status: 'Вийшов',
        genre: ['Романтика', 'Фантастика'],
        studio: 'TMS Entertainment',
        createdAt: 'Осінь 2022',
        rating: '5/5',
        description: 'Коемі розуміє, що має залишитися з батьком, адже той займається науковими проектами. Прийнявши своє рішення, головний герой тепер потрапляє до багатьох подій, і знайомиться з гарною молодою дівчиною Шіорі. Коемі починає спілкуватися з нею і поступово зближується. Любовні почуття стають тільки сильнішими з кожним днем, і поступово головний герой думає про зустріч із Шіорі. Однак, молодий хлопець навіть уявити не міг, що батько одружується на матері Шіорі і тепер вони будуть родичами. Це вносить проблеми у життя головного героя, але так починаються певні пригоди.',
        duration: '1 год 42 хв',
        voicing: 'ojoy',
        mainPhotoUrl: itemImage,
        photos: [],
        episods: 1,
        videoUrl: '',
      },
    ]
  },
  {
    id: 4,
    title: 'Четвер',
    items: [],
  },
  {
    id: 5,
    title: 'П\'ятниця',
    items: [],
  },
];
const SchedulePageProvider = () => {
  return (
    <SchedulePage schedule={schedule}/>
  );
};

export default SchedulePageProvider;