AngularJS App
=============

## Terms used in description 

* Filter orders area ¨C The area on the top left of page
* Create batch area ¨C The area on the top right of page
* Filtered orders area ¨C The whole bottom page rendered as tabular date

## Usage

To view the demo page online via [http://code.evaljs.com/app/pretest.html](http://code.evaljs.com/app/pretest.html), you get the best view in IE8+, Chrome, Firefox and modern browsers.(The orders filter function doesn¡¯t work in IE7, though all layout degrade to acceptable level.)


By default, all filterable orders list on bottom page with each columns pointing to above filter order area conditions.


Choose one of status from Order status options, then click Filter Orders button, you will see the orders which meet the option you choose list in the filtered orders area


To deeper dive orders choose more options from filter order area, such as Expected ship date or SIOC options; you see the orders are refined based on the last result, e.g. multiple condition filtering.


Move your sight on to right top of the page; here you see the Create batch area, where the number of two Batch size are reflected as the number of filtered orders. They can be changed, if you can desire to do. Other options such as Gift Wrap or ASIN give you more control on batch operation. When you think all things are ready, click Create a bath, filtered orders packed with the batch will be created and ready for the next mange.


## Technique stack

Given quick prototype purpose, the whole program structure based on AngularJS structure for its great two-way data-binding capabilities, though the function design is clicking ¡®Filter Orders¡± driven, not the default blur-and-change behavior in AnglarJS. To view filter-by-change demo, please check [http://code.evaljs.com/app/pretest.html#/filter-by-change](http://code.evaljs.com/app/pretest.html#/filter-by-change).

For privacy, in terms of credentials, I will remove this app from Heroku, once you finish the page review. 

The page is served by a NodeJS static server and deployed to Heroku. The app will last only one month, and added noindex and nofollow meta, to make search engine bypass this page.


## Post and help 

Help got from following post and thanks to their great job:

[http://css-tricks.com/simple-styles-for-horizontal-rules/](http://css-tricks.com/simple-styles-for-horizontal-rules/)


## Known issues and improvements

* Filtering by Expected ship date won¡¯t work by now; I know the reason and can fix it later. But I run out of time and busy days.

* The Angular filter won¡¯t work on IE7. AngularJS itself don¡¯t support IE7. In this IE7 still care times, AngularJS is not the candidate, though there are workaround out there, but it demand too much input.
