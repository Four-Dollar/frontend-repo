import { setupWorker } from 'msw';
import { listingHandlers } from './hanlders';
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...listingHandlers);
