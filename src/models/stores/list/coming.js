import { getComing } from '@/api/movie';
import Base from './base';

export default new Base('/coming', getComing);
