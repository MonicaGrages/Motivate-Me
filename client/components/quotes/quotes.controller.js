console.log('hello');

function QuotesController(){
	let vm=this;
	//vm.message="whatever";

console.log('hi');
var quotes = [' We are what we repeatedly do. Excellence, therefore, is not an act but a habit.',
'The best way out is always through.',
' Do not wait to strike till the iron is hot; but make it hot by striking.',
'Whether you think you can or think you can’t, you’re right.',
'What you get by achieving your goals is not as important as what you become by achieving your goals.',
' Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire which transcends everything.'];
var generatedQuote='';
vm.generateQuote=generateQuote;
function generateQuote(){
	console.log("yo");
	vm.generatedQuote='';
	var i=Math.floor(Math.random()*quotes.length);
	vm.generatedQuote=(quotes[i]);
	console.log(vm.generatedQuote);
} 
generateQuote();
};
module.exports=QuotesController;