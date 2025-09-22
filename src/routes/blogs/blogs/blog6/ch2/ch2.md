# Advancements in Astronomy Blog (July)

---

## Forecasting Cosmic Proton Flux with Deep Learning: A New LSTM-Based Approach  

A recent study introduces a deep learning model designed to predict daily cosmic ray proton flux—an important task for ensuring the safety of satellites, astronauts, and space-based systems. These high-energy protons, influenced by solar and interstellar activity, can interfere with communication networks and satellite operations. Accurate forecasting of proton flux is essential for space weather planning and risk management.  

### Smarter Forecasting for Complex Phenomena  
Traditional models for proton flux prediction rely on statistical or basic machine learning approaches. While useful, they often struggle with the complex, non-linear, and long-term dependencies present in space weather data. To overcome this, the researchers developed a predictive model using **Long Short-Term Memory (LSTM) networks**, known for their effectiveness in time-series forecasting.  

The model was trained on a dataset of daily proton flux measurements recorded in standardized units *(m⁻²·sr⁻¹·s⁻¹·GV⁻¹)*. Before training, the data underwent extensive preprocessing—handling missing values, formatting dates, and creating new time-based features such as year, month, and day of the year. The researchers also added lagged features to help the model detect past trends and temporal dynamics.  

To ensure the data was well-scaled for deep learning, it was normalized using **MinMax scaling**. A two-layer LSTM network with **dropout regularization** was then trained using **early stopping** to prevent overfitting.  


<div style="text-align: center; width-60">
  <img src="https://raw.githubusercontent.com/Team-Dhruva/Blogsphotos/refs/heads/main/Blog6/ch2img1.png">
</div>

### Powerful Results and Real-World Impact  
The model’s performance was evaluated using **Mean Squared Error (MSE)** and **R² score**. It achieved a high R² value of **0.961** and a low MSE, indicating both strong accuracy and reliability in its predictions.  

The study shows how LSTM networks can not only forecast with precision but also serve as valuable tools for early warnings and proactive space weather response.  

