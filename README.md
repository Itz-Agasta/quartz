# quartz



Moving to the evidence base that shaped this work, I will walk you through the last five years of peer-reviewed research in intelligent spoilage detection.”

[Gesture to the slide; slight pause]

We begin with Mishra et al. in 2021, who demonstrated that low-cost MOS gas sensors—identical in chemistry to the ones we have on our PCB—can be used for  climacteric fruits such as bananas and apples. Their contribution was not high accuracy per-se—only 67 %—but the proof that consumer-grade sensors are sensitive to sub-ppm changes in ethylene and ethanol. That gave us the confidence to select the same sensor family rather than expensive spectroscopic modules.

Next, the IoT System paper of 2025 scaled the idea to a multi-channel Arduino architecture. The authors achieved 91.9 % accuracy with an AUC of 0.98, but they did so by fusing four separate sensor dies and a cloud-based random forest. Our key takeaway was the dimensionality-reduction pipeline—PCA followed by quantile normalisation—which we have re-implemented in TensorFlow Lite and now execute locally in under 30 ms.

The Fish Spoilage study from 2023 shifted the target matrix from produce to protein. Using MOX sensors for trimethylamine and TVB-N gases, the authors reached 96.87 % accuracy.  But the problem was due to environmental context suech S temp and relive humandiky there is a fluctuation of 8-12% in the telsut .
We have therefore added a BME688 as an auxiliary sensor, feeding both gas and environmental channels into our classifier.

[Slight lean forward, lower voice for emphasis]

A parallel line of work is represented by FreshIQ, also 2025, which couples BME688 outputs with computer-vision cues. While the vision component is powerful, it demands line-of-sight and increases unit cost by nearly 40 %. Our design intentionally diverges here: we sacrifice visual modality to stay within a sub-2 000 ₹ BoM and to preserve battery life, yet we maintain comparable accuracy



Finally, Xu et al. 2021 established the feasibility of running SVM and small-footprint neural networks on Cortex-M4 microcontrollers. Their reported inference latency—22 ms at 80 MHz—directly informed our decision to deploy a 32 kB pruned CNN on the same MCU family rather than outsourcing computation to the cloud.

[Sweep gaze across the audience, end with a concise linkage]


 Yaaz, That, in essence, is how the literature survey translates into the architecture. Thank you for your time 
 
