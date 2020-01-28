import { convertBody, handleResponse } from './index';

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

    const response = await handleResponse(
      fetch(url, {
        body: convertBody(body, true),
        method: 'POST',
        mode: 'no-cors'
      })
    );

    return response;
  } catch (err) {
    console.error(err);
  }
};
