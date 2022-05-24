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

}

//const PushKit = new PushKitWeb();
//registerPlugin(PushKit);



import { registerPlugin  } from '@capacitor/core';


const PushKit = registerPlugin<PushKitPlugin>('PushKit', new PushKitWeb());

export { PushKit };