**Reference:**  
T, Kanishkaa & S, Mabel & JR, Jefnishya & S, Anandaraj. (2025). *Proton Flux Forecasting in Astrophysics: A Deep Learning Approach Using Long Short-Term Memory Networks.* 1-5. [DOI: 10.1109/RMKMATE64874.2025.11042860](https://doi.org/10.1109/RMKMATE64874.2025.11042860)  

---

## Tracking the Sun: On-Orbit Performance of the Hard X-ray Imager on ASO-S  

The Hard X-ray Imager (HXI) on board the Advanced Space-based Solar Observatory (ASO-S) has been quietly capturing high-energy solar activity from orbit. A recent study evaluates how well the instrument is performing in space, confirming that overall, it’s working as intended. At the same time, it identifies a few patterns and irregularities worth monitoring to ensure long-term data quality.  

HXI was developed to observe solar flares—explosive events on the Sun that emit large amounts of energy, especially in the X-ray spectrum. These observations help researchers better understand processes like magnetic reconnection and particle acceleration, which play key roles in solar activity. The design of HXI draws on experience from earlier missions like RHESSI and Solar Orbiter/STIX, but uses a different detector material—LaBr₃(Ce) scintillators—that work well at near-room temperatures and offer good energy resolution without the need for active cooling.  

The study finds that core performance indicators—like detection efficiency and energy resolution—remain largely within the expected range. But beyond those steady metrics, the researchers looked closely at how performance varies over time. They found two main patterns: regular fluctuations tied to the satellite’s orbit (~99 minutes) and the yearly cycle, and occasional anomalies not linked to any predictable timing.  

One such trend involves gradual temperature increases near the Solar Aspect System (SAS), likely caused by long-term heat buildup. Even small thermal shifts can affect detector performance and alignment, so tracking these changes is important. Similarly, while the system’s high voltage (HV) stays stable under normal conditions, it needs special attention during passages through the South Atlantic Anomaly (SAA)—a region with heightened radiation. During these times, operational resets or radiation exposure have occasionally led to abrupt gain drops—five of which were clearly identified in the data.  

Though these gain drops were temporary, they highlight the importance of careful high-voltage management and real-time response to environmental changes. Most deviations were linked to either SAA exposure or parameter resets, not to any deeper faults in the system.  

In summary, HXI has proven to be a robust and reliable instrument, but continued performance depends on routine monitoring, calibration updates, and optimized operations—especially when passing through harsher orbital environments. These efforts will ensure high-quality data for studying solar flares, and provide valuable feedback for future space-based X-ray instruments.  

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/Team-Dhruva/Blogsphotos/refs/heads/main/Blog6/ch2img2.png">
</div>

**Reference:**  
Liu, W., Wang, H., Zhang, Z. et al. (2025). *On-Orbit Performance Analysis of the Hard X-ray Imager (HXI) on the Advanced Space-Based Solar Observatory (ASO-S).* Sol Phys 300, 105. [DOI: 10.1007/s11207-025-02514-z](https://doi.org/10.1007/s11207-025-02514-z)  

---

## A Cosmic View of Life on Earth: Visualizing Biodiversity Through the Lens of Astronomy  

Biology and astrophysics might seem worlds apart, but a new interdisciplinary project is proving they can beautifully intersect. “A Cosmic View of Life on Earth” brings a fresh perspective to biological data visualization by adapting techniques and tools originally designed to explore the universe. The goal? To better understand Earth’s immense biodiversity through the kind of immersive, intuitive visual frameworks used in space science.  

Biologists today face the challenge of making sense of vast, complex datasets—ranging from DNA sequences to 3D scans of physical specimens—spanning millions of species and centuries of collection. These datasets are not just massive in size; they are highly diverse, deeply hierarchical, and very intricate. Exploring meaningful patterns in them often demands more than traditional charts or tables can offer. Looking to astrophysics for inspiration makes sense. In that field, scientists regularly manage enormous, multidimensional datasets—mapping stars, galaxies, and cosmic structures across scales from kilometers to billions of light-years. Tools like the open-source OpenSpace platform allow astrophysicists to interactively explore and present these data in highly engaging ways, from laptops to immersive planetarium domes.  

This project applies the same principles to biology. By adapting OpenSpace, the team has created a visualization pipeline that treats biological data—organized by the Linnaean classification system—like a map of the universe. Species are positioned in a spatially intuitive hierarchy, allowing researchers and the public to “fly through” the tree of life as if navigating a galaxy of organisms. A key innovation here is a new algorithm that combines constrained multidimensional scaling (MDS) with spherical positional relaxation. This balance ensures that data are displayed both accurately and clearly. The resulting visualizations aren’t just informative—they’re immersive. By incorporating geographic metadata, 3D specimen scans, and even species-specific sounds (like bird songs), the platform paints a rich, multi-sensory portrait of biodiversity.  

One prototype featured in the study allows users to explore the full diversity of eukaryotic life—plants, animals, fungi, and protists—at the scale of a planetarium. This opens the door to more intuitive scientific exploration and also makes complex biological data far more accessible to educators, students, and the general public. By merging astronomy’s visual language with biology’s complexity, “A Cosmic View of Life on Earth” not only makes it easier to analyze biodiversity, but also creates a powerful storytelling platform that helps people see the living world in an entirely new way.  


<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/Team-Dhruva/Blogsphotos/refs/heads/main/Blog6/ch2img3.png">
</div>

**Reference:**  
Duchemin, Wandrille et al. (2025). *A Cosmic View of Life on Earth: Hierarchical Visualization of Biological Data Using Astronomical Software.* IEEE Computer Graphics and Applications. [DOI: 10.1109/MCG.2025.3591713](https://doi.org/10.1109/MCG.2025.3591713)  

---

## Fine-Tuning the Giants: Smarter Adjustment Strategies for Dual Reflector Antennas  

Large dual-reflector antennas are critical for high-frequency communication, but environmental factors like wind or heat can subtly deform their surfaces—hurting performance. This study proposes a full-path active adjustment strategy to keep these antennas operating at their best across all elevation angles.  

Using geometric optics, the researchers first linked surface displacements to wavefront distortions. Then, they compared three reflector adjustment algorithms—based on standard, fitted, and optimal parabolic surfaces—to determine how each calculated necessary corrections. Rather than rely on a single method, they developed a hybrid strategy that adapts to real-world conditions by factoring in elevation angle and environmental complexity. This allows the system to switch between adjustment algorithms depending on what the situation demands.  

Simulations on a 110-meter antenna showed the strategy keeps the structure in optimal shape with less mechanical movement, improving efficiency across a range of conditions.  
  

**Reference:**  
Xiang, Binbin et al. (2025). *Research on the Full-Path Active Adjustment Strategy of Dual Reflector Antennas.* Research in Astronomy and Astrophysics. [DOI: 10.1088/1674-4527/adf277](https://doi.org/10.1088/1674-4527/adf277)  


