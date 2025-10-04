---
layout: post
title: Organizing the Neuroengineering Reunion
subtitle: Designing Behind the Scenes
thumbnail-img: /assets/img/stressed_brain.jpg
tags: [EEG, stress, emotions, machine learning, EEGNet]
comments: true
---

I think it is clear at this point that the Neuroengineering master's has a special place in my heart. So, when my friend Christian Ritter became the student representative of the new batch of students and pitched the idea to organize a reunion event for Neuroengineering's (almost) ten years anniversary, I was sold immediately.

What started off as a small-scale event turned into a major commitment by the whole organizing committee. At the time, I was still settling into my new life in Berlin, and the bureaucracy and research work I took on was more than enough to have on my plate at once. But then during one meeting, we decided that we needed a logo for the event. I had wanted to design a logo for Neuroengineering since I started the master's and thought that this could be my way of saying thank you and goodbye to the master's, as well as fulfilling my own wish to contribute something to it. So, I took on the challenge.

### Logo

I didn't want a typical "brain + electronics" kind of logo since most neuroengineering-related labs already have designs like that. But without spending a lot of time brainstorming and coming up with multiple concepts, finding an original idea was very difficult. Until one day, another friend (Adrian Dendorfer) sent the following picture to our organizing team chat, saying that he always thought the Munich map looked like a brain.

![Munich map looks like a brain](/assets/img/munich_map_brain_resemblance.jpeg)

Needless to say, I loved the idea. It was right in front of my face this whole time. And it was enough motivation and inspiration for me, so I started working.

