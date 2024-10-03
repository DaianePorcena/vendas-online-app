export const removeSpecialCharacteres = (value: string): string => {
  return value.replace(/\D/g, '');
};
