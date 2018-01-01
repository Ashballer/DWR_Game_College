imgPath = "";

//preloading all the images needed for the VN

var preload = [
	"DWR_Game/assets/mapDeltaLg.png",
	"DWR_Game/assets/Water-Acre-Feet-Illustration.jpg",
	"DWR_Game/assets/Delta_Inflow.png",
	"DWR_Game/assets/delta_background.jpg",
	"DWR_Game/assets/Capture.png",
	"DWR_Game/assets/CaptureYB.png",
	"DWR_Game/assets/CaptureSR.png",
	"DWR_Game/assets/CaptureCD.png",
	"DWR_Game/assets/CaptureSD.png",
	"DWR_Game/assets/smoltScript.gif",
	"DWR_Game/assets/Coleman_National_Fish_Hatchery.jpg",
	"DWR_Game/assets/Delta_cross_channel.jpg",
	"DWR_Game/assets/Fremont_Weir.jpg",
	"DWR_Game/assets/georgiana_slough.jpg",
	"DWR_Game/assets/Sutter_slough.jpg",
	"DWR_Game/assets/Three_mile_slough.jpg",
	"DWR_Game/assets/barrier_open.jpg",
	"DWR_Game/assets/YB.jpg",
	"DWR_Game/assets/SR.jpg",
	"DWR_Game/assets/ok.gif",
	"DWR_Game/assets/good.gif",
	"DWR_Game/assets/bad.gif",
	"DWR_Game/assets/deltaMap.jpg",
	"DWR_Game/assets/deltaMapSS.jpg",
	"DWR_Game/assets/deltaMapDC.jpg",
	"DWR_Game/assets/deltaMapGS.jpg",
	"DWR_Game/assets/deltaMapTS.jpg",
	"DWR_Game/assets/folsom_reservoir.png",
	"DWR_Game/assets/water_south.png",
	"DWR_Game/assets/shasta_reservoir.png",
	"DWR_Game/assets/oroville_reservoir.png",
	"DWR_Game/assets/intrusion6.png",
	"DWR_Game/assets/intrusion5.png",
	"DWR_Game/assets/intrusion4.png",
	"DWR_Game/assets/intrusion3.png",
	"DWR_Game/assets/intrusion2.png",
	"DWR_Game/assets/intrusion1.png",
	"DWR_Game/assets/game_steam.png",
	"DWR_Game/assets/banks_pumping.png",
];
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = imgPath + preload[i];
}

//declaring variables of JS-ViNE and my VN 

var narrator;
var inputArea;
var farmer;
var photo;
var upperCenter;
var right;
var left;
var topRight;
var center;
var topLeft;
var bottomLeft;
var inTheHatch;



