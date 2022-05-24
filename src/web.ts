import { WebPlugin } from '@capacitor/core';
import type { PushKitPlugin } from './definitions';

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

}

