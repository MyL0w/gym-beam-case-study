# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

sh
# Using npm
npm start

# OR using Yarn
yarn start


## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

sh
# Using npm
npm run android

# OR using Yarn
yarn android


### iOS

> **Important**: There is a known issue on iOS 18.4 that may affect app, causing network errors. See [React Native issue #50510](https://github.com/facebook/react-native/issues/50510) for more details and potential workarounds.

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

sh
bundle install


Then, and every time you update your native dependencies, run:

sh
bundle exec pod install


For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

sh
# Using npm
npm run ios

# OR using Yarn
yarn ios


If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode, which is recommended for production builds.

## Project Information: Gym Beam Shop App

This project was created for the Gym Beam interview. It's a shop application with the following login credentials:

- **Username**: jimmie_k
- **Password**: klein*#%*

Please use these credentials to access and test the application functionality.

### Screenshots

Screenshots can be found in `src/assets/screenshots`
