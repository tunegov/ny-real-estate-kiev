import axios from './index';

import { API_HOST_URL, lang, ADMIN_USER_ID } from '@constants/index';

export const sendMessageToEmail = async (message: string, email?: string) => {
  try {
    const body = {
      user_id: ADMIN_USER_ID,
      sendToEmail: '1',
      message,
      email,
    };

    return await axios.post('/api/send_message', body);
  } catch (err) {
    console.error(err);
  }
};
