import express from 'express';
import request from 'request';

import bot from './telegraf';
import { getAll } from '../datastore/chanels';

import { API_HOST_URL, lang } from '../constants';

const ApiController = express.Router();

ApiController.post('/get_subway', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_geo/getSubway`,
    {
      formData: req.body,
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

ApiController.post('/get_districts', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_geo/getDistricts`,
    {
      formData: req.body,
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

ApiController.post('/search', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_serp/search`,
    {
      formData: req.body,
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

ApiController.post('/send_message', async (req, res) => {
  try {
    const channels = await getAll();

    channels.forEach(async (channel) => {
      await bot.telegram.sendMessage(channel.chatID, req.body.message);
    });
    res.send({});
  } catch (e) {
    res.send({});

    console.log(e);
  }
});

ApiController.post('/view', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_view/view`,
    {
      formData: req.body,
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

export default ApiController;
