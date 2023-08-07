// import Vue from 'vue';
// import VueI18Next from '@panter/vue-i18next';
// import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// Vue.use(VueI18Next);

// i18next.use(LanguageDetector).init({
//   fallbackLng: 'ru', // Default fallback language
//   resources: {
//     en: {
//       translation: {
//         // Your English translations here
//       },
//     },
//     ru: {
//         header: {
//             quickoffice: 'Наш главный <br>офис: <i><a href="https://goo.gl/maps/Ydmkt3j1Z1PnpCM1A?coh=178571&entry=tt">ул. Ливиу Деляну 13 (4-й этаж), Кишинев, Республика Молдова</a></i>',
//             callus: 'Позвоните нам',
//             location: 'Местонахождение',
//             dropdown: 'Язык'
//         },

//         maincontent: {
//             slogan: 'Следуй своей <br><span class="hard-ru">мечте</span> вместе с нами',
//             intro: 'Транспортная компания Boekestijn была основана в 1994 году в Милле, Нидерланды. В то время на дороге было три грузовика Boekestijn, а на данный момент компания выросла на маршруте более чем на 900 грузовиков. Мы - компания с более чем 25-летней историей на рынке международных перевозок и логистики в Европе, базирующаяся в 8 странах и имеющая команду из более чем 1500 сотрудников. <br><br><br>',
//             joinus: 'Присоединяйтесь к нам',
//             scrolldown: 'Пожалуйста, прокрутите вниз',
//             city: 'Кишинэу',
//             day: 'Понедельник-Вторник',
//             str: 'ул. Петрэрией 19',
//             callnow: 'Позвоните нам!',
//             city1: 'Варница',
//             day1: 'Вторник и Четверг',
//             str1: 'ул. Тигина 66',
//             city2: 'Бэлць',
//             day2: 'Суббота',
//             str2: 'ул. Штефан чел Маре 195',
//         },

//         testdrivemobile: {
            
//         }
//     },
//     ro: {
//       translation: {
//         // Your Romanian translations here
//       },
//     },
//   },
// });

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  data() {
    return {
      headerText: 'Welcome to My Website',
      aboutText: 'About Us',
      contactText: 'Contact Us',
      englishText: 'English',
    };
  },
  render: (h) => h(App),
});

app.$mount('#app');
