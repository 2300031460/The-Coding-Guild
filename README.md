# Sentinel

### AI-Powered Predictive Income Protection for Gig Delivery Workers

Guidewire DEVTrails 2026 – Phase 1 Submission

---

# 1. Abstract

Significant employment opportunities have been provided in the Indian gig economy through the development of digital delivery platforms such as **Swiggy, Zomato, Amazon, Blinkit, and Zepto**. These platforms employ workers in large numbers by distributing delivery tasks among their delivery partners, who generally act as independent contractors and receive payment based on the number of tasks completed.

While this system has created employment opportunities for a large population, it has also exposed workers to **economic instability**, particularly during external disruptions.

Environmental factors such as rainfall, poor air quality, extreme temperature conditions, and storms often cause disruptions in the services provided through these platforms in Indian cities. This leads to a decline in the number of completed tasks, which directly reduces the income of delivery workers.

Since gig workers operate as independent contractors, they **do not receive benefits such as paid leave, insurance, or income protection** when these disruptions occur.

To address these challenges, this project proposes **Sentinel**, an **AI-based predictive income protection platform** designed to provide financial protection to gig delivery workers when environmental disruptions reduce their earnings.

The Sentinel system utilizes **data streams from multiple sources**, including:

| Data Source                     | Purpose                            |
| ------------------------------- | ---------------------------------- |
| Weather Monitoring Services     | Detect rainfall, storms, heatwaves |
| Air Quality Monitoring Stations | Track pollution levels             |
| Geo-location Systems            | Identify affected delivery zones   |
| Platform APIs                   | Monitor delivery activity          |

Machine learning algorithms analyze these inputs to **predict disruption risk levels**. When predefined trigger conditions are detected, the system automatically releases compensation to eligible workers.

Sentinel also functions as a **multi-platform web system**, allowing delivery partners working across multiple gig platforms to connect their accounts and receive unified protection.

To ensure affordability, Sentinel introduces a **weekly micro-premium model** aligned with the weekly earning cycle of gig workers.

---

# 2. Problem Statement

The gig delivery workforce in India includes major platform companies such as:

| Platform | Type                |
| -------- | ------------------- |
| Swiggy   | Food Delivery       |
| Zomato   | Food Delivery       |
| Zepto    | Quick Commerce      |
| Blinkit  | Quick Commerce      |
| Amazon   | E-commerce Delivery |
| Flipkart | E-commerce Delivery |

These companies collectively employ **millions of delivery partners** across metropolitan cities such as **Mumbai, Delhi, Bangalore, and Chennai**.

Despite being essential to the digital economy, gig delivery workers operate as **independent contractors**, meaning they receive **no financial security or protection** from the platforms they work for.

Environmental disruptions frequently interrupt delivery operations and directly affect worker income.

### Examples of Environmental Disruptions

| City      | Disruption           | Impact                  |
| --------- | -------------------- | ----------------------- |
| Mumbai    | Flooding             | Delivery routes blocked |
| Delhi     | Severe air pollution | Outdoor work restricted |
| Chennai   | Cyclonic weather     | Logistics disruptions   |
| Bangalore | Heavy rainfall       | Reduced delivery demand |

Such events can result in **multiple days of lost wages**.

Because most gig workers rely on **weekly income cycles**, even short disruptions can significantly impact their financial stability.

### Limitations of Existing Insurance Products

| Limitation                   | Description                                   |
| ---------------------------- | --------------------------------------------- |
| Complex Claims               | Require documentation and manual verification |
| Inflexible Policy Structures | Not aligned with gig worker earnings          |
| Income Recognition Issues    | Gig income often not considered insurable     |

This results in a **large uninsured income gap** within the gig delivery workforce.

---

# 3. Proposed Solution

Sentinel is an **AI-driven parametric insurance platform** designed to protect gig delivery workers from temporary income loss caused by environmental and social disruptions.

The platform continuously monitors environmental conditions in real time and automatically provides financial compensation when disruption thresholds are exceeded.

### Key Objectives

| Objective                | Description                                        |
| ------------------------ | -------------------------------------------------- |
| Automated Protection     | Provide financial protection without manual claims |
| Environmental Monitoring | Detect disruptions using real-time data            |
| AI Risk Prediction       | Estimate disruption probabilities                  |
| Parametric Triggers      | Automatically activate payouts                     |
| Multi-Platform Support   | Support workers across different delivery apps     |

Sentinel collects and analyzes data including:

* Rainfall intensity
* Air quality levels
* Temperature extremes
* Disaster alerts

Machine learning models analyze these inputs to determine disruption severity.

