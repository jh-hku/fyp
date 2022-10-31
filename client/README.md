install Xcode
install AndroidStudioCode

https://reactnative.dev/docs/environment-setup --> Refer to this guide for detailed steps

brew install node 
brew install watchman

# Install correct version of Ruby first
brew install rbenv ruby-build
rbenv install 2.7.5

# Go to the client dir and set local ruby version
rbenv local 2.7.5
rbenv init

# Intsall JDK for Android, make sure SDK 12 also installed
brew tap homebrew/cask-versions
brew install --cask zulu11

# Initialize front end library (SKIP THIS STEP IF FOLDER CLIENT ALREADY THERE)
npx react-native init client

# START FROM HERE TO RUN THE APP
npm install
### Run metro in a separate terminal
npx react-native start

### Create a new terminal in the same folder (to run iOS)
npx react-native run-ios

### Create a new terminal in the same folder (to run Android)
npx react-native run-android

