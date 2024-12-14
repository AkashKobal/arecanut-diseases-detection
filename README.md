# Arecanut Disease Detection

## Screenshots

![screenshot](https://github.com/AkashKobal/arecanut-diseases-detection/blob/main/Screenshot.png)


## Project Information

**Bachelor of Technology**  
**Computer Science and Engineering**  
**Presidency University, Bengaluru**  
**December 2024**  

School of Computer Science Engineering & Information Science  
Presidency University  

---

## Certificate

This is to certify that the project report titled **"Arecanut Disease Detection"** submitted by:

- **Prajwal A B** (Roll No: 20211CSD0105)
- **Akash** (Roll No: 20211CSD0116)
- **Kavyashree V Shetty** (Roll No: 20211CSD0099)
- **Sushmashree P S** (Roll No: 20211CSD0069)

is a bonafide work carried out under the supervision of:

**Dr. Yamanappa**  
Assistant Professor, School of CSE & IS  
Presidency University

### Endorsements:

- **Dr. L. Shakkeera**, Associate Dean, School of CSE
- **Dr. Saira Bhanu**, Head of Department, School of CSE & IS
- **Dr. Mydhili Nair**, Associate Dean, School of CSE
- **Dr. Sameeruddin Khan**, Pro-Vice Chancellor, Dean, School of CSE & IS

---

## Declaration

We hereby declare that the work presented in the project report titled **"Arecanut Disease Detection"** is a record of our own investigations conducted under the guidance of **Dr. Yamanappa**, Assistant Professor, School of Computer Science Engineering & Information Science, Presidency University, Bengaluru.  

We confirm that this report has not been submitted elsewhere for any other degree.

**Team Members:**

- **Prajwal A B** - 20211CSD0105
- **Akash** - 20211CSD0116
- **Kavyashree V Shetty** - 20211CSD0099
- **Sushmashree P S** - 20211CSD0069

---

## Abstract

Arecanut, also known as betel nut, is a vital tropical crop, with India being the second-largest producer and consumer globally. Despite its economic importance, arecanut plants are vulnerable to various diseases affecting their roots, trunk, and foliage throughout their growth cycle. Traditional disease detection relies on manual observation, which is labor-intensive and prone to inaccuracies.

This study presents a novel system utilizing Convolutional Neural Networks (CNNs) to automate the identification of arecanut diseases and provide actionable remedies. A custom dataset of 620 images, capturing both healthy and diseased samples, was developed and divided into training and testing sets in an 80:20 ratio. The CNN model was trained using:

- **Loss Function:** Categorical Cross-Entropy
- **Optimizer:** Adam Optimizer
- **Performance Metric:** Accuracy over 50 epochs

### Key Results:
- Disease detection accuracy: **88.46%**

This system offers farmers a reliable tool to manage and maintain crop health efficiently.

**Keywords:** Arecanut, Crop Health Monitoring, Convolutional Neural Networks, Deep Learning

---

## Acknowledgement

We express our sincere gratitude to:

- **Dr. Md. Sameeruddin Khan**, Pro-Vice Chancellor and Dean, School of CSE & IS, Presidency University
- **Dr. Shakkeera L**, Associate Dean, School of CSE
- **Dr. Mydhili Nair**, Associate Dean, School of CSE
- **Dr. Saira Bhanu**, Head of Department, School of CSE & IS

Special thanks to our guide **Dr. Yamanappa**, Assistant Professor, and our reviewer **Mr. Harish Kumar**, Assistant Professor, for their inspirational guidance and technical suggestions.

We also thank our family, friends, and coordinators:

- **Dr. Sampath A K**
- **Dr. Abdul Khadar A**
- **Mr. Md Zia Ur Rahman**
- **Ms. Manjula**
- **Mr. Muthuraj (GitHub Coordinator)**

---

## Table of Contents

1. [Abstract](#abstract)
2. [Acknowledgement](#acknowledgement)
3. [Introduction](#introduction)
   - 1.1 General Overview
   - 1.2 Relevance and Problem Statement
   - 1.3 Scope of the Project
4. [Literature Review](#literature-review)
   - 2.1 Research Gaps of Existing Methods
5. [Proposed Methodologies](#proposed-methodologies)
6. [Objectives](#objectives)
7. [System Design & Implementation](#system-design--implementation)
8. [Timeline for Execution (Gantt Chart)](#timeline-for-execution-gantt-chart)
9. [Outcomes](#outcomes)
10. [Results and Discussions](#results-and-discussions)
11. [Conclusion](#conclusion)
12. [References](#references)
13. [Pseudocode](#pseudocode)
14. [Screenshots](#screenshots)
15. [Enclosures](#enclosures)

---

## Introduction

### General Overview
Agriculture serves as the backbone of many economies, particularly in tropical regions where a variety of crops hold cultural and economic significance. One such crop is arecanut, commonly known as betel nut, which plays a crucial role in the livelihoods of millions of farmers. India, being the second-largest producer of arecanut, relies heavily on its cultivation for socio-economic sustainability.

However, arecanut crops are vulnerable to numerous diseases affecting their roots, trunks, leaves, and fruits. These diseases, if left undetected and untreated, can lead to substantial crop losses, jeopardizing farmers' income and impacting the agricultural sector. Traditional methods of diagnosing plant diseases typically involve manual inspection, which is time-consuming, labor-intensive, and prone to human error. Advanced technologies like machine learning and image processing offer efficient and scalable alternatives.

### Relevance and Problem Statement
Recent advancements in artificial intelligence (AI) have transformed numerous industries, including agriculture. Leveraging deep learning models, particularly Convolutional Neural Networks (CNNs), enables the analysis of crop images to detect diseases with remarkable accuracy. The primary issue faced by arecanut farmers is the lack of early disease identification tools, leading to delayed intervention and significant economic losses. This project aims to address these challenges by providing an automated, accurate, and cost-effective solution.

### Scope of the Project
The Arecanut Disease Detection project bridges the gap between traditional farming practices and modern technological innovations. The system uses a dataset comprising images of healthy and diseased arecanut plants (leaves, trunks, and nuts) for training a CNN model. It provides actionable recommendations to farmers, enhancing crop management efficiency, reducing losses, and supporting sustainable agricultural practices.

---

## Literature Survey
Recent studies exploring plant disease detection include:

- **Dhanuja K C (2020):** Used texture-based grading and the K-nearest neighbor (KNN) algorithm for arecanut disease detection with a dataset of 144 samples.
- **Manpreet Sandhu et al. (2020):** Employed machine learning algorithms for leaf image classification, utilizing drone-captured images.
- **Ashish Nage et al. (2019):** Developed an Android application for plant disease identification using CNN.
- **Swathy Ann Sam et al. (2020):** Compared CNN, KNN, SVM, and Decision Trees, achieving 86% accuracy with CNN.

This project builds on these studies by focusing specifically on arecanut disease detection, expanding the scope to include trunk and fruit analysis.

---

## Research Gaps in Existing Methods
Despite advancements, several research gaps persist in existing arecanut disease detection methods:

- **Data Limitations:** Small and imbalanced datasets, inadequate diversity, and poor data quality.
- **Methodological Shortcomings:** Issues such as overfitting, limited feature extraction, and ineffective transfer learning.
- **Performance Challenges:** Struggles with accuracy, speed, and robustness.

Future research should focus on collecting diverse and high-quality data, improving model training methods, and enabling real-time detection integrated with existing farming systems.

---

## Proposed Methodology

### Dataset
The dataset comprises healthy and diseased arecanut plant images, including leaves, trunks, and nuts. These images were captured using a digital camera from plantations in Shimoga District, Karnataka, India. The dataset underwent preprocessing techniques such as intensity normalization and masking portions of images to enhance feature extraction.

### Model
The project employs a Convolutional Neural Network (CNN) trained on a large dataset of processed images. Data augmentation techniques such as rotations, zooming, shifting, and flipping were used to expand the dataset artificially.

### Workflow
1. **Image Capture:** Farmers upload images of arecanut crops to the system.
2. **Preprocessing:** Images are normalized and preprocessed for classification.
3. **Model Training:** The CNN model, trained over 50 epochs, identifies visual patterns associated with diseases.
4. **Disease Detection:** The system classifies images as healthy or diseased, identifying specific diseases if present.

### Key Features
- Automated detection of disease spots or rotting areas.
- Actionable recommendations for combating identified diseases.
- High validation and test accuracy with minimized loss.

---
## Objectives

The primary objective of this research is to design a robust, automated system for the early detection, classification, and management of arecanut diseases using advanced machine learning and image processing techniques. 

### Key Goals:
1. **Comprehensive Dataset Creation:**
   - High-resolution images of healthy and diseased arecanuts (leaves, trunks, and nuts) are collected under expert guidance.
   - Diseases include Mahali (Koleroga), Stem Bleeding, and Yellow Leaf Spot.
   - Preprocessing: resizing, noise reduction, and normalization for optimized training.

2. **Automated Disease Detection:**
   - Leverages Convolutional Neural Networks (CNNs) for efficient, accurate detection and classification.
   - Replaces manual inspection with a scalable and adaptable solution.

3. **Solution Recommendation System:**
   - Provides actionable remedies for identified diseases to assist farmers in mitigation and yield improvement.

4. **Early Intervention and Cost Efficiency:**
   - Enables early detection to minimize disease spread and associated losses.
   - Cost-effective, accessible for small-scale farmers.

5. **Advancing Smart Farming Practices:**
   - Integrates technology into agriculture to foster sustainable farming.

## System Design & Implementation

### Objectives
The system builds, trains, and evaluates a Convolutional Neural Network (CNN) for image classification. It includes functionality for data preprocessing, visualization, model training, and prediction.

### Components

#### 1. Input Data
- **Source:** Image dataset stored in `Arecanut_dataset/train/`.
- **Structure:** Organized folders representing each class.

#### 2. Preprocessing
- **Resizing:** Images resized to 256x256 pixels.
- **Normalization:** Pixel values scaled to [0, 1].
- **Augmentation:** Random flips and rotations applied.

#### 3. Data Splitting
- Training, validation, and testing datasets created with an 80-10-10 split.

#### 4. Model Architecture
- Sequential CNN with:
  - Six convolutional layers.
  - Max-pooling layers.
  - Dense layers for feature extraction and classification.
  - Final layer uses softmax activation for `n_classes` probabilities.

#### 5. Training
- **Loss Function:** Sparse Categorical Cross-Entropy.
- **Optimizer:** Adam.
- **Metrics:** Accuracy.
- **Epochs:** Configurable (default 50).

#### 6. Evaluation
- Metrics such as training/validation accuracy and loss are calculated.
- Visualizations of metrics over epochs provided.

#### 7. Prediction
- Custom function predicts class and confidence for given images.
- Test samples visualized with actual and predicted labels.

#### 8. Model Saving
- Trained models saved with version control.

### Workflow

1. **Data Loading:**
   - Images loaded using `image_dataset_from_directory` with shuffled batches.
   - Class names inferred from folder names.

2. **Preprocessing Pipeline:**
   - Images normalized to [0, 1] using Rescaling.
   - Augmentation applies random flips and rotations.

3. **Dataset Partitioning:**
   - Training, validation, and test datasets split and shuffled.

4. **Model Training:**
   - Input shape: `(BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE, CHANNELS)`.
   - CNN extracts features and maps them to class probabilities.

5. **Model Evaluation:**
   - Accuracy and loss metrics visualized over epochs.

6. **Predictions:**
   - Function to predict class and confidence for images:

```python
   def predict(model, img):
       img_array = tf.keras.preprocessing.image.img_to_array(img)
       img_array = tf.expand_dims(img_array, 0)
       predictions = model.predict(img_array)
       predicted_class = class_names[np.argmax(predictions[0])]
       confidence = round(100 * (np.max(predictions[0])), 2)
       return predicted_class, confidence
```

7. **Model Saving:**
   - Trained model saved with versioning.

### Implementation Details

#### Libraries Used:
- TensorFlow and Keras: For model building and training.
- Matplotlib: For visualization.
- NumPy: For data manipulation.
- OS: For versioned saving of models.

#### Configurations:
- **IMAGE_SIZE:** 256x256 pixels.
- **BATCH_SIZE:** 32.
- **CHANNELS:** 3 (RGB).
- **EPOCHS:** Default 50.

#### Model Architecture:
- Resizing and Rescaling.
- Conv2D -> MaxPooling2D (repeated 6 times).
- Flatten -> Dense (64 units, ReLU).
- Dense (`n_classes`, Softmax).

### Potential Enhancements

1. **Hyperparameter Tuning:** Optimize learning rate, batch size, and architecture.
2. **Early Stopping:** Stop training when validation accuracy plateaus.
3. **Transfer Learning:** Use pre-trained models like ResNet.
4. **Deployment:** Export to TensorFlow Lite or ONNX for deployment.

---

This repository showcases a scalable, accurate, and accessible solution to arecanut disease detection, contributing to smart farming practices and sustainable agriculture.

## Authors and Acknowledgments
- **School of Computer Science Engineering & Information Science, Presidency University**

Special thanks to the researchers and farmers from Shimoga District, Karnataka, for their contributions to data collection and project insights.
---

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

