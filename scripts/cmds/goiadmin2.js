module.exports = {
	config: {
		name: "goiadmin",
		author: "NIsAN",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "61577917940077") {
		var aid = ["61577917940077"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["🅜🅐🅡🅤🅕 বস এখন  বিজি জা বলার তার চিপায় গিয়ে বলতে পারেন_!!😼🥰","এতো মেনশন নাহ দিয়া সিংগেল 🅜🅐🅡🅤🅕 রে একটা গফ দে 😒 😏","Mention_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স🌚🌚","মেনশন দিসনা পারলে একটা গফ দে 🅜🅐🅡🅤🅕 বসকে।😾😾","Mantion দিস না বস এখন তার হবুবওকে খুজতে গেছে।😒😒🥀🤐"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
