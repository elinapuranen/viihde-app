## Viihde App

An app for displaying present television program data.

## Motivation

This app has been created as an answer to a pre-assignment.

## Screenshots

![Alt text](./app.png?raw=true "Screenshot")

## Tech/framework used

Built with 
* React.js

## Features

This app presents what is currently airing in Finnish television channels. It's program list includes the most common channels and Viasat channels. The view can be changed from common channels to Viasat channels with a button click. In addition to channel and program names the app shows short descriptions of the programs, when they have started and when they are ending.

## Installation

The app requires create-react-app, axios and antd packages which can be downloaded with npm.

```
npm install axios
```
## API Reference

The app uses data from Elisa Viihde REST API for currently live programs.
* [REST API](https://rest-api.elisaviihde.fi/rest/epg/schedule/live)