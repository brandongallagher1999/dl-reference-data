import ReferenceDataService from './src/app';
import { logger } from './src/logger';

ReferenceDataService.listen(5678, () => {
  logger.info('DL Reference data service listening on port 5678!');
});
