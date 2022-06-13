# Midnight Cat Cafe

## Description 
An e-commerce website for a small business/fictional cafe called the Midnight Cat Café.

On the home page, users will see a photo on the main body of the page and introduction about the cafe. 
The home page also has a navbar that allows users to navigate to the Shopping page, Create an Event page, Menu, and Signup page.
<p>
    <img src="https://img.shields.io/github/repo-size/jvbridge/midnight-cat-cafe" />
    <img src="https://img.shields.io/badge/react-orange" />
    <img src="https://img.shields.io/badge/Express-blue"  />
</p>

![Top Language](https://img.shields.io/github/languages/top/jvbridge/midnight-cat-cafe)


## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Github Repo Link](#github-repo-link)
- [Authors](#authors)
- [License](#License)

## Installation

To run a local development copy, you are required to have installed 
[Node.js](https://nodejs.org/), and [Mongo DB](https://www.mongodb.com/). 

Download the repository. After downloading run `npm run install` in the root 
directory of the repository. It is also recommended for you to run 
`npm run seed` in order to seed your mongo database with some dummy data for
events. 

Once those are done, you can see the development environemnt by running 
`npm run develop` in the root directory. This will start two Node.js servers,
one running react, the other running an express server that uses Apollo Graphql
to serve as the back end. They are on `localhost:3000` and `localhost:3001` 
respectively.


## Usage

The app itself acts like a website for a small store-front cafe. There tabs for
the menu, purchasing merchandise, events, and making an account to sign up for
said events. 

The Menu is simply a display of drinks and food items a cafe might sell, with
prices that are semi-reasonable. They also have images that can be dismissed by 
clicking/tapping on the red X in the upper left hand corner. 

The shopping/merch tab has ficitonal cat products to buy as well. Unlike the 
menu we've put in a fake "buy now" interface that uses 
[stripe](https://stripe.com/) as a payment system, but it doesn't actually do
anything with the information. 

The events are events linked to the cafe. They are held inside the database and
hold a list of users as the people who will frequent the event.

## Links

[Deployed Link](https://midnight-cat-cafe.herokuapp.com/)

[Github Repo for Midnight Cat Cafe](https://github.com/jvbridge/midnight-cat-cafe)

## Authors
Sienna
* [Github](https://github.com/siennameow)
* [LinkedIn](https://www.linkedin.com/in/hexuanli/)

Jonathan
* [Github](https://github.com/jvbridge)
* [LinkedIn](https://www.linkedin.com/in/jonathan-bridge/)

Lucca
* [Github](https://github.com/luccaloopz)
* [LinkedIn](https://www.linkedin.com/in/lucca-martins/)

Chaunny
* [Github](https://github.com/chaunnybby7)
* [LinkedIn](https://www.linkedin.com/in/chauntelleong/)

## License 

MIT License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2022] [Chaunny Ong, Sienna Li, Lucca Martins, Jonathan Bridge]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
