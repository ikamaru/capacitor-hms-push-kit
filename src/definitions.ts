export interface PushKitPlugin {
  getToken(): Promise<{ token: string }>;
  subscribe(options: { topic: string }): Promise<void>;
  unsubscribe(options: { topic: string }): Promise<void>;

}
