---
title: Semantic Elements
date: 2015-03-05 03:53 UTC
tags:
---


For the first 20 years of my life when someone would tell me that they were interested in learning a new language I would immediately think that they were talking about a foreign language. But in the past year, hanging around people who are passionate about programming and web development, “learning a new language” has a whole new meaning. 

Perhaps learning a programming or markup language is not so different from learning a foreign language. There are plenty of similarities between learning a language such as Spanish and a markup language such as HTML (HyperText Markup Language). 

One such example is the study of Semantics: The study of the meanings of words and phrases in a language. 

In HTML5 there are non-semantic elements as well as semantic elements:

**Non-semantic:** These elements do not tell us the meaning of it’s content  
**Examples:** `<div>` and `<span>`

**Semantic:** These elements give meaning to the content  
**Examples:** `<header>`,  `<footer>` and `<img>`

You may be wondering what is means to “give meaning” or to “not give meaning” to content. Semantic elements explicitly label its content and enable computers, search engines, screen readers, etc. to read and understand the content on our web pages. And not only does it help machines better understand our HTML,  it creates a universal language so that when someone else jumps onto your markup they can better understand all of the parts.

Here are a few HTML5 Semantic tags explained using a project I worked on this week:


[![My Semantics Project][2]][1]

  [1]: http://ericagarcia.me/projects/semantics/
  [2]: /images/blog/semantics/Semantics_project.png
 


#####< header >

The `<header>` is a structural element that represents a group of introductory or navigational aids. It typically contains a section’s heading, but can hold other content (a search form, relevant logos, etc.) if necessary. 

There can be multiple headers in a document but be sure not to overuse this element. For example, if the `<header>` element only contains a single heading element its unnecessary. 


![header_example](/images/blog/semantics/Semantics_header.png)

#####< footer > 
The footer identifies the closing or end of a page, article, section, or other segment of a page.

Footers may contain things such as short list of links to various pages of a site, social media icons, copyright information, etc.


![footer_example](/images/blog/semantics/Semantics_footer.png)

#####< nav > 
The nav identifies a section of major navigational links on a page. 

This element is also one that is commonly overused. An example of over-usage would be using it for the links located in your footer as they are not considered “major” navigational links.

![nav_example](/images/blog/semantics/Semantics_nav.png)

#####< article > 
A `<article>` is used to contribute to the documents structure. It contains a standalone piece of content that may be independently distributed or reused. 

An easy test to see whether something would make sense as an `<article>` is:
Would it’s content make sense independent of it’s context? If so, it’s a good candidate for an `<article>`. 

![article_example](/images/blog/semantics/Semantics_article.png)

#####< section > 
A section is also used to contribute to the documents structure. It is used to group different articles into different purposes or subjects, or to define the different sections of a single article.

![section_example](/images/blog/semantics/Semantics_section.png)

#####< aside > 
The aside element holds content, such as sidebars, inserts, or brief explanations that is separate from but related to the content surrounding it. 

Examples for an aside could be advertisements, or groups of navigation items. In this case I have a list of speakers which navigate to their personal websites.

![aside_example](/images/blog/semantics/Semantics_aside.png)

Extra: 

In my previous project I used a `<blockquote>` to label a quote that was pulled from the magazine article and used as a print “pull-quote.” However this was not the right use of a `<blockquote>`... 

#####< blockquote >
A `<blockquote>` is used to specify that a section is quoted from another source:

    <blockquote cite="http://www.imdb.com/title/tt0091042/quotes">
      <p>Life moves pretty fast. If you don't stop and look around once in a while, you could miss it..</p>
      <footer>— <a href="http://www.imdb.com/title/tt0091042/quotes">Ferris Bueller</a></footer>
    </blockquote>

Cite is used to specify the source of the quotation*

#####< q >
A `<q>` is an inline html quotation element that is used for short quotations that don’t require paragraph breaks.


![blockquote_example](/images/blog/semantics/Semantics_blockquote.png)



