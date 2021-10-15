let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for(let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      console.log(pronoun[i]+adj[x]+noun[y]+".com")
    }
  }
}