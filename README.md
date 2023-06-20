# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to use the app

On the top right corner, you can see an burger icon which offers you differents possibilites, such as login / register, take a look at your watchlist when you're logged in, but also filter the contents depending on their disponibilites on VOD Services (Disney, MyCanal, Netflix, Paramount...)

You can also click on a content to discover the detail page, where you can play the content trailer.

All this website have been done with react, a mongodb / express / node based backend, and tailwind library to make the css more faster to use.

Please note that tailwind is not a component library, but an easier and faster way to add style to the DOM Objects. Indeed, all the components have been done by the hand.

## Remarks

This website is considered as POC (Proof Of Concept) which means that all the functionnalities which can be necessary for the user, can not be implemented at the moment. The point is the same concerning the contents available on the website. Each content have been added by the hand following native applications. The goal is to show a platform where every VOD Services can be grouped, and where the user can enjoy the single app for all the content.

## Disclaimer

Before creating an account on the website, be careful NOT TO USE NEITHER a real password NOR a real Email. Security hasn't been done yet so leaks could append. Please take note of this disclaimer for your security.

## Functionnalities List

### `App Page`
You can filter content available on the plateform, by going to the menu and choosing the VOD Service that you want. Imagine clicking on the AppleTV+ Icon, you will directly go to the AppleTV+ page where you will find available contents.
We haven't the data to create each pages yet, but content will be added day by day, to make this site, closer to the final result.

### `Detail Page`
By clicking on a content, you will be redirect to the detail page of the content where you will find differents information such as the title, the distribution, the release date, the IMDb grade, the specifications concerning the quality and the technologies that are available (dolby atmos, dolby vision, hdr...). You can also find a short description of the content.
Finally, you have 4 CTA :
    - The First one is working and can be used to play the trailer in fullscreen
    - The Second one is working and can be used to add this content to your watchlist
    - The Third and Fourth one are not working, but are supposed to be used to like or dislike the content

### `Watchlist Page`
The Watchlist page is a page where all content that have been added by the user to this list can be found.
Imagine going to avatar movie and clicking on the Plus CTA. The user will be able (if he's connected to an account), to find the movie directly on this page

### `Admin Page`
An Admin page have been created, where administrators can add content to the database to populate it. You can create a movie, which can after that be added to a row, and this row can be added to a page.

### `Search Bar`
The search bar is a really useful feature, where the user can look for a content just by typing it's title in the search bar. Please note that you have to write at least 2 characters, to begin the search. You can also click on a result to go to it's detail page
