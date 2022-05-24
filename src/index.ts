export * from './definitions';
export * from './web';


import { registerPlugin } from '@capacitor/core';

import type { PushKitPlugin } from './definitions';

const PushKit = registerPlugin<PushKitPlugin>('PushKit', {
  web: () => import('./web').then(m => new m.PushKitWeb()),
});

export * from './definitions';
export { PushKit };
