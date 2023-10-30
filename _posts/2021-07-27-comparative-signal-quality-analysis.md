---
layout: post
title: EEG Signal Quality Analysis
subtitle: Getting Familiar with EEG Systems One Step at a Time
thumbnail-img: /assets/img/sm_rest_correlation.png
tags: [EEG, signal processing]
comments: true
---

After an exciting time at the [BR41N.IO hackathon](2022-01-17-bachelors-thesis.md), I found myself starting my engineering internship at the [Institute for Congitive Systems](https://www.ce.cit.tum.de/ics/home/), under the supervision of Nicolas Berberich.

In the world of EEG, keeping impedance values low is pretty much the golden standard for ensuring you’re getting a clear and reliable signal. However, we hit a bit of a snag with one of our EEG systems, the Unicorn Hybrid Black. This particular system doesn’t come with built-in impedance measurement, and since it was still fairly new to our lab, we weren’t quite sure how its signal quality, especially with the dry electrodes, would stack up against our other EEG systems, like the Smarting 24.

This uncertainty led us to define the main goal of my internship: to really dive in and compare the signal quality across different EEG systems.

I ended up spending my days exploring connectivity patterns between electrodes to root out any bad channels and comparing band-power ratios during resting state measurements, with both open and closed eyes.

Looking back, there are definitely a few things I’d do differently, but I wouldn’t trade the experience and learning for anything. If you’re curious to see my initial dive into the world of EEG signal quality, feel free to check out my [final report](/assets/pdf/comparative_signal_quality_report-Karahan_Yilmazer.pdf):

<iframe src="/assets/pdf/comparative_signal_quality_report-Karahan_Yilmazer.pdf" width="100%" height="1000px" style="border-radius: 15px;"></iframe>
