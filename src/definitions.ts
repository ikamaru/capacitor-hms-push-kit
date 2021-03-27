declare module '@capacitor/core' {
  interface PluginRegistry {
    PushKit: PushKitPlugin;
  }
}

export interface PushKitPlugin {
  getToken(): Promise<{ token: string }>;
  subscribe(options: { topic: string }): Promise<void>;
  unsubscribe(options: { topic: string }): Promise<void>;

}