My plan was to just extract the Munich road map and see where it went from there. There was probably an easier way of doing this, but I used Python and the [OSMnx library](https://osmnx.readthedocs.io/en/stable/) to do it, following the Turkish proverb that says "The road you know is the shortest."

My first idea was to simply plot the map of Munich as provided by the OSMnx library. However, apparently, the Munich map was much smaller than what made up the brain shape. But already at this stage, my first idea for the colors popped up. I wanted the roads to resemble a heatmap, with colors changing as we move away from Arcisstraße 21. The most straightforward solution was to use the TUM colors to do this. However, that result looked awful, as you can see below:

![MSNE Reunion Logo V1 (Just Munich)](/assets/img/logo_v1_just_munich.jpg)

To make it more fleshed out, I had to add a few more locations: Unterhaching, Taufkirchen, Ottobrunn, Gartenstadt, Laim, Allach, Unterföhring, Aschheim, and Feldkirchen. Even though it was coming together, these locations weren't enough. As you will shortly see, many parts of our brain shape were still missing. Instead of looking at Google Maps and determining the names of the smaller settlements I was missing, I had to come up with another solution.

![MSNE Reunion Logo V1](/assets/img/logo_v1.jpg)

The straightforward solution I came up with was to define a certain distance to get all the roads leading up to Arcisstraße 21, where the Technical University of Munich (TUM) Main Campus is and where we had most of our lectures. By playing with this distance parameter, it was certain that I would get a larger section of the map that included the brain shape. However, this also returned a lot of roads outside the brain shape.

![Roads of Munich](/assets/img/munich_roads.jpg)

Therefore, I found a brain outline online and overlaid it on the map, scaling and translating it as necessary to roughly cover the brain-shaped area of the map. This way, I could extract only the roads that fell within the brain outline, making the later clean-up easier (spoiler alert: it was still not easy). I also started playing around with matplotlib colormaps instead of the linear gradient I was using before. The results already started looking more promising.

![MSNE Reunion Logo V2](/assets/img/logo_v2.jpg)

At this point, I started experimenting with different background colors for the brain, different falloff values for the heatmap to make it more or less focal, and other colormaps. However, nothing really stuck. After a feedback round with the team, I liked the idea of including other points of interest like Klinikum Rechts der Isar and the Institute for Cognitive Systems, where we had other lectures. The logo was coming together, but with the extra roads overflowing the brain shape, the logo didn't look clean at all. So I tried taking the easy way out by cropping the roads in the shape of the outline.

![MSNE Reunion Logo V3](/assets/img/logo_v3.png)

Although this version doesn't look terrible, it was definitely not the best. The problem is that without knowing that the Munich map looks like a brain, you can't really tell that by looking at the logo. This logo might as well have been created for any other city. My hope was to make the logo look like a real fMRI scan, but the colors still looked too simplistic and didn't leave much of an impression, or any impression at all. I think I was limiting myself too much with the TUM colors, and it wasn't obvious to me until after another iteration.

At this point, I was behind schedule and couldn't motivate myself to work on the logo anymore. So, Sarah (Sai) Lalancette-Caron volunteered to help me. We sat down for a session of refining the logo. Instead of the heatmap, we went with pins instead, which helped us reduce the number of colors and made for a simpler logo. We also added some text to the logo to make it clearer that the Munich map looked like a brain. In hindsight, this was another sign that the logo didn't really work, because we needed to write a caption to explain what we were trying to show.

![MSNE Reunion Logo V4](/assets/img/logo_v4.jpg)

We showed the logo to the team and although people liked it at first sight, the real feedback came only after some time. People thought that it looked too flat and that it wasn't clear that the map looked like the brain, even after our wordplay with the text. Still, figuring out the text placement and exploring some font styles was helpful for the next and final iteration.

Even though I was frustrated with the slow progress and still hadn't come up with the final version of the logo, I decided to give it one final try. I noted down the two main problems I was having: the color selection and the chaotic map.

For the colors, I decided to look for other colormaps since none of the default matplotlib colormaps worked for me. After a quick search, I found the [Palettable library](https://jiffyclub.github.io/palettable/) that provided many different colormaps. After trying all of them, I decided on the "Spectral" colormap from ColorBrewer. The logo was already looking much better, and although it wasn't a perfect match, it kind of resembled an fMRI scan, and the red focus at the center really brought some livelihood to the logo.

![MSNE Reunion Logo V5](/assets/img/logo_v5_no_cleanup.jpg)

But the background color was still not perfect and the roads were all over the place. So, as a first step, I made the background a deep blue which really made the colors pop. This reminded me that there is no clear-cut right and wrong in design. By trying to stay with the official TUM blue color, which is much lighter, I was limiting my possibilities. This might have been necessary in some other case, but currently nobody told me to use the official TUM colors and I had set arbitrarily harsh rules for my design.

To solve the other problem of the map looking chaotic, I decided that the only way to fix it would be to get my hands dirty and leave the comfort of programming to use Affinity Designer to clean up the roads overflowing the brain outline in the SVG file directly. Well, this took much longer than necessary, probably because I was quite new to the program and because each road was a single object in the SVG file, which made the program very slow when I was trying to delete roads and navigate my way around the map. Fortunately, after some viewport optimization, I could make the program run much faster and my due diligence paid off with a very clear and nice-looking map. I also had to adapt the brain shape just because the roads didn't really fit into it. So I gave the occipital cortex of our brain some extra juice by expanding it.

![MSNE Reunion Logo V5](/assets/img/logo_v5_cleaned_up.jpg)

As a final step, I put the logo back into the text layout I created for the previous iteration. But since it was much clearer that the map resembled a brain, we didn't need the "Munich: Where Brains Were Mapped" motto anymore. I thought of using "Munich: Neuro by Nature" instead. But then after another feedback session, I was convinced that this would not be the best way to go. People advocated for "Munich: Fire Together, Wire Together" as the motto. I was thinking of using this motto for the photo wall, as people would be posing together in front of it and it would highlight the community feeling. But I didn't think it would fit the logo of the event.

After some convincing, I caved in and even started liking the idea of using "Fire Together, Wire Together" on the logo. But at this point, having "Munich" as the title added little to the logo. Since the logo was going to be used for the merch as well, I thought that it would be nice to spell out "Neuroengineering" somewhere in the logo, as the only place we could relate the logo to the event was the "TUM MSNE Reunion" writing below. Of course, we all knew that MSNE stood for "Master of Science in Neuroengineering," but to a third person it wouldn't mean anything. Long story short, I decided to go with "Neuroengineering: Fire Together, Wire Together." I also changed the font of the main title to make it look a bit more dynamic, something that would speak to the inner nerds that resided in each of us. More specifically, I really liked that the "N" of "Neuroengineering" resembled a lightning bolt with its sharp turns, which again played nicely with the idea of electrical signaling in the brain and the energy that would be in the room on the day of the event. All of this effort paid off by producing a final version I was very proud of:

![MSNE Reunion Logo V5](/assets/img/logo_v5_final.jpg)

Of course, it didn't end just there. For the merch, my lovely fellow organizers decided to offer three t-shirt color options: white, blue, and black. It is nice to have a selection, of course, but the deep, dark colors of the brain outline and the text made it difficult to see the logo on a black background. Which meant more work for me. But fortunately, it was an easy fix and I came up with the other versions:

![MSNE Reunion Logo V5 Variations](/assets/img/logo_v5_variations.jpg)

### Name Tag

Of course, an event isn't complete without name tags. We could have just let people handwrite their own names on stickers. But why not custom-make them, now that we had a logo?

![Name Tag](/assets/img/name_tag.jpg)

Well, preparing one name tag was easy and it was well received. But doing it for around 120 people who registered turned out to be a nightmare. Honestly, this was my fault as I didn't use the other tools I had lying around like Figma or Affinity Designer and went with Canva instead, thinking that it would be the fastest since I am so used to it.

To save paper, I put 9 name tags on each A4 page. I duplicated this page a few times and started writing people's names. But then the first problem happened: some people's names were too long and didn't fit into one line. And when Canva opened up a new line in a text box, it would move everything down and the text box wouldn't stay centered anymore. So, every time someone's name was too long, I had to center the text box again to accommodate the new line.

Another issue was that I couldn't automatically update the name tag template. After I had already spent about forty minutes filling in around 50 names, I ran into some cases where the brain logo looked too small. If I had used Figma instead, I would have created a component for the name tag, duplicated it for each person, and when I changed the original component by, for example, making the brain bigger, it would have updated all the name tags. Well, I had to restart everything to make the brains bigger. This cost me so much time. It was something nobody else would notice, but I couldn't cut my losses and wanted everything to look perfect after having poured in so much energy.

In the end, the name tags looked great, of course!

### Agenda

### Photo Wall

Oh, the photo wall... The idea was that we would have a giant poster that people would take pictures in front of. But at this point, I had already run out of creativity (and will to live). I didn't have any clue what this photo wall might look like. But assuming that multiple people would take pictures in front of it, it only made sense to have multiple brains on it. So I duplicated and mirrored the brain and voilà, a photo wall!

![Name Tag](/assets/img/photo_wall_v1.jpg)

But I wasn't happy with it, of course. It looked too clean, too uninteresting as a background for pictures. I wanted to be bold and put some colors in it. So I tested a few colors and then went with a certain yellow, also complementing the colors of the heatmap in the logo.

![Name Tag](/assets/img/photo_wall_v2.jpg)

I must say that people didn't like it. I saw it more as a draft than the final version, but people were very skeptical about the colorful background. I agree that, for example, instead of yellow another color could be picked, but the general idea wasn't horrible. It took some convincing but, more importantly, some more interesting elements for people to open up to the idea of having a colorful background. By interesting elements I mean, of course, the magical powers of photo grain.

I know that it is a typical designer trick to add noise over a poster to make it look _interesting_. But this time I really had a good motivation to use this effect. At the time, I was quite obsessed with my new film camera I bought in Japan: my Nikon F2. I was using a film that had a 100–400 ISO, meaning you can choose which light sensitivity you want to shoot your pictures with, and as a result you will have more or less grain on your images. I was experimenting with 200 ISO to see if it would have more grain than my previous pictures with 100 ISO (it should, of course, but I wanted to see for myself). And since this was a photo wall, I thought I could combine my current interest with the design as they aligned so nicely.

But there were two problems. I wanted this poster to be very large, even larger than a typical A0 poster. After talking to a print shop, I decided to go with a 130 x 200 cm poster. But designing for these dimensions on Canva was not possible, so I switched to Affinity Publisher.

The second problem was how to add the grainy texture to the background. Even though I had used Affinity to do some photo editing and also clean up the logo for the event, I was still new to the program. So it took a long time to figure out how to add realistic photo grain to the background.

I fiddled around with built-in noise settings, but the resulting grains were too fine for the large poster size. I wasn't sure how they would look once printed. Maybe they wouldn't get printed at all, as they were too small. After finding no workaround, I tried the same thing on Figma to no avail. There were some plugins, but nothing that fit my needs.

In the end, I went back to Affinity and imported a relatively low-resolution image of some noise. I thought it would look horrible on the huge canvas, but actually it wasn't that bad. I blended this image layer with my orange background to create some noise effects. By choosing different blend options, I could get different colors as well. I created blue and bright green options. I also created an orange version, but somehow the noise on the orange one didn't look as nice as the other two. So I decided to pick another image to serve as the noise layer, and the lucky winner out of all the texture images saved on my laptop was a 4K scan of a carpet I once used for another 3D modeling project in Blender. Using this carpet scan, I could also come up with an orange version that satisfied me.

Here are the three versions I sent to the group for feedback. I really liked the green and orange versions:

![Photo Wall](/assets/img/photo_wall_v3_green.jpg)
![Photo Wall](/assets/img/photo_wall_v3_blue.jpg)
![Photo Wall](/assets/img/photo_wall_v3_orange.jpg)

Unfortunately, my lovely organizing team didn't agree with me. Most people preferred the blue version. Even though I also liked it (which was the reason I sent it for feedback), compared to the other two colors that popped, the blue background for the photo wall seemed too boring to me. I was very close to saying, "I spent a lot of time on all the designs, so I will just make the call and choose orange. Sorry not sorry, but the photo wall needs to be colorful." But instead, I slept on it, and the next day I came up with a compromise for both sides: a gradient going from blue to orange.

I thought putting a gradient would be very straightforward. But making it look nice was a whole other challenge. Using a simple linear gradient made it too obvious that I was going from orange to blue. The line dividing the two colors was way too sharp. So I started searching online for ways to make my gradient look better.

I found this very interesting trick of taking a picture of a city full of lights, applying a heavy Gaussian filter to make it very blurry, and then using this as a blend mask for the gradient. I must say that it worked wonders. But making it look really nice took a very long time.

But in the end, the resulting photo wall was loved by everyone. Both my friends in the organizing team and I were satisfied, and I was glad that I slept on that initial discussion and came up with a better solution than just saying, "This is what I like so this is what you get." Design is always bigger than the self. If others had an opinion, I had to accommodate it to a certain degree without sacrificing my own preferences. And I think the final product was just solid proof of this balance.

![Photo Wall](/assets/img/photo_wall_v3_final.jpg)