function prepareNovel()
{
    
	//assigning and declaring variables
	
	novel.imagePath = "";
	novel.audioPath = "";
	center = new Position(0.5, 0.5, 0.5, 0.5);
	bottomLeft = new Position(0, 1, 0.1, 1);
	inTheHatch =  new Position(0.1, 0.6, 0, 1);
	topLeft = new Position(0.1, 0.5, 0, 1);
    narrator = new Character('');
	farmer = new Character('Bill');
	left = new Position(0, .75, 0, 1);
    right = new Position(800, 450, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    topRight = new Position(1, 0.1, 1, 0);
    inputArea = new Input('yourName',
        {
        position: new Position(0.2, 0.5),
        width: 0.5,
		text: ""
		});
		
	photo = new Character("");
    salmon = new Character("");
    
	//script contains all of the text and loads all images used in the VN
	
	script = [  
        
		//beginning state of the game
		
		label, "start",
        scene, "DWR_Game/assets/delta_background.jpg",
		narrator, "To play the game, click on the screen.",
        narrator, "DISCLAIMER, This game is intended solely for educational purposes. It should not be used to influence personal opinions.",
		narrator, "Hello! My name is James, and today I’ll be teaching YOU about the Delta. \n Before we start, why don’t you tell me a little bit about yourself?",
		
		//gathering input from the player to personalize experience
		
		narrator, "What's your name?",
		inputArea, "",
        
		narrator, "Oh, {{novel.userVar.yourName}}, nice to meet you!",
		narrator, "Before I let you choose your adventure, I think you need to learn a little bit about the water in California.",

		//describing background information about the Delta
				
		narrator, "The Sacramento-San Joaquin River Delta is a major collection point for water that serves more than 25 million people, or over two-thirds of our State’s population! It covers over 738,000 acres interlaced with hundreds of miles of waterways and provides a habitat for lots of animals including fish and birds.",
		narrator, "Now let's start with the game!",
		
		//giving player options which aspect of the State Water Project they want to learn about first
		
		narrator, "Today, you can explore the life of the fish, the storage and export, and water quality in the delta one by one, but it is very important to understand they are all related closely.",
		label, "ask", 
		menu, [
			"Would you like to learn about the life of fish?",
			"The Life of Fish", [ setVars, {delta: "fish" }, jump, "fishLife"],
			
		], 	
		 
		//starts scene that teaches about life of fish in the Delta
		
		label, "fishLife", 
		narrator, "Alright, let's learn about the fish then!",
		narrator, "The Delta has and always will be a vital area for all native and non-native fish in the ecosystem.",
		narrator, "Many native species of fish have become listed as endangered species. Here at the Bay-Delta office, we have a responsibility to protect them while they are in the Delta!",
		narrator, "“How do we do this?” Well! It’s not as simple as it may seem, but one way we protect the fish is to use different methods that help guide them towards safer migration routes.",
		
		narrator, "Before we start, there are a couple of things you should know to prepare yourself for this adventure.",
		scene, "DWR_Game/assets/Capture.png",
		narrator, "To help explain differences in survival routes for young salmon, let’s divide the Delta into five “survival areas” that fish can inhabit until they eventually reach the “survival finish line” near Three Mile Slough where they’ll go through the San Francisco Bay out towards the ocean.",
		narrator, "These five areas are: Yolo Bypass, Sacramento River, Central Delta, San Joaquin River, and South Delta. However, not all of them provide a safe habitat for the young salmon. ",
		scene, "DWR_Game/assets/CaptureYB.png",
		
		//loading images to assist in visualizing the text
		
		photo, {image: "DWR_Game/assets/good.gif", position: center},
		narrator, "The Yolo Bypass survival area is quite unique because it provides habitat that allows the fish to actually develop until they are much larger and more mature. However, even the fish in this area are prone to some predators, and eventually have to join the path towards the “survival finish line” near Three Mile Slough.",
		scene, "DWR_Game/assets/CaptureSR.png",
		photo, {image: "DWR_Game/assets/good.gif", position: center},
		narrator, "The Sacramento survival area generally provides a safer corridor for the fish to make good progress on their journey towards their final destination, but it does not provide many opportunities for them to grow. The upper regions of the Sacramento River are where the journey for the salmon usually starts as well.",
		scene, "DWR_Game/assets/CaptureCD.png",
		photo, {image: "DWR_Game/assets/ok.gif", position: center},
		narrator, "The Central Delta and San Joaquin River survival area have similar fish survival rates. Although the survival rates of the fish in these areas are not as high as the Yolo Bypass and Sacramento River areas, they are still habitable. However, fish that travel through the Central Delta and San Joaquin River areas usually spend much more time getting to the “survival finish line”.",
		scene, "DWR_Game/assets/CaptureSD.png",
		photo, {image: "DWR_Game/assets/bad.gif", position: center},		
		narrator, "Finally, the South Delta survival area is the least habitable place for young salmon due to many factors such as: longer migratory channels, pump intakes, warmer water, and the large amount predators lurking around every corner. If fish unfortunately get stuck in this area, their chance of survival is slim.",
		
		//transitions to the beginning of the fish journey in the Delta, thus starting interactive part of the game
		
		scene, "DWR_Game/assets/Coleman_National_Fish_Hatchery.jpg",
		salmon, {image: "DWR_Game/assets/smoltScript.gif", position: inTheHatch},
		narrator, "Traveling hundreds of miles, let’s join some young Chinook salmon on their journey from the Coleman National Fish Hatchery, through the Delta and to the ocean as they make crucial decisions and dodge omnipresent predators.",
		narrator, "As the hatched salmon grow at the Coleman National Fish Hatchery, they travel downstream until they encounter the first major checkpoint.",
		scene, "DWR_Game/assets/Fremont_Weir.jpg",
		narrator, "This first obstacle the baby salmon have to overcome is the Fremont Weir. Now, you may be wondering what a weir is, but don’t worry, I’m here to help teach you about it!",
		narrator, "A weir is a low dam built across a river to raise the level of water upstream or to regulate flow. We utilize the Fremont Weir in a similar way. It allows the Yolo Bypass to flood with water from the Sacramento River to prevent flooding of populated areas other side of the river.",
		
		//giving player 2 choices to choose, the game branches off into two parts depending on what path is chosen
		
		narrator, "When the water level in the Sacramento River is high enough to flow over the Fremont Weir, the young salmon will have a choice to either enter the Yolo Bypass or stay in the Sacramento River area.",
		label, "ask",
		menu, [
			"Which one do you want the salmon to go through?",
			"Yolo Bypass", [jump, "bypass"],
			"Sacramento River", [jump, "sRiver"],
		],
		
		//Yolo Bypass scenario
		
		label, "bypass",
		scene, "DWR_Game/assets/YB.jpg",
		narrator, "The young salmon in the Yolo Bypass are able to thrive off of the natural environment which contains plenty of food and shelter. Thus, the salmon in the Yolo Bypass grow much larger than the young salmon that travel straight towards the ocean.",
		narrator, "Eventually the salmon in the Yolo Bypass have to travel towards the ocean as well. Although they may be larger and stronger than the salmon primarily traveling through the Sacramento River, they still have a similar chance for survival in the Delta.",
		narrator, "Now, let’s try to achieve the end goal for the salmon, and get them out to sea!",
		jump, "sRiver4",
		
		//Sacramento River scenario
		
		label, "sRiver",
		scene, "DWR_Game/assets/SR.jpg",
		narrator, "The young salmon continue on their path in the Sacramento River which is quick, but also poses several threats.",
		narrator, "These salmon always have to be aware of natural predators as well as other obstacles. We at the Bay Delta Office try to help the young salmon take a less risky path, but they have to make these life-changing decisions on their own.",
		scene, "DWR_Game/assets/Sutter_slough.jpg",
		narrator, "Two examples of this are Steamboat and Sutter Slough. These sloughs are branches of the Sacramento River that have some natural marsh or swamp-like areas connecting on the sides.",
		narrator, "Both sloughs are a separate path leading towards the ocean in comparison to staying in the Sacramento River. However, whether the salmon decide to continue their journey through Steamboat and Sutter Slough, or stay in the Sacramento River, the chance for survival remains fairly similar.",
		narrator, "This is because the salmon are prone to the same threats in both paths such as predators and weather conditions!",
		narrator, "It looks like the salmon have decided to stay in the Sacramento River!",
		narrator, "If the salmon are able to survive throughout the beginning portion of their adventure, they will eventually come across a major intersection, the Delta Cross Channel.",
		scene, "DWR_Game/assets/Delta_cross_channel.jpg",
		narrator, "The Delta Cross Channel is a facility that allows the water to be diverted from the Sacramento River towards the Central and South Delta to improve the quality of water exported from the Delta. Operated by the CA Department of Water Resources and the U.S. Bureau of Reclamation, the Delta Cross Channel is a short channel with two radial gates that, when open, allows water from the Sacramento River to flow through.",
		narrator, "The Cross Channel functions by either closing the gates which does not divert the flow of water in the Sacramento River, or opening the gates which allows the water from the Sacramento River to flow directly into the Central and South Delta.",
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		label, "ask",
		menu, [
			"With the information provided, would you like to have the gates open or closed?",
			"Open", [jump, "open"],
			"Closed", [jump, "closed"],
		], 
		
		label, "open",
		narrator, "Hmm, if we open the gates, there is a good chance then the salmon will be diverted as well! If they are pushed towards the South Delta survival area they have a VERY small chance of surviving. Remember, in the South Delta there are a vast amount of different factors that can contribute to their death such as: longer migratory channels, pump intakes, warmer water, and the deadly predators. I don’t think opening the gate will work.",
		menu, [
			"With the information provided, would you like to have the gates open or closed?",
			"Closed", [jump, "closed"],
		], 
		
		label, "closed",
		narrator, "Hmm, if we close the gates, the salmon won’t be diverted towards the South Delta meaning they will have a much higher chance of survival because they have a shorter migration path, cooler water, and less predators staying in the Sacramento River instead of going through the Delta Cross Channel. Good decision!",
		narrator, "Usually, the gates, operated by U.S Bureau of Reclamation in coordination with DWR, are closed during the winter/spring due to it being the time period when young salmon, are likely to migrate. We want to save as many of these young salmon as possible, so we try to do everything in power to accomplish that goal.",
		narrator, "Now, the salmon travel along the Sacramento River until they reach the next obstacle in their path to the ocean, Georgiana Slough.",
		scene, "DWR_Game/assets/georgiana_slough.jpg",
		narrator, "Although the Georgiana Slough is an important natural channel which provides habitat for many species of birds, fish, and other wildlife as well as a popular spot for recreational boats, it usually is not the best choice for young salmon. It is a longer path to the ocean, provides a greater chance for young salmon to deviate toward the South Delta, contains many predators, and overall creates a higher mortality rate for the young fish.",	
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		label, "ask",
		menu, [
			"Therefore, which path should the salmon take?",
			"Georgiana Slough", [jump, "slough1"],
			"Sacramento River", [jump, "sRiver2"],
		], 
		
		label, "slough1",
		narrator, "Oops! This is not the best option here because the salmon are more prone to predators and other dangers in the Georgiana Slough. Pick again.",
		menu, [
			"Therefore, which path should the salmon take?",
			"Sacramento River", [jump, "sRiver2"],
		], 
		
		label, "sRiver2",
		narrator, "Correct! If the salmon continue their path through the Sacramento River, they will be less prone to predators and other dangers as well as having a quicker path to their final destination, the ocean.",
		narrator, "To help guide them away from the Georgiana Slough, we have implemented a seasonal physical barrier. A physical barrier is a mechanism that doesn’t allow the salmon to pass through a certain area. However, we need to control this so that we don’t block any passing boats.",
				
		narrator, "To control the barrier, we turn it on and off, meaning we keep the barrier in a position to guide the salmon away from the Georgiana Slough or keep the barrier in a position where it does not block any boats’ path.",
		label, "sRiver3",
		scene, "DWR_Game/assets/Three_mile_slough",
		narrator, "Finally, the salmon reach the final checkpoint, Three Mile Slough! If they can live past this area, they will have a high chance of making it to their final destination. Similar to the Georgiana Slough, Three Mile Slough contains a barrier which helps guide the fish towards the Sacramento River to achieve their goal.",
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		label, "ask",
		menu, [
			"Should you turn the barrier on or off?",
			"On", [jump, "sRiver5"],
			"Off", [jump, "slough2"],
		], 
		
		label, "sRiver4",
		scene, "DWR_Game/assets/Three_mile_slough",
		narrator, "The salmon reach the final checkpoint, Three Mile Slough! If they can live past this area, they will have a high chance of making it to their final destination. Similar to the Georgiana Slough, Three Mile Slough contains a barrier which helps guide the fish towards the Sacramento River to achieve their goal.",
		label, "ask",
		menu, [
			"Should you turn the barrier on or off?",
			"On", [jump, "sRiver6"],
			"Off", [jump, "slough2"],
		], 
		
		label, "slough2", 
		narrator, "Remember, the young salmon are more susceptible to threats in Three Mile Slough. They have a higher chance of survival staying in the Sacramento River. Pick again.",
		menu, [
			"Should you turn the barrier on or off?",
			"On", [jump, "sRiver5"],
		], 
		
		label, "slough3", 
		narrator, "Remember, the young salmon are more susceptible to threats in Three Mile Slough. They have a higher chance of survival staying in the Sacramento River. Pick again.",
		menu, [
			"Should you turn the barrier on or off?",
			"On", [jump, "sRiver6"],
		], 
		
		//end of "life of fish" scenario, start mini-game 1
 		
		label, "sRiver5", 
		narrator, "Amazing! With the barrier on, the salmon are guided towards the Sacramento River and are able to have a higher chance of survival and can hopefully have a safe journey to the end of the Delta, and live a prosperous life in their natural habitat, the ocean.",
		jump, "minigame1",
		
		
		//if player chooses Yolo Bypass initially, they are brought through the Sacramento River scenario 
		
		
		label, "sRiver6", 
		narrator, "Amazing! With the barrier on, the salmon are guided towards the Sacramento River and are able to have a higher chance of survival and can hopefully have a safe journey to the end of the Delta, and live a prosperous life in their natural habitat, the ocean.",
		narrator, "Let's see how the fish move through the Sacramento River this time!",
		jump, "sRiver",
		
		
		label, "minigame1",
		narrator, "Now, let’s play a little game to get some hands-on experience on controlling the physical barriers. This game takes place in the Georgiana Slough, and will give you a simple understanding on how physical barriers in the Delta function.",
		narrator, "First let's watch how to play.",
		//calling exterior functions
		jsCall, {fcn: video1},
		narrator, "Now, let's play.",
		jsCall, {fcn: openMinigame1},
		
		//starting water supply and water quality scenario
		
		menu, [
			"Would you like to learn about the storage and export of water in the delta now?",
			"The Storage and Export of Water", [ setVars, {delta: "water" }, jump, "waterLife"],
		], 	
		
		//water supply scene
		
		label, "waterLife", 
		scene, "DWR_Game/assets/shasta_reservoir.png",
		narrator, "Alright, let’s learn about the storage and export for California’s water supply!",
		narrator, "To begin with, let’s talk about storage, and then we can talk about export and how they are tied together.",
		narrator, "So what does storing water mean? Well, it’s as the name entails. We have to store water so that during times with no rainfall and runoff we don’t run out of water.",
		narrator, "Storing water is a necessity to the well-being of the people.",
		narrator, "How do we store water then?",
		scene, "DWR_Game/assets/oroville_reservoir.png",
		narrator, "We use something called reservoirs. Reservoirs are large natural or artificial lakes that are used for water supply, flood control, and much more. California’s three largest reservoirs (Shasta, Oroville, and Folsom) release water that passes through the Delta on its way to users in the central and southern California.",
		narrator, "These reservoirs are vital to flood control and to controlling river flows into the Delta. Releasing water from the Delta also helps maintain Delta water quality by keeping the salty ocean water out of the Delta.",
		narrator, "This is because reservoirs are our main water collection facilities, and we determine how much water we can allocate towards each aspect of the Delta based off the amount of water in the reservoirs.",
		narrator, "If we did not have a method to store water, the possibility of running out of usable water would be higher.",
		narrator, "If we did not have a method to store water, the possibility of flooding would be higher.",
		narrator, "If we did not have a method to store water, the possibility of Delta salinity levels increasing too high to drink the water would be higher.",
		scene, "DWR_Game/assets/folsom_reservoir.png",
		narrator, "As you may be able to tell, storage plays an important role in California’s water supply.",
		narrator, "For this game, let’s consider two important water levels in reservoir operations. First is the “dead pool” level. No reservoir can go below this level, because past the “dead pool”, it is impossible to release water from the reservoir outlets. The other level is the maximum water level to prevent overtopping of the dam and uncontrolled flooding downstream.",
		narrator, "Making sure the reservoirs don’t overflow and don’t drop to the dead pool level are some of the challenges that water managers have to deal with.",
		narrator, "However, it is also vital that we maintain some water in the reservoirs as a cushion against unknown future conditions. This can lead to some conflict.",
		scene, "DWR_Game/assets/game_steam.png",
		narrator, "Sometimes, during droughts or dry years, all of the demands for water cannot be met which makes people relying on that water for their needs upset.",
		farmer, "Where is my WATER? I need to take care of my crops or they’ll die!",
		narrator, "During dry times, we need to deliver enough water for public health and safety, and other uses of water become secondary. This results in other users maybe only receiving a small portion of the water they want.",
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		menu, [
			"Therefore, if it is a dry year, and the water levels in the reservoirs are at an all-time low, should we deliver water to meet everyone’s demands?",
			"Yes", [jump, "waterLifeYes"],
			"No", [jump, "waterLifeNo"],
		],
		
		label, "waterLifeYes",
		narrator, "Remember, if we do, we run the chance of running out of water which would be completely devastating! Choose again.",
		menu, [
			"Therefore, if it is a dry year, and the water levels in the reservoirs are at an all-time low, should we deliver water to meet everyone’s demands?",
			"No", [jump, "waterLifeNo"],
		],
		
		
		label, "waterLifeNo",
		narrator, "Correct! Sometimes, it is impossible to satisfy everyone completely even though we try to do the best we can. When supplies are low, there just isn’t enough water to go around.",
		scene, 	"DWR_Game/assets/banks_pumping.png",
		narrator, "So, how do we get water to all those users south of the Delta? That’s where exports come in, so let’s learn about them!",
		narrator, "Fresh water supplies released from the upstream reservoirs flows into the Delta. Then we export water towards southern California and other areas in the state through the use of large pumps which can send up to 10,300 cubic feet per second (cfs) into an extensive system of canals.",
		scene, "DWR_Game/assets/water_south.png",
		narrator, "Exporting water from the Delta lets us meet the demands of the people in the drier and more populated southern part of the state.",
		narrator, "The real question is, “How do we determine how much water we actually allocate towards agricultural, municipal, and industrial purposes?”",
		narrator, "There is no simple answer to this, but in a simple overview, most of our decisions are based around pre-existing contracts. These contracts help decide how much water needs to be exported through the pumps towards central and southern California.",
		narrator, "Exporting water not only allows us to meet the public’s demand, but also their safety. Without the devising a method to safely export water, the possibility of flooding would increase.",
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		menu, [
			"Therefore, in an extremely wet year, should we hoard all the water in the reservoirs and Delta, or should we continuously export water to meet everyone’s demand?",
			"Hoard", [jump, "hoard"],
			"Export", [jump, "export"],
		],
		
		label, "hoard",
		narrator, "Uh-oh! If we hoard all the water, not only are we not meeting the demands of the people, but we are also running the risk of overfilling the reservoirs and causing flooding. Choose again.",
		menu, [
			"Therefore, in an extremely wet year, should we hoard all the water in the reservoirs and Delta, or should we continuously export water to meet everyone’s demand?",
			"Export", [jump, "export"],
		],
		
		label, "export",
		narrator, "That’s correct! It is our duty to not only meet the needs of everyone in a wet year, but also prevent the chance of flooding.",
		menu, [
			"Now that you know about the storage and export of water, let’s learn about one specific aspect of the Delta heavily influenced by the two, water quality.",
			"Controlling Water Quality", [ setVars, {delta: "quality" }, jump, "waterQuality"],
		],
		
		
		//water quality scene
		
		label, "waterQuality",
		scene, "DWR_Game/assets/intrusion5.png",
		narrator, "Alright, let’s learn about water quality and how it affects the delta!",
		narrator, "What is water quality? Well, water quality can be thought of as a measure of the suitability of water for a particular use based on selected physical, chemical, and biological characteristics. For this game, we’ll be focusing on one of the physical aspects of water, salinity.",
		narrator, "Salinity is an easily noticeable property of water because anything with high levels of salinity will taste salty! It not only affects drinking water, but also irrigation and ecosystems, and our job at DWR is to make sure we deliver the freshest water to everyone.",
		scene, "DWR_Game/assets/intrusion1.png",
		narrator, "In the Delta, salinity usually invades our water by tides from the ocean water. When export rates are high or river flows into the Delta are low, some of the ocean water can enter into the Delta and make it too salty. So, we have to take action to push that salt towards the ocean where it belongs.",
		narrator, "So, how do we do this?",
		scene, "DWR_Game/assets/intrusion2.png",
		narrator, "Before taking any direct action to help adjust the water quality, we have to acquire the data that proves the salinity levels are rising above an acceptable rate. To do this, we collect data continuously throughout the year and measure the electrical conductivity (EC) levels, a surrogate for salinity.",
		narrator, "After collecting and analyzing the data, decisions have to be made. The salinity data becomes one piece of a complex decision making process that looks at salinity levels, the amount of water available in reservoirs, water delivery obligations, and much more.",
		scene, "DWR_Game/assets/intrusion3.png",
		narrator, "So, how do we do this? Don’t worry, I can teach you a general overview of what we do here!",
		narrator, "The gist of what is done to prevent the salinity levels from becoming too high is sending fresh water from the reservoirs to counteract the ocean water coming in. This way, we can prevent the salinity from intruding into the Delta and contaminating the quality of the water we send out to the community and the state as a whole. However, water released to push salt towards the ocean is not available for export south of the Delta.",
		scene, "DWR_Game/assets/intrusion4.png",
		narrator, "In fact, we are required by state water quality regulations to maintain Delta water quality by delivering at least a minimum amount of water from the reservoirs for public health and safety. This is where the trickiness begins to show up.",
		narrator, "If the amount of water in the reservoirs is high, it doesn’t matter how much water is delivered out to the ocean because there will still be enough water to meet the public’s demand. However, if there is a very dry year, similar to the 2014-2015, it is very hard to meet those amounts mandated by law and meet the demands of the people.",
		scene, "DWR_Game/assets/intrusion6.png",
		narrator, "This leads farmers like Bill to get extremely upset.",
		farmer, "WHERE IS MY WATER? All my crops are going to die if I don’t get my water!",
		narrator, "You can clearly see Bill, like many others, is very upset to not be able to receive all of his water supply. Even though it may not be the optimal situation, it makes sense, because without using water to improve the salinity levels in the Delta the water people drink from the Delta would taste different.",
		narrator, "We have to follow regulations set by the state so that we have enough water to repel the salinity the tides from the ocean water bring in.",
		
		//giving player 2 choices, this time one is right and wrong
		//right choice will continue onto next scenario
		//wrong will describe why it's wrong and display the question again with only the right answer
		
		menu, [
			"Therefore, in a situation where there is only enough water to either export water or counteract the salinity coming from the ocean and tides, where should the water be diverted towards?",
			"Export", [jump, "export2"],
			"Counteract", [jump, "counteract"],	
			
		],
		
		label, "export2",
		narrator, "If we export the water, the salinity levels in the Delta may become too high for the water to be usable. Choose again.",
		menu, [
			"Therefore, in a situation where there is only enough water to either export water or counteract the salinity coming from the ocean and tides, where should the water be diverted towards?",
			"Counteract", [jump, "counteract"],	
			
		],
		
		label, "counteract",
		narrator, "Great choice! Even though we would like to be supplying others with as much water as we can so that everyone can be happy, we need to release water from reservoirs to keep the salt out of the Delta and only export that minimum amount of water to keep the limited water supply safe and healthy.",
		narrator, "Although there are many more aspects to water quality and how it is controlled, you are well equipped to win the mini-game and manage the Delta.",
		
		//starting second minigame 
		
		label, "minigame2",
		narrator, "Now, let's play the second minigame about both storage and export of California's water as well as water quality in the Delta.",
		narrator, "Let's watch a video which will teach you how to play the second minigame!",
		
		//caling on exterior functions to run mini-game 2
		
		jsCall, {fcn: video2},
		narrator, "Now let's play the game!",
		jsCall, {fcn: openMinigame2},
    ];
}

//opens the first mini-game in a separate tab

function openMinigame1() {
	if (confirm("Play the minigame?")) {
		window.open("minigame1.html");
	}	
}

//opens the second mini-game in a separate tab

function openMinigame2() {
	if (confirm("Play the minigame?")) {
		window.open("minigame2.html");
	}	
}	

//opens video tutorial for first mini-game in a separate tab

function video1() {
	window.open("https://youtu.be/BpoVROm9Hm0");
}

//opens video tutorial for second mini-game in a separate tab

function video2() {
	window.open("https://youtu.be/JUNtmBsXJIk");
}