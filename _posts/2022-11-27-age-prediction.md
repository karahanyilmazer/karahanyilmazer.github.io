---
layout: post
title: Predicting a Person’s Age From Their Brain Data
subtitle: The hackathon where I learned many things about
thumbnail-img: /assets/img/aging_brain.jpg
tags:
  [
    EEG,
    brain age,
    neuroengineering,
    hackathon,
  ]
comments: true
---

During the [NeuroTechX hackathon](2022-01-17-bachelors-thesis.md) that I joined with my friends, there were supposed to be two main challenges: a data analysis challenge and a hands-on engineering challenge. For the data analysis challenge, participants had to analyze resting-state EEG data with eyes open and eyes closed from 1,200 subjects.

However, I think the organizers didn’t take the large dataset size into account, as nobody could install the dataset during the hackathon. This funny incident led to the organizers setting up another data challenge in the following days, specifically for this dataset. Learning about this new challenge, I decided to take it on.

### My Approach to Predicting Brain Age

The first—and quite possibly the only—thing I did was to approach this problem scientifically (rather than seeing this as a competition where the best performance didn't necessarily mean scientifically explainability). I wanted to manually extract features from the EEG data and feed them into traditional machine learning approaches so that I could understand what my model was training on.

To make the system more robust, I used my prior experience in EEG preprocessing to clean the data as much as possible. I didn’t mind losing parts of the brain signal as long as the data was clean, since I was working with 1,200 subjects—much more than I had worked with before.

Although having a lot of data was great, my laptop wasn’t happy. It took a very long time to get the first working script for preprocessing the data. Even after everything worked, I ran out of space while saving the preprocessed data. I didn’t want to downsample the data because I was afraid of losing meaningful information with the discarded samples.

My approach was simple: preprocess the data thoroughly, extract band power features from the eyes-open and eyes-closed recordings, stack them together, and train a support vector machine (SVM) on the resulting large matrix.

This worked surprisingly well in the first phase of the competition, where everyone submitted their models to the challenge website and evaluated them on the validation dataset.

I don’t know whether it was my model’s performance or others not submitting their best work yet, but with each submission and small tweak to my model, my scores and thus my position in the leaderboard improved. That’s when I met my incredibly talented friend, Thomas Schwartz, from Neuroengineering.

### Teamwork Makes the Dream Work

Thomas told me that he, along with my two other amazing friends Sven Günther and Thien (T) Le, was also working on the data challenge. Thomas was trying a deep learning approach, T was using Riemannian geometry, and Sven was using an SVM like me.

We exchanged ideas, and they invited me to join their team. Since they joined the master's one year before I did, they had already formed a study group, tackling coursework and larger projects together. Being part of this environment, sharing my ideas, getting feedback, and collaborating with them was very rewarding.

We compared our preprocessing pipelines, and I noticed their data wasn’t as clean as mine. Even though Sven and I were using similar methods, my results were better at the time. This was clear proof that preprocessing was effective and that my focus on it was paying off. Meanwhile, Thomas’s deep learning approach wasn’t working yet, and his model wasn’t learning properly.

### More and More Data

After some time, the workload from my master’s courses piled up, and I started contributing less to the challenge. I still joined team calls, but the others (and their laptops) were doing the heavy lifting. They used Google Colab, which provided access to GPUs but required uploading all the data to Google Drive—a long and frustrating process, especially with a dataset of this size.

Our results weren’t looking great compared to others submitting their work to the website. However, as the deadline approached, something miraculous happened.

It turned out that we were allowed to use additional datasets beyond what the organizers had provided. I hadn’t considered this, as I simply assumed that a good pipeline would work well on any dataset size (spoiler alert: I was totally wrong). However, the team found another dataset with the _exact_ same structure as the challenge dataset, containing over 3,500 additional subjects.

With this new dataset, Thomas’s deep learning model finally started to perform and continued improving until the end of the challenge. Similarly, the SVM approach Sven and I were using also improved significantly with additional hyperparameter tuning. In the end, we secured third place, while Thomas’s model took first.

### Key Takeaways

This hackathon taught me several important lessons:
1.	**More data beats a good pipeline.** Adding more data allowed the SVM to outperform nearly all other submitted models.
2.	**Deep learning needs big data.** Thomas’s deep learning model only started learning with the additional data, but once it did, it significantly outperformed traditional classifiers.
3.	**Believe in yourself**. My biggest regret was not submitting a final model. After seeing how the additional data improved performance, I wish I had tested it with my full pipeline. Who knows? We might have secured all three top spots!

After the hackathon, we received our prize money. Like good students studying in Germany, we celebrated the win with a round of beers. We also created a [poster](/assets/pdf/age_prediction_poster-sanctuary.pdf) for the annual Neuroengineering Symposium, where students present their work. Unfortunately we don't have any pictures as a group from the symposium. I have to admit that we were very busy with answering many questions because to my surprise many people found the project very interesting. Well, our poster being nearly double the size of all other posters might have contributed to this interest as well...

While it wasn’t the most impressive poster ever, we had a great excuse: we were busy working on (arguably) more important projects, like coming up with startup ideas to utilize our trained models for psychiatry. After all, “We have the best model in the world to predict brain age from EEG data” was a pretty compelling argument.

<iframe src="/assets/pdf/age_prediction_poster-sanctuary.pdf" width="100%" height="580px" style="border-radius: 15px;"></iframe>
