//Author: Isaac Smith
//Version: 6/27/2020
//Twitter bot that tweets 'Make a wish!' at 11:11pm each night

console.log('Hello. I love you!');

var Twit = require('twit');

var config = require('./config');
console.log(config);
var T = new Twit( config );

//
//  tweet 'Make a wish!
//
function tweetIt() {
    T.post('statuses/update', { status: `Make a wish!` }, function(err, data, response) {
        console.log(data);
    });
	setInterval(tweetIt, 1000*60*60*24);	//Do it again in 24 hours
}

//Call tweetIt at 11:11pm
var now = new Date();
//Subtract the current time from the time I want the bot to tweet (11:11pm)
//The Heroku server is two hours fast so set the time I want
var difference = new Date(now.getFullYear(), now.getMonth() ,now.getDate(), 01, 11, 05, 0) - now;
if(difference < 0) {
	difference += 86400000;	//It's after 11:11pm so do it tommorow
}
console.log(now);
console.log(difference);
setTimeout(tweetIt, difference);





