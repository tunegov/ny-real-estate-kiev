import Telegraf from 'telegraf';
import { TELEGRAM_BOT_API_KEY } from '../constants';
import { insert } from '../datastore/chanels';

const bot = new Telegraf(TELEGRAM_BOT_API_KEY);

bot.start((ctx) => {
  ctx.reply('Welcome!');

  insert(Number(ctx.chat?.id));
});

bot.help((ctx) =>
  ctx.reply('Я отправляю все уведомления что приходят с сайта')
);

// bot.launch();

export default bot;
