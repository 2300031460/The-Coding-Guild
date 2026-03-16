# 🚀 Sentinel

### AI-Powered Predictive Income Protection for Gig Delivery Workers

![AI Powered](https://img.shields.io/badge/AI-Powered-blue)
![Insurance](https://img.shields.io/badge/Parametric-Insurance-green)
![Gig Economy](https://img.shields.io/badge/Gig-Economy-orange)
![Hackathon](https://img.shields.io/badge/Guidewire-DEVTrails-purple)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

💡 **Sentinel** is an AI-driven platform designed to protect gig delivery workers from **income loss caused by environmental disruptions** such as rain, heatwaves, and pollution.

The system combines **machine learning, environmental monitoring, and automated parametric insurance payouts** to provide financial protection for delivery partners working across multiple gig platforms.

---

# 👥 Team Members & Contributions

| 👤 Team Member | 🎯 Role | 💫 Contribution |
|---------------|--------|----------------|
| **Sankurathri Saketh** | 🧑‍💼 **Team Lead & Data Strategy Analyst** | Led overall project planning and coordination, defined the project roadmap, supervised team collaboration, and contributed to analyzing environmental and platform data requirements for the Sentinel system. |
| **Gourishetti Ruthvik** | 🚀 **Lead Software Developer** | Implemented core application logic, developed backend services and integration modules, managed the project repository, and ensured seamless connectivity between system components. |
| **G. Sai Pradhun** | 🏗️ **System Architect** | Designed the Sentinel system architecture, planned the layered service structure, defined module interactions, and ensured scalability and modular development across the platform. |
| **Girish Gautam Vinodh Kumar** | 📄 **Technical Documentation & Quality Assurance Engineer** | Prepared detailed project documentation including README and system descriptions, validated documentation accuracy, assisted in testing workflows, and ensured clarity and consistency across project materials. |
| **Bangaru Naga Venkata Yuva Nandan** | 🤖 **AI & Machine Learning Engineer** | Developed and tested AI/ML components for disruption risk prediction, implemented machine learning models, and supported model evaluation and experimentation for system intelligence. |


---

# 📄 1. Abstract

Significant employment opportunities have been created in the Indian gig economy through digital delivery platforms such as **Swiggy, Zomato, Amazon, Blinkit, and Zepto**.

These platforms employ thousands of delivery partners who operate as **independent contractors** and earn income based on completed tasks.

However, these workers are highly vulnerable to **external environmental disruptions**, including:

* Heavy rainfall
* Air pollution
* Extreme temperatures
* Storms and natural disasters

Such disruptions directly affect delivery activity, reducing the number of completed tasks and ultimately lowering workers' income.

> ⚠️ **Key Issue:** Gig workers typically do not receive benefits such as paid leave, insurance, or financial protection when their income drops.

To address this challenge, the project proposes **Sentinel**, an **AI-based predictive income protection platform**.

---

### 📡 Data Sources Used by Sentinel

| Data Source                     | Purpose                            |
| ------------------------------- | ---------------------------------- |
| Weather Monitoring Services     | Detect rainfall, storms, heatwaves |
| Air Quality Monitoring Stations | Track pollution levels             |
| Geo-location Systems            | Identify affected delivery zones   |
| Platform APIs                   | Monitor delivery activity          |

Machine learning models analyze these inputs to **predict disruption risks** and automatically trigger compensation for affected workers.

Sentinel also introduces a **weekly micro-premium model** that aligns with the **weekly earning cycle of gig workers**.

---

# ⚠️ 2. Problem Statement

Major gig platforms operating in India include:

| Platform | Category            |
| -------- | ------------------- |
| Swiggy   | Food Delivery       |
| Zomato   | Food Delivery       |
| Zepto    | Quick Commerce      |
| Blinkit  | Quick Commerce      |
| Amazon   | E-commerce Delivery |
| Flipkart | E-commerce Delivery |

These companies employ **millions of delivery partners** across cities such as:

* Mumbai
* Delhi
* Bangalore
* Chennai

Despite being essential to the digital economy, gig workers operate as **independent contractors**, meaning they receive **no financial protection during disruptions**.

---

### 🌧️ Examples of Environmental Disruptions

| City      | Disruption           | Impact                  |
| --------- | -------------------- | ----------------------- |
| Mumbai    | Flooding             | Delivery routes blocked |
| Delhi     | Severe air pollution | Outdoor work restricted |
| Chennai   | Cyclonic weather     | Logistics disruptions   |
| Bangalore | Heavy rainfall       | Reduced delivery demand |

Even short disruptions can significantly impact workers' **weekly income cycles**.

---

### ❗ Limitations of Existing Insurance Products

| Limitation                   | Description                                   |
| ---------------------------- | --------------------------------------------- |
| Complex Claims               | Require documentation and manual verification |
| Inflexible Policy Structures | Do not match gig worker earnings              |
| Income Recognition Issues    | Gig income often not considered insurable     |

This results in a **major uninsured income gap** in the gig economy.

---

# 💡 3. Proposed Solution

Sentinel is an **AI-powered parametric insurance platform** that provides automated income protection for gig delivery workers.

The platform continuously monitors environmental conditions and automatically compensates workers when disruption thresholds are exceeded.

---

### 🎯 Key Objectives

| Objective                | Description                                         |
| ------------------------ | --------------------------------------------------- |
| Automated Protection     | Financial protection without manual claims          |
| Environmental Monitoring | Real-time detection of disruptions                  |
| AI Risk Prediction       | Machine learning estimates disruption probabilities |
| Parametric Triggers      | Automated payout activation                         |
| Multi-Platform Support   | Works across multiple gig delivery apps             |

---

### 📊 Environmental Data Monitored

* Rainfall intensity
* Air quality levels
* Temperature extremes
* Disaster alerts

Machine learning models analyze these signals to detect disruptions and activate **automated compensation**.

---

# 🏗️ 4. System Architecture

The Sentinel platform follows a **layered architecture design**.

```mermaid
flowchart TD

A[Layer 1: External Data Sources  
Weather APIs  
AQI Sensors  
Traffic Data  
Platform APIs  
GPS]

B[Layer 2: AI Risk Engine  
Machine Learning Models  
Disruption Risk Analysis]

C[Layer 3: Parametric Trigger Engine  
Threshold Monitoring  
Event Validation]

D[Layer 4: Automated Payout Processing  
Payment Calculation  
UPI / Razorpay Transfers]

E[Layer 5: Sentinel Applications  
Worker Mobile App  
Admin Dashboard]

A --> B
B --> C
C --> D
D --> E
```

This modular architecture allows **independent services and scalable deployment**.

---

# ⚡ 5. Parametric Disruption Triggers

# Low-Risk Zone Triggers (0.8× Multiplier)

Regions: Rajasthan, Delhi, Madhya Pradesh, Uttar Pradesh

| Trigger | Data Source | Threshold Condition | Payout Rule | Fraud Validation | Coverage / Plans |
|--------|-------------|--------------------|-------------|------------------|------------------|
| **Heavy Rain / Flood Alert** (Environmental) | IMD Open Data API + District Flood Warning System | Rainfall exceeds IMD Orange Alert threshold or district flood warning issued in worker’s zone | Full-day income replacement for each day the alert remains active | Worker GPS confirms presence within alert zone and delivery volume significantly drops | Wanderer ₹23/wk (net ₹0) <br> Guardian ₹47/wk (net ₹0) <br> Vanguard ₹79/wk (net ₹9) <br> Sentinel ₹119/wk (net ₹49) |
| **Extreme Heat Wave** (Environmental) | IMD Heatwave Advisory + OpenWeatherMap | Temperature exceeds safe outdoor limits and official heatwave advisory is active | Half-day income replacement during peak heat hours | Worker must be active during delivery hours and GPS confirms presence in heat zone | Wanderer ₹23/wk (net ₹0) <br> Guardian ₹47/wk (net ₹0) <br> Vanguard ₹79/wk (net ₹9) <br> Sentinel ₹119/wk (net ₹49) |
| **Hazardous AQI Event** (Environmental) | CPCB National AQI + Government GRAP advisory | AQI crosses hazardous level and outdoor work restrictions are issued | Full-day income replacement for AQI day events | Delivery volume reduction verified across platforms and validated with CPCB AQI readings | Vanguard ₹79/wk (net ₹9) <br> Sentinel ₹119/wk (net ₹49) |
| **Social Disruption** (Social) | Government advisory feeds + district announcements | Curfew, bandh, or Section 144 order confirmed in worker’s district | Hourly income replacement during disruption window | Event verified using NLP from official announcements and GPS confirmation of worker location | Vanguard ₹79/wk (net ₹9) <br> Sentinel ₹119/wk (net ₹49) |
| **Platform Delivery Blackout** (Platform) | Platform API health monitor + outage tracking system | Delivery app outage exceeding two hours in worker’s zone | Hourly income replacement up to six hours per incident | Worker GPS confirms presence and peer delivery activity shows zero orders | Sentinel ₹119/wk (net ₹49) |

# High-Risk Zone Triggers (1.4× Multiplier)

Regions: Mumbai, Kolkata, Chennai, Kerala, Assam

| Trigger | Data Source | Threshold Condition | Payout Rule | Fraud Validation | Coverage / Plans |
|-------|-------------|--------------------|------------|-----------------|----------------|
| **Heavy Rain / Flood Alert** (Environmental) | IMD Open Data API + District Flood Warning System | Rainfall exceeds IMD Orange Alert threshold or district flood warning issued in worker’s zone | Full-day income replacement for each day the alert remains active | Worker GPS confirms presence within alert zone and delivery volume significantly drops | Wanderer ₹41/wk (net ₹0) <br> Guardian ₹83/wk (net ₹13) <br> Vanguard ₹139/wk (net ₹69) <br> Sentinel ₹209/wk (net ₹139) <br> Paragon ₹279/wk (high only) |
| **Extreme Heat Wave** (Environmental) | IMD Heatwave Advisory + OpenWeatherMap | Temperature exceeds safe outdoor limits and official heatwave advisory is active | Half-day income replacement during peak heat hours | Worker must be active during delivery hours and GPS confirms presence in heat zone | Wanderer ₹41/wk (net ₹0) <br> Guardian ₹83/wk (net ₹13) <br> Vanguard ₹139/wk (net ₹69) <br> Sentinel ₹209/wk (net ₹139) <br> Paragon ₹279/wk (high only) |
| **Hazardous AQI Event** (Environmental) | CPCB National AQI + Government GRAP advisory | AQI crosses hazardous level and outdoor work restrictions are issued | Full-day income replacement for AQI day events | Delivery volume reduction verified across platforms and validated with CPCB AQI readings | Vanguard ₹139/wk (net ₹69) <br> Sentinel ₹209/wk (net ₹139) <br> Paragon ₹279/wk (high only) |
| **Social Disruption** (Social) | Government advisory feeds + district announcements | Curfew, bandh, or Section 144 order confirmed in worker’s district | Hourly income replacement during disruption window | Event verified using NLP from official announcements and GPS confirmation of worker location | Vanguard ₹139/wk (net ₹69) <br> Sentinel ₹209/wk (net ₹139) <br> Paragon ₹279/wk (high only) |
| **Platform Delivery Blackout** (Platform) | Platform API health monitor + outage tracking system | Delivery app outage exceeding two hours in worker’s zone | Hourly income replacement up to six hours per incident | Worker GPS confirms presence and peer delivery activity shows zero orders | Sentinel ₹209/wk (net ₹139) <br> Paragon ₹279/wk (high only) |

# 🧠 6. AI and Machine Learning Components

| Component | Technology | Function (with more description) |
|-----------|-----------|-----------------------------------|
| Risk Prediction | LSTM Time-Series Models | Forecast environmental disruptions by learning patterns in past weather and pollution data, so the system can warn when delivery work is likely to be affected. |
| Fraud Detection | Anomaly Detection Models | Identify suspicious activities by spotting behaviour that looks very different from normal payouts or worker activity, helping block fake or dishonest claims. |
| Premium Pricing | Gradient Boosted Trees | Calculate dynamic premiums by studying risk factors (city, season, disruption history) and setting fair weekly prices for different workers and zones. |
| Zone Classification | ML Risk Models | Categorize delivery zones by risk level (low, medium, high) based on historical disruption data, so high-risk areas get stronger monitoring and protection. |

# 🔄 7. Application Workflow

```mermaid
flowchart TD

A[Delivery Partner Registers in Sentinel App]
B[Worker Links Gig Platform Accounts]
C[Sentinel Monitors Environmental Conditions]
D[AI Models Analyze Disruption Risks]
E[Parametric Trigger Engine Validates Event]
F[Compensation Automatically Credited to Worker Wallet]

A --> B
B --> C
C --> D
D --> E
E --> F
```

---

# 💰 8. Weekly Premium Model
# Sentinel Insurance Plans

## Low-Risk Zone (0.8× Multiplier)

Regions: Rajasthan, Delhi, Madhya Pradesh, Uttar Pradesh

| Plan Name | Tier | Weekly Premium | Net Weekly Cost | Max Weekly Payout | Coverage |
|-----------|------|---------------|-----------------|------------------|----------|
| **Wanderer** | Basic | ₹23/week (₹29 × 0.8) | ₹0/week after ₹70 deduction | ₹300 | Rain and storm |
| **Guardian** | Plus | ₹47/week (₹59 × 0.8) | ₹0/week after ₹70 deduction | ₹700 | Rain and pollution |
| **Vanguard** | Pro | ₹79/week (₹99 × 0.8) | ₹9/week after ₹70 deduction | ₹1,100 | Multi-trigger |
| **Sentinel** | Pro+ | ₹119/week (₹149 × 0.8) | ₹49/week after ₹70 deduction | ₹2,500 | Comprehensive |

**Note:**  
Low-risk zones include four plans: Wanderer → Guardian → Vanguard → Sentinel.  
Workers receive a **0.8× multiplier discount** on all base premiums.

---

# High-Risk Zone (1.4× Multiplier)

Regions: Mumbai, Kolkata, Chennai, Kerala, Assam

| Plan Name | Tier | Weekly Premium | Net Weekly Cost | Max Weekly Payout | Coverage |
|-----------|------|---------------|-----------------|------------------|----------|
| **Wanderer** | Basic | ₹41/week (₹29 × 1.4) | ₹0/week after ₹70 deduction | ₹300 | Rain and storm |
| **Guardian** | Plus | ₹83/week (₹59 × 1.4) | ₹13/week after ₹70 deduction | ₹700 | Rain and pollution |
| **Vanguard** | Pro | ₹139/week (₹99 × 1.4) | ₹69/week after ₹70 deduction | ₹1,400 | Multi-trigger |
| **Sentinel** | Pro+ | ₹209/week (₹149 × 1.4) | ₹139/week after ₹70 deduction | ₹2,500 | Comprehensive |
| **Paragon** | Ultra | ₹279/week (₹199 × 1.4) | ₹209/week after ₹70 deduction | ₹4,000 | Flood, storm, pollution & evacuation |

**Note:**  
High-risk zones include five plans: Wanderer → Guardian → Vanguard → Sentinel → Paragon.  
The **Paragon (Ultra)** plan is available only in extreme flood, storm, and pollution-prone regions.
---

# ⚙️ 9. Technology Stack

| Technology        | Category         | Purpose                               |
| ----------------- | ---------------- | ------------------------------------- |
| PyTorch           | AI Framework     | Weather prediction models             |
| TensorFlow        | AI Framework     | Income drop detection                 |
| LangChain         | AI Orchestration | Decision automation                   |
| Pinecone          | Vector Database  | Worker embeddings & similarity search |
| React + Next.js   | Frontend         | Dashboard & worker interface          |
| FastAPI           | Backend API      | Model serving                         |
| OpenAI Embeddings | AI Embeddings    | Vector representation                 |
| Docker            | Containerization | Deployment portability                |
| Tailwind CSS      | UI Framework     | Responsive interface                  |

---

# 🌍 10. Expected Impact

Sentinel introduces a **new financial protection system** for gig workers vulnerable to environmental disruptions.

### Key Benefits

| Impact Area               | Benefit                               |
| ------------------------- | ------------------------------------- |
| Worker Financial Security | Protects income during disruptions    |
| Faster Compensation       | Eliminates manual insurance claims    |
| Scalable Protection       | Can support millions of workers       |
| Technological Innovation  | Combines AI with parametric insurance |

By combining **predictive analytics, automated verification, and instant digital payouts**, Sentinel creates a **scalable safety net for gig economy workers**.

---

⭐ *If you like this project, consider giving the repository a star!*
