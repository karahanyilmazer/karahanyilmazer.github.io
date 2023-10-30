---
layout: post
title: A Hybrid EEG/EOG BCI Using Consumer-Grade EEG
subtitle: The thesis that piqued my interest in academia
thumbnail-img: /assets/img/mi_brain.png
tags:
  [
    brain-computer interface,
    BCI,
    EEG,
    neuroengineering,
    neurorehabilitation,
    motor imagery,
  ]
comments: true
---

My bachelor's thesis was an insightful journey into the world of EEG-BCIs and engineering in general, focusing on practical applications in neurorehabilitation. Under the guidance of Nicolas Berberich, I had the opportunity to directly apply our research to real-world scenarios, aiding a patient with spinal cord injury. Inspired by the hybrid BCI system proposed in the [phenomenal paper](https://www.science.org/doi/10.1126/scirobotics.aag3296) by Surjo R. Soekadar and colleagues, which utilizes both EEG and EOG signals, we aimed to increase the robustness of the system we were designing.

### Human-Centered Neuroengineering

Following the human-centered neuroengineering approach, we were visiting a spinal cord injury patient at his own house, as it was difficult for him to travel to our lab. Our goal was to build technologies to increase his autonomy. Based on his wishes, we set our primary objective to enhance his autonomy through technology, focusing on the devices he used daily, such as his TV or smartphone.

Given his limited motor control, we opted for EEG as a means of intention detection. However, the logistical challenge of transporting our research-grade wet EEG system led us to choose the consumer-grade Unicorn Hybrid Black EEG system. While this system offered the advantages of being wireless, portable, and easy to set up, it also presented us with reduced signal quality, especially because we were not using conductive gel on the electrodes.

### Using Eye Blinks as Commands

Motor imagery is the act of imagining moving a limb without performing the action. It produces brain signals that are spatiotemporally similar to brain signals produced during actual movement. Motor imagery is typically used as a control signal in BCI applications. However, producing easily distinguishable brain signals using motor imagery requires extensive training. Also, the reduced signal quality from our dry electrodes was not helping with the situation.

To expedite the process of giving control back to our patient, I implemented a real-time algorithm for detecting eye blinks using a single frontal EEG electrode. This approach was in line with the idea of developing a hybrid EEG/EOG BCI and provided a more immediate and accessible means of interaction.

![Spontaneous vs. Voluntary Eye Blinks](/assets/img/voluntary_vs_spontaneous.png)

### Analyzing Motor Imagery

My exploration didn't stop there. I analyzed a publicly available [motor imagery dataset](https://www.bbci.de/competition/iv/#dataset1) assumed to be of high quality. I extracted event-related (de)synchronization curves and compared common spatial pattern (CSP) and sparse filter bank common spatial patterns (SFBCSP) as feature extraction methods. The pipeline worked very well for classifying left vs. right hand motor imagery.

![ERD/S Curves](/assets/img/erds_berlin.png)

### Progress Towards a Hybrid-BCI System

Finally, I designed a paradigm to make motor imagery recordings, similar to the dataset I analyzed. After recording and analyzing some data, I could not achieve the same performance level I achieved with the publicly available dataset. Since the pipeline was proven to be working on good data, I assumed that the recorded data was not of high quality, either because of the BCI naive participants or due to the low signal quality of the dry electrodes.

This meant that it was not possible to combine EEG and EOG signals into one hybrid BCI system within the scope of this project. However, it was still a great endevour that taught me a lot. And most important of all, we had a working system that could detect eye blinks in real time to control any device we interface with.

After my thesis ended, we tested this system with our patient to let him play a simple football game using his eye blinks only. His joy testing out the system was more than enough to be convinced that I spent my time working on a meaningful project.

If you are interested in learning more, here is [my bachelor's thesis](/assets/pdf/bachelors_thesis-Karahan_Yilmazer.pdf):

<iframe src="/assets/pdf/bachelors_thesis-Karahan_Yilmazer.pdf" width="100%" height="1000px" style="border-radius: 15px;"></iframe>
