export const parseImg = (uri: string) => {
  return 'https://' + uri.replace('//', '');
};