When thresholds are crossed, the **parametric insurance engine** automatically verifies the event and triggers payouts.

Workers **do not need to submit claims or documentation**, making the system efficient and accessible.

---

# 4. System Architecture

The Sentinel platform follows a **layered architecture** consisting of multiple independent services.

| Layer   | Components                                                  | Function                                   |
| ------- | ----------------------------------------------------------- | ------------------------------------------ |
| Layer 1 | Weather APIs, AQI Sensors, Traffic Data, Platform APIs, GPS | Collect environmental and operational data |
| Layer 2 | AI Risk Engine                                              | Analyze disruption risk using ML models    |
| Layer 3 | Parametric Trigger Engine                                   | Validate trigger conditions                |
| Layer 4 | Payout Processing                                           | Calculate and release payments             |
| Layer 5 | Applications                                                | Worker Mobile App & Admin Dashboard        |

This modular design allows **scalable deployment and independent service operation**.

---

# 5. Parametric Disruption Triggers

Sentinel uses **parametric insurance triggers**, where payouts are activated based on measurable indicators.

| Trigger Event          | Data Source             | Threshold Condition                     | Payout Rule                 | Coverage Tier  |
| ---------------------- | ----------------------- | --------------------------------------- | --------------------------- | -------------- |
| Heavy Rainfall / Flood | IMD Weather API         | Rainfall exceeds orange alert threshold | Full-day income replacement | All            |
| Extreme Heat           | IMD Heatwave Advisory   | Temperature exceeds safe limits         | Half-day income replacement | All            |
| Severe Air Pollution   | CPCB AQI Data           | AQI reaches hazardous level             | Full-day income replacement | Standard & Pro |
| Social Disruption      | Government Advisories   | Curfew or Section 144 declared          | Hourly income replacement   | Standard & Pro |
| Platform Blackout      | Platform API Monitoring | Delivery outage > 2 hours               | Hourly payout (max 6 hours) | Pro            |

Once trigger conditions are verified, compensation is **automatically released**.

---

# 6. AI and Machine Learning Components

Artificial intelligence is central to Sentinel’s disruption detection and pricing strategy.

| Component           | Technology               | Function                           |
| ------------------- | ------------------------ | ---------------------------------- |
| Risk Prediction     | LSTM Time-Series Models  | Forecast environmental disruptions |
| Fraud Detection     | Anomaly Detection Models | Identify suspicious activities     |
| Premium Pricing     | Gradient Boosted Trees   | Calculate dynamic premiums         |
| Zone Classification | ML Risk Models           | Categorize delivery zones by risk  |

---

# 7. Application Workflow

| Step | Process                                    |
| ---- | ------------------------------------------ |
| 1    | Delivery partner registers in Sentinel app |
| 2    | Worker links gig platform accounts         |
| 3    | Sentinel monitors environmental conditions |
| 4    | AI models analyze disruption risks         |
| 5    | Parametric trigger engine validates event  |
| 6    | Compensation automatically credited        |

---

# 8. Weekly Premium Model

To match gig worker income patterns, Sentinel uses **weekly micro-premiums**.

| Plan  | Weekly Premium | Maximum Weekly Payout | Coverage                  |
| ----- | -------------- | --------------------- | ------------------------- |
| Basic | ₹29            | ₹300                  | Rain & storm protection   |
| Plus  | ₹59            | ₹700                  | Rain + pollution coverage |
| Pro   | ₹99            | ₹1400                 | Multi-trigger protection  |
| Pro+  | ₹149           | ₹2500                 | Comprehensive protection  |

---

# 9. Technology Stack

| Category             | Technology                        |
| -------------------- | --------------------------------- |
| Frontend             | React Native                      |
| Backend              | Node.js, Python FastAPI           |
| Machine Learning     | TensorFlow, Scikit-learn, XGBoost |
| Database             | PostgreSQL                        |
| Cloud Infrastructure | AWS                               |
| Real-time Data       | Weather & Pollution APIs          |
| Payments             | UPI Integration, Razorpay         |

---

# 10. Expected Impact

Sentinel introduces a **new financial protection mechanism for gig workers** vulnerable to environmental disruptions.

### Benefits

| Impact Area               | Benefit                               |
| ------------------------- | ------------------------------------- |
| Worker Financial Security | Protects income during disruptions    |
| Faster Compensation       | Eliminates manual insurance claims    |
| Scalable Protection       | Can support millions of workers       |
| Technological Innovation  | Combines AI with parametric insurance |

By combining **predictive analytics, automated verification, and instant digital payouts**, Sentinel creates a scalable safety net for gig economy workers across urban environments.
