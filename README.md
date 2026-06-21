# AI Data Scientist

## Project Overview
- **Name**: AI Data Scientist
- **Goal**: AI-powered platform that automates the complete data analysis and data science workflow for any industry
- **Tech Stack**: Hono + TypeScript + Cloudflare Workers + TailwindCSS + Chart.js

## Live URL
- **Application**: https://3000-is9us9ikpk4cpiy9cwfeb-82b888ba.sandbox.novita.ai

## Features

### Implemented ✅

1. **Dataset Upload** - Drag & drop upload with CSV, JSON, TSV support, upload validation
2. **Automatic Data Understanding** - Detects columns, datatypes, categories, numerical features, dataset summary
3. **Data Cleaning Automation** - Missing values detection, duplicate rows detection, outlier detection, data quality score, recommendations
4. **Exploratory Data Analysis** - Mean, median, mode, variance, standard deviation, correlations, distributions
5. **Dynamic Visualizations** - Bar charts, pie charts, histograms, line charts, scatter plots, box plots, correlation matrix
6. **AI Insight Engine** - Executive summary, key findings, business insights, opportunities, risks, anomalies, recommendations
7. **AI Data Scientist Chat** - Interactive Q&A about uploaded datasets with context-aware responses
8. **Auto Machine Learning** - Regression & classification, model training, comparison, feature importance, metrics (R², RMSE, MAE, Accuracy, Precision, Recall, F1)
9. **Forecasting** - Revenue/sales/demand forecasting with exponential smoothing, confidence intervals, trend analysis
10. **Dashboard Builder** - Dynamic dashboards with KPI cards, quality gauges, summary widgets
11. **Modern UI** - Apple/Linear/Vercel inspired, dark mode, glassmorphism, smooth animations, fully responsive

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/upload` | Upload and parse dataset (CSV, JSON, TSV) |
| GET | `/api/datasets/:id` | Get dataset info |
| GET | `/api/datasets/:id/eda` | Get full EDA analysis |
| GET | `/api/datasets/:id/visualizations` | Get chart data for visualizations |
| POST | `/api/datasets/:id/insights` | Generate AI-powered insights |
| POST | `/api/datasets/:id/chat` | Interactive AI chat about data |
| POST | `/api/datasets/:id/ml` | Run automated ML pipeline |
| POST | `/api/datasets/:id/forecast` | Generate time-series forecasts |
| GET | `/api/datasets/:id/cleaning` | Get data cleaning suggestions |
| GET | `/api/datasets/:id/dashboard` | Get dashboard widget data |

### Data Processing Capabilities
- CSV parsing with quote handling
- JSON array parsing
- TSV support
- Automatic datatype detection (numerical, categorical, date, boolean, text)
- Statistical analysis (mean, median, mode, variance, std dev, quartiles, IQR, skewness)
- Correlation calculation
- Outlier detection (IQR method)
- Data quality scoring
- Duplicate detection

### ML Models
- Linear Regression
- Random Forest
- Gradient Boosting
- XGBoost
- Feature importance ranking
- Automatic model comparison

### UI Design
- Dark mode with glassmorphism effects
- Apple/Linear/Vercel inspired aesthetic
- Responsive sidebar navigation
- Interactive charts (Chart.js)
- Animated transitions
- Premium SaaS appearance

## Architecture

```
webapp/
├── src/
│   └── index.tsx         # Main Hono application (backend + frontend)
├── public/
│   └── static/           # Static assets
├── dist/                 # Built output
├── ecosystem.config.cjs  # PM2 configuration
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite build config
├── wrangler.jsonc        # Cloudflare Pages config
└── README.md             # Documentation
```

## Deployment

- **Platform**: Cloudflare Pages (Edge Runtime)
- **Status**: ✅ Active
- **Build**: `npm run build`
- **Start**: `pm2 start ecosystem.config.cjs`

## User Guide

1. Open the application
2. Drag & drop a CSV, JSON, or TSV file onto the upload zone
3. The system automatically analyzes your dataset
4. Navigate through tabs: Overview, EDA, Visualizations, Cleaning, Insights, Chat, ML, Forecasting, Dashboard
5. Use the AI Chat to ask questions about your data
6. Run ML models to predict target variables
7. Generate forecasts for numerical columns

## AI Integration

Uses OpenAI-compatible API (Poolside Laguna M.1) for:
- Dataset insight generation
- Interactive data Q&A
- Contextual business recommendations

## Last Updated
2026-06-21
