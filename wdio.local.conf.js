const localConfig = {
    capabilities: [
      {
        platformName: 'Android',
        'appium:deviceName': process.env.DEVICE_NAME || 'CPH1937', // Use your real device name
        'appium:udid': process.env.UDID || '93bb1813', // Use your real device UDID
        'appium:app': '/Users/t/Desktop/amr/project-root/apps/app-release-v15-0.3.2-2024-12-25-18-13.apk', // Path to your local APK
        'appium:appPackage': 'com.willma.client.staging',
        'appium:appActivity': 'com.willma.client.staging.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 120,
        'appium:autoGrantPermissions': true,
        'appium:ignoreHiddenApiPolicyError': true,
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:skipDeviceInitialization': true,
        'appium:skipServerInstallation': true,
        'appium:skipUnlock': false,
      },
    ],
  };
  
  exports.config = { ...require('./wdio.conf.js').config, ...localConfig };