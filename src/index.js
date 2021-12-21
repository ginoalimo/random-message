const messages = [
"David",
"Diana",
"Ana Maria",
"Isabella",
"Antonio",
"Norma",
"Andrea",
"Joa"
]

const randomMsg = () => { 
	const message = messages[Math.floor(Math.random()*messages.length)]
	console.log(message)
}

module.exports = { randomMsg }

