// import HomepageTypes from './homepage.types';

const contactsArr = [
  {
    href: 'mailto:moshe.mn86@gmail.com',
    icon: 'fa fa-envelope',
    type: 'Email',
    username: 'moshe.mn86@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/moshe-mantsur-33b340146/',
    icon: 'fa fa-linkedin-square',
    type: 'LinkedIn',
    username: 'Moshe Mantsur',
  },
  {
    href: 'https://www.facebook.com/moshe.mantsur/',
    icon: 'fa fa-facebook-square',
    type: 'Facebook',
    username: 'Moshe Mantsur',
  },
  {
    href: 'https://github.com/moizes86',
    icon: 'fa fa-github-square',
    type: 'Github',
    username: 'moizes86',
  },
];
const INITIAL_STATE = {
  sectionsLinks: ['portfolio', 'cv', 'contact'],
  contacts: contactsArr,
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case HomepageTypes.WHATEVER:
    //     return {
    //         ...state
    //     }

    default:
      return state;
  }
};

export default homepageReducer;
