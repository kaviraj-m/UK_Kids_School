import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ukkidsschool.app',
  appName: 'UK Kids School',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
