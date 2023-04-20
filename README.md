
# METRIVERSE - CHURN ANALYZER BUSINESS INTELLIGENCE TOOL
The project aims to develop a web-based application powered by machine learning algorithms that provides comprehensive analysis to businesses and helps them make better decisions regarding customer churn. The solution is customizable and scalable, making it suitable for businesses of any size and industry. The goal is to build a no-code platform where businesses can leverage advanced machine learning algorithms to make data-informed decisions regarding customer retention and enhance their overall performance.


## Frontend
The frontend of the project is responsible for rendering the virtual environment and user interface for Metriverse.
##  👨‍💻 Demo

You can view the demo of the website at https://www.metriverse.systems/


## Prerequisites
Before installation, please make sure you have already installed the following tools:

- Git
- NodeJs
## Getting Started
To run the frontend on your local machine, follow these steps:

- Clone this repository using **git clone**. 
- Install the required dependencies using **npm install**.
- Start the server using **npm start**.
- Open your web browser and navigate to http://localhost:3000.
## Tech Stack
- **Backend:** Python, Streamlit
- **Frontend:** React
- **Database:** Firebase
- **Deployment:** Heroku, Vercel
- **Machine Learning:** Scikit-learn, Logistic Regression, Random Forest, Gradient Boosting, Lime
- **Data Analysis and Visualization:** Pandas, Matplotlib, NumPy, Statsmodels, Plotly, Seaborn, Pillow
- **Domain Name:** Name.com
##  Usage
1. Sign up or log in to the platform
2. Upload customer data or connect to an existing data source
3. Analyze customer data and identify churn risks
4. Take proactive measures to prevent customer churn
## Overview
Our frontend provides several services to help you analyze your customer data:
- Home
- Services
- About
- Basic signup and login
- Contact form

Under Services, you will find four pages:

1. **Upload:** Upload a data file that will be stored in Firebase's database
2. **Exploratory Data Analysis:** Get an overview of the selected data file
3. **Insights:** Get insights and predictions based on global data
4. **Individual Customer Analysis:** Get insights and predictions on an individual level
#### **Upload**
On the Upload page, you can easily upload CSV data files which will be securely stored in our database. This data can be accessed and analyzed on other pages of our platform. Our user-friendly interface makes it simple to upload and manage your data. Keep your business data organized and gain valuable insights with our upload feature.

#### **Exploratory Data Analysis**
On the exploratory data analysis page, users can visualize the selected data file through various graphs and charts. Metrics can be viewed based on specific time periods like year, month, or quarter. These visualizations provide valuable insights into the data, helping businesses to get indepth knowledge of data.

 ![picture alt](https://github.com/HarshaVardhan547/ML-Based-BI-Web-Application-Frontend/blob/207c1b9dcc724251c9292fe591c2ba094b6490c0/assets%20for%20readme/eda.png)

#### **Insights** 

- The total number of potentially risky customers and the potential annual loss the company may face if they churn, along with a Pareto analysis.
- The major driving forces behind customer churn based on a Permutation Feature Importance technique.
- Subgroup-specific feature importance, allowing for a granular understanding of customers based on independent variables.
![picture alt](https://github.com/HarshaVardhan547/ML-Based-BI-Web-Application-Frontend/blob/207c1b9dcc724251c9292fe591c2ba094b6490c0/assets%20for%20readme/insights.png)

#### **Individual Customer Analysis** ####

- The Individual Customer Analysis section offers a graphical user interface to analyze each customer individually.
- Customer-specific information is displayed upon choosing the customer ID, including tenure, originating city, and annual revenue.
- A chart provides customer-specific churn insights.
- The churn probability and forecast in the near future are calculated based on the independent variables selected by the user.
- The Influencing Factors section helps understand the major driving forces behind customer churn behavior.
- Our churn analyzer tool provides a comprehensive view of customer churn risk, enabling businesses to take proactive steps to retain their customers.
![picture alt](https://github.com/HarshaVardhan547/ML-Based-BI-Web-Application-Frontend/blob/207c1b9dcc724251c9292fe591c2ba094b6490c0/assets%20for%20readme/individual.png)
## License

[MIT](https://choosealicense.com/licenses/mit/)

