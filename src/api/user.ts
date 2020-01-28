import axios from './index';

import { API_HOST_URL, lang, ADMIN_USER_ID } from '@constants/index';

export const sendMessageToEmail = async (
  title: string,
  message: string,
  email?: string
) => {
  const url = `${API_HOST_URL}/${lang}/API_user/sendMessage`;
  try {
    const body = {
      user_id: ADMIN_USER_ID,
      sendToEmail: '1',
      title,
      message,
      email
    };
    const { data } = await axios.post(url, body);

    return data;
  } catch (err) {
    console.error(err);
  }
};
