// Logger Helper
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// Пример использования в логике на компонентах:
// this.log(`App', `/methods/ckeckRoute: ', this.$route.name);

// Пример использования в других сервисах или в модулях Vuex:
// import { Logger } from '@/utils/logger';
// ...
// И в логике:
// Logger.log(`Store`, `layout.js/setLayoutState action: ', payload);

const paddy = (num, padlen = 4, padchar = '0') => {
  var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
  var pad = new Array(1 + padlen).join(pad_char);
  return (pad + num).slice(-pad.length);
};

// VUE_APP_DEBUG in .env
const debug =
  process.env.NODE_ENV === 'production'
    ? false
    : Number(process.env.VUE_APP_DEBUG) === 1
    ? true
    : false;

const namespacesOn = ['Content'];

export class Logger {
  static _counter = 0;

  static log = (namespace, ...messages) => {
    if (debug && namespacesOn.includes(namespace)) {
      ++this._counter;
      messages.forEach((message, index) => {
        try {
          console.log(
            `${paddy(this._counter)}.${paddy(
              index + 1,
            )} / Logger.log / ${namespace}: `,
            JSON.parse(JSON.stringify(message)),
          );
        } catch (err) {
          console.log(
            `${paddy(this._counter)}.${paddy(
              index + 1,
            )} / Logger.log / ${namespace}: `,
            message,
          );
        }
      });
    }
  };
}

export default {
  /* eslint-disable no-unused-vars */
  install(Vue, options) {
    Vue.prototype.log = Logger.log;
  },
};
