import isEqual from 'lodash.isequal';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createDeepSelector = createSelectorCreator(defaultMemoize, isEqual);
