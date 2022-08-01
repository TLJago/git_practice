const verb = ['wise ', 'hungry ', 'verbose ', 'angry ', 'happy ', 'vigorous ', 'broken ', 'thirsty ', 'stoic ', 'heroic ', 'cowardly ', 'diseased ', 'healthy '];

const subject = ['human ', 'soul ', 'person ', 'heart ', 'cat ', 'dog ', 'horse '];

const adverb = ['knows ', 'understands ', 'remembers ', 'forgets ', 'imagines ', 'laments ', 'wishes ', 'regrets ', 'predicts '];

const subject2 = ['true love ', 'the past ', 'ambition ', 'a lifelong dream ', 'any sense of purpose ', 'kindness ', 'sustenance ', 'philosophy ', 'wisdom ', 'the future ', 'carnal knowledge ', 'doubt ', 'fame ', 'coffee ', 'the past ', 'England ', 'the universe ', 'the world ', 'the planet ', 'the weekend ', 'bitterness ', 'jealousy ', 'hope '];

const conclusion = ['foolishness', 'the answer', 'just plain silly', 'beyond saving', 'out of reach', 'fit only to burn', 'the path to happiness', 'worth more alive than dead', 'not worth saving', 'better left alone', 'more valuable than one might think', 'too dangerous to allow', 'the source of true power', 'the one true desire of all people', 'unknowable', 'poison', 'death'];


var rVerb = verb[Math.floor(Math.random()*verb.length)];

var rSubject = subject[Math.floor(Math.random()*subject.length)];

var rAdverb = adverb[Math.floor(Math.random()*adverb.length)];

var rSubject2 = subject2[Math.floor(Math.random()*subject2.length)];

var rConclusion = conclusion[Math.floor(Math.random()*conclusion.length)];

let text =  ("The " + rVerb + rSubject + rAdverb + "that " + rSubject2 + "is " + rConclusion + ".");

console.log(text);
