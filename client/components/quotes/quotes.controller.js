function QuotesController(){
	let vm=this;

var quotes = [' We are what we repeatedly do. Excellence, therefore, is not an act but a habit.',
'The best way out is always through.',
' Do not wait to strike till the iron is hot; but make it hot by striking.',
'Whether you think you can or think you can’t, you’re right.',
'What you get by achieving your goals is not as important as what you become by achieving your goals.',
' Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire which transcends everything.',
' Failure is the condiment that gives success its flavor.',
' In any situation, the best thing you can do is the right thing; the next best thing you can do is the wrong thing; the worst thing you can do is nothing.',
'You gotta risk it to get the the biscuit'
];

vm.generateQuote=generateQuote;
function generateQuote(){
	vm.generatedQuote='d';
	var i=Math.floor(Math.random()*quotes.length);
	vm.generatedQuote=(quotes[i]);
}
generateQuote();

};

module.exports=QuotesController;
