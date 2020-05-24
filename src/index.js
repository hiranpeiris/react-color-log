import { COLORS } from './constants';

export const _success = (msg) => {
  console.log(`%c${msg}`, `color:${COLORS.SUCCESS};`);
  return 'success';
};

export const _info = (msg) => {
  console.log(`%c${msg}`, `color:${COLORS.INFO};`);
  return 'info';
};

export const _warning = (msg) => {
  console.log(`%c${msg}`, `color:${COLORS.WARNING};`);
  return 'warning';
};

export const _error = (msg) => {
  console.log(`%c${msg}`, `color:${COLORS.ERROR};`);
  return 'error';
};
