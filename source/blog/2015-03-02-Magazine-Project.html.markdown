---
title: Magazine Project
date: 2015-03-02 03:53 UTC
tags:
---

In order to work more on my understanding of CSS positioning and relationships, I was given the challenge of choosing a magazine layout and trying to replicate it using HTML and CSS.

After searching through a few layouts my mentor and I decided that this one would present some interesting challenges.




[![Original Layout][2]][1]

  [1]: http://issuu.com/imdiogodantas/docs/creativemind-magazine/10
  [2]: /images/blog/magazine/Original_layout.png

My remake can be found here: [Magazine Project](http://ericagarcia.me/projects/magazine/).  


####Tackling the problem

When I first looked at the article it seemed like trying to position everything would be pretty difficult. And my first approach of jumping right in and laying things out in the browser - something I normally don’t do - did make it pretty difficult. In order to see the relationships a little more clearly I brought the image into photoshop and placed some guidelines where things aligned. This was great because it created a rough grid for me to follow as well as unveiled a few relationships and alignments that I missed at first glance.  

![Rough Grid](/images/blog/magazine/Rough_grid.png)



This rough grid helped me see a few things: 

1.) My entire magazine layout should be in a “container” 

2.) I could easily use a four column grid for my layout

3.) There are a few visual groupings that I could put together for easy positioning - Article header group, content group, and within the content group there are groups of content that clearly align with each other. 

![Magazine Grid](/images/blog/magazine/Magazine_grid.png)

![Mag ](/images/blog/magazine/Magazine_layout1.png)
![Grid Key](/images/blog/magazine/Grid_key.png)

####I did it all wrong

Well, not all wrong but there were many things that I could improve on. My first completed rendition of this project mimicked the original almost flawlessly. My markup on the other hand suffered from my approach. I was thinking with the mindset of a print designer - grouping content visually and dividing the article into vertical columns. 

In my next attempt I looked for a way to separate the content not only into columns but into rows that made sense as well. 


![alt text](/images/blog/magazine/Magazine_layout2.png)
![Grid Key](/images/blog/magazine/Grid_key.png)




This approach was much better but I still lacked a few things:

1 .) My code could be improved by having more flexible class names

2.) My groupings could be improved even more by considering them as “modules” instead of visual groupings - example: The text under the circle image was more related to the image than it was to the column (although having it as part of the column made things align much easier for me).

3.) I was using a large amount of padding to push the content away from the edge of the page. A better solution would be to have the content contained by another container within the magazine container.

For my last attempt I tried to improve upon these weaknesses in my code. 

![alt text](/images/blog/magazine/Magazine_layout3.png)
![Grid Key](/images/blog/magazine/Grid_key.png)


####What I learned

I learned so much from this project. Maybe most importantly that there are a million ways to achieve the same visual result. But just because your html and css is working together to place the elements on the page does not mean that it has been done in the best and cleanest way. It is important to be mindful when creating  - making sure that your markup and stylesheets are understandable as well as flexible to future changes. This is something I want to continue to improve on throughout my apprenticeship. 



