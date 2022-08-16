import pino from 'pino';

export const logger = pino({
  name: 'Sage',
  level: 'debug'
});
