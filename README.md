# React Native Guessing Game

![mockup](./mockup.jpeg 'mockup')

## Description

This is a guessing game iOS application built with [React Native](https://reactnative.dev/) and [Expo](https://docs.expo.dev/).

The goal is simple: input a number between 1 and 100, and the app will try to guess it. You provide feedback on whether the guess is higher or lower than your number, and the game adjusts its guesses accordingly, powered by a binary search algorithm.

> Note: Thanks to the binary search algorithm, the number will be guessed in no more than 7 tries. The game also tracks and displays the number of attempts it took to arrive at the correct answer, offering real-time feedback during gameplay.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the app
4. Scan the QR code with the Expo Go app on your phone or run the app on an emulator
5. Run `i` to open the app on an iOS simulator or `a` to open the app on an Android emulator
6. Run `r` to restart the app
7. Enjoy the game!

> Tip: If you prefer, you could also directly run the simulator by running `npm run ios` or `npm run android` instead of running `npm start`

## Resources

- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## License

- [MIT](LICENSE.md)
