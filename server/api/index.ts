import express from 'express';
import { API_HOST_URL, lang } from '../constants';

const ApiController = express.Router();

import request from 'request';

ApiController.post('/get_subway', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_geo/getSubway`,
    {
      formData: req.body
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
      formData: req.body
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
      formData: req.body
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

ApiController.post('/send_message', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_user/sendMessage`,
    {
      formData: req.body
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

ApiController.post('/view', (req, res) => {
  request.post(
    `${API_HOST_URL}/${lang}/API_view/view`,
    {
      formData: req.body
    },
    (err, resp, body) => {
      res.send(body);
    }
  );
});

export default ApiController;
