const Discord = require("discord.js");
const client = new Discord.Client();
var gameid = (">help For commands");
var prefix = ">";

function commandIs(str, msg){
	return msg.content.startsWith(prefix + str);
}
client.on('ready', () => {
	//client.gamePlayingName('Call of Duty: Black Ops 10');
	//client.setStatus('online', 'Call of Duty: Black Ops 10');
	//client.setStatusIdle();
	client.user.setStatus("dnd")
	client.user.setGame(gameid)
	console.log("The Bot Is Now Running!");
});



client.on('message', message => {
	
	
	// delete a message
/*message.delete(10000)

 .then(msg => console.log(`Deleted message from ${msg.author}`))
 .catch(console.error);*/
 
 // update the content of a message
/*message.edit('This is my new content!')
 .then(msg => console.log(`Updated the content of a message from ${msg.author}`))
 .catch(console.error);*/
	
	
	var args = message.content.split(/[ ]+/);
	if (commandIs("die", message)) {
		message.channel.sendMessage("No " + message.author.username + " I cannot die I'm a bot :confused:.");

		// alert the console
		console.log("Messaged " + message.author.username);
	}
	if (commandIs("garble", message)){
		message.channel.sendMessage("You did it wrong" + "`hah get pranked`")
	}
	
	if (commandIs("cat", message)){
		message.channel.sendMessage("```Meow!T```")
	}
	
		/*if(message.author.username === "Sinon"){
			message.channel.sendMessage("ping")
		}*/
	
	if (commandIs("colour", message)){
		message.channel.sendMessage("```http" + "\n" + "SO COLOURFULL```")
	}
	
	if(commandIs("say", message)){
		if(args.length === 1){
			client.deleteMessage(message);
			message.channel.sendMessage("What do you want me to say? Usage: `>say [message]`")
		} else { message.channel.sendMessage(args.join(" ").substring(5)) }
	}
	
	if(commandIs("tsay", message)){
		if(args.length === 1){
			message.channel.sendMessage("What do you want me to say? Usage: `>tsay [message]`")
		} else { message.channel.sendMessage(("I was told to say ") + args.join(" ").substring(6)) }
	}
	
	if (commandIs("kys", message)){
		message.channel.sendMessage("oops I died")
		message.channel.sendMessage("```http" + "\n" + "-dies-```")
		message.channel.sendMessage("What have you done " + message.author.username + " ب_ب")
	}

	if (commandIs("inv", message) && message.author.username === "Pimy tm"){
		message.channel.sendMessage("```diff" + "\n" + "! ===== [" + message.author.username + "'s inventory (Page 1/1)] ===== !" + "\n" + "+ 1,000,000,000,000 Gold." + "\n" + "!=========================================!```")
	}else{
		if (commandIs("inv", message) && message.author.username === "Vraelom"){
		message.channel.sendMessage("```diff" + "\n" + "! ===== [" + message.author.username + "'s inventory (Page 1/1)] ===== !" + "\n" + "+ 100 x Poo" + "\n" + "!=========================================!```")
		}
	}
	
	if (commandIs("help", message)){
		message.channel.sendMessage("```diff" + "\n" + "- Commands:" + "\n" + "+ kys(An example of multiposting)" + "\n" + "+ say" + "\n" + "+ tsay" + "\n" + "+ die" + "\n" + "+ help" + "\n" + "+ garble" + "\n" + "+ cat" + "\n" + "+ colour" + "\n" + "+ inv" + "\n" + "+ setplay```")
		
	}
});

client.login("Mjc0MDE2NjI5NzY1OTYzNzc2.C3ahJg.x-FCK3sXIJz8-OGIouZnPyx3fSM");



//Mjc0MDE2NjI5NzY1OTYzNzc2.C3ahJg.x-FCK3sXIJz8-OGIouZnPyx3fSM


