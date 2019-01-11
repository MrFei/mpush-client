import { getMonitor } from '@/api/movie';
import Base from './base';

export default new Base('/monitor', getMonitor);
