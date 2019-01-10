import { getGood } from '@/api/movie';
import Base from './base';

export default new Base('/good', getGood);
