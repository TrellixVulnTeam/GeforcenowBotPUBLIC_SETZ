console.log("Tweeting");

var Twit = require('twit')

var T = new Twit({
 consumer_key:         'REPLACEME',
 consumer_secret:      'REPLACEME',
 access_token:         'REPLACEME-REPLACEME',
 access_token_secret:  'REPLACEME',
 timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

var hoursWithout = 1;
var tweet;

var intro = ["I need #GeForceNOW ", "I want #GeForceNOW ", "I NEED a #GeForceNOW code ", "I herby demand a #GeForceNOW code "];
var connector = ["because ", "as ", "on the grounds that ", "for the reason that ", "since ", "considering "]
var middle = ["my graphics card is worth less than a packet of crisps. ", 
"my laptop manufacturer forgot to add a graphics card. ", 
"my great-great-great aunt wants to play PUBG. ", 
"I am required by law to have access to PUBG on my laptop at all times. ", 
"@realDonaldTrump personally requested that I have access to the Beta ASAP. #MakeGeforceNowGreatAgain. ",
"it could help prevent World War 3. I don't have time to explain why, but it's the truth. ",
"I WANT IT DAMN IT. ",
"I went to the effort of making this bot for you guys, and it took me and my friend at least 30 minutes to build, if not more. ",
"I don't even believe it's real and the only way to convince me is by giving me a code. ",
"I heard a rumor that my Dad plays PUBG and I haven't seen him since he went to get milk 12 years ago. ",
"Perhaps if I get a #ChickenDinner in PUBG my Mum will finally love me. ",
"Minesweeper just ain't cutting it anymore, I completed the story 17 times now. ",
"I heard a rumour that PlayStation Now was better, and I can't deny it until I've tried #GeForceNOW. ",
"PUBG looks like Crossy Road on my rig. ", 
"I wanna be the next @ElonMusk so I need Kerbal Space Program to run at top speed. ", 
"my friends call me names because I can't run Minecraft. ", 
"I can only play #ROBLOX and I've started seeing my family's faces in 2D. ", 
"my Twitch streams look like slideshows.", 
"my brother is my mom's favourite and if I can beat him on Fortnite mom said I don't have to sit under the table at dinner. ", 
"I want to experience what it's like to roam free in the wilderness again. #PUBG #PrisonLAD. ", 
"I'm barred from driving and miss speeding down school zones, so I need #TruckDrivingSimulator. ",
"my mom beats me with jumper cables and Goat Simulator helps me calm down. ",
"I used to be a surgeon until I got fired so I want to relive my old memories with Surgeon Simulator. ",
"I can't play Portal so I have to resort to kicking holes in the drywall and jumping through. ",
"the sense of giving a gift to someone is much greater than that of recieving one, so I thought you'd want a chance to experience that. ",
];
var end = ["#IWantMyGeForceNOW #GeForceNowBOT"];

sendTweet();

function sendTweet() {

    tweet = " ";

    console.log("Generating Tweet...");

    var introLength = intro.length;
    var connectorLength = connector.length;
    var middleLength = middle.length;
    var endLength = end.length;

    console.log("Intro Length: " + introLength);
    console.log("Connector Length: " + connectorLength);
    console.log("Middle Length: " + middleLength);
    console.log("End Length: " + endLength);

    var introChoice = Math.floor(Math.random() * introLength);
    var connectorChoice = Math.floor(Math.random() * connectorLength);
    var middleChoice = Math.floor(Math.random() * middleLength);
    var endChoice = Math.floor(Math.random() * endLength); 

    var tweetDecision = Math.floor(Math.random() * 9);

    console.log("Chosen Numbers: " + introChoice + ", " + connectorLength + ", " + middleChoice + ", " + endChoice + ".");

    tweet = ".@NvidiaGFN " + intro[introChoice] + connector[connectorChoice] + middle[middleChoice] + end[endChoice];

    var tweetLength = tweet.length;

    if(tweetLength < 280 && tweetDecision == 7) {
      console.log("GeForceNowBot will Tweet: " + tweet + " in 30 seconds...");
      var twirlTimerDelay = (function() {
          var P = ["\\", "|", "/", "-"];
          var x = 0;
          return setInterval(function() {
            process.stdout.write("\r" + "GeForceNowBot is preparing to Tweet...   " + P[x++] + "\r");
            x &= 3;
          }, 250);
        })();
      setTimeout(function() {        
          T.post('statuses/update', { status: tweet }, function(err, data, response) {
              var d = new Date();
              var hours = d.getHours(); 
              var minutes = d.getMinutes();
              var seconds = d.getSeconds();
              console.log("GeForceNowBot just Tweeted: " + tweet + " | Tweeted at: " + hours + ":" + minutes + " (UTC)");
          })
          clearInterval(twirlTimerDelay)
        }, 3000);
    }
    else {
      console.log("Tweet too big!");
      sendTweet()
    }
}



