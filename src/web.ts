import { WebPlugin } from '@capacitor/core';
import { PushKitPlugin } from './definitions';

export class PushKitWeb extends WebPlugin implements PushKitPlugin {
  constructor() {
    super({
      name: 'PushKit',
      platforms: ['web'],
    });
  }
  async getToken(): Promise<{ token: string }>{
    throw new Error('Not supported in the Web.');
  }
  async subscribe(_options: { topic: string; }): Promise<void> {
    throw new Error('Not supported in the Web.');
  }
  async unsubscribe(_options: { topic: string; }): Promise<void> {
    throw new Error('Not supported in the Web.');
  }

  /* async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  } */
}

const PushKit = new PushKitWeb();

export { PushKit };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PushKit);
