# TypeAlong  
  
### Author: Michael Mazzone  
  
## Usage:  
This plugin was made as part of software to help people learn to type. Check out the comparable effect used at typing.com in their test.  
To use in your own site, do the following:  
* Requires 3 spans in this order, with these IDs: "typed-chars", "active-char", "next-chars".  
* Use the setText function (documented below) to set the text you want to type along with.  
* Link to the typealong.js file and you're done! The plugin runs on page load.  
  
Here's a demo: [JSFiddle link](https://jsfiddle.net/soqqevpr/)
###### NOTE: I'll be adding support for multiple instances in one page, and abstracting the functionality to not require those 3 specific divs.  

## Functions:  
##### setText(text)  
Given a string, setText sets the active-char span to the first letter, and puts the rest of the string in next-chars.  

## Dependencies:  
This was built using jQuery v. 3.1.1, [here are the latest versions.](https://code.jquery.com/)
