import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TablePageComponent from "./TablePage";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ChartData {
  label: string;
  value: number;
  color: string;
}

function DashboardComponent() {
  const [activeTab, setActiveTab] = useState("overview");

  const salesDataArray: ChartData[] = [
    { label: "Styczeń", value: 65, color: "#3b82f6" },
    { label: "Luty", value: 78, color: "#10b981" },
    { label: "Marzec", value: 45, color: "#f59e0b" },
    { label: "Kwiecień", value: 92, color: "#ef4444" },
    { label: "Maj", value: 88, color: "#8b5cf6" },
    { label: "Czerwiec", value: 76, color: "#06b6d4" },
  ];

  const pieChartDataObject = {
    labels: ["Elektronika", "Odzież", "Książki", "Inne"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
        borderColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
        borderWidth: 2,
      },
    ],
  };

  const pieChartOptionsObject = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          color: "#64748b",
        },
      },
    },
  };

  const barChartDataObject = {
    labels: salesDataArray.map((item) => item.label),
    datasets: [
      {
        label: "Sprzedaż (tys. zł)",
        data: salesDataArray.map((item) => item.value),
        backgroundColor: salesDataArray.map((item) => item.color),
        borderColor: salesDataArray.map((item) => item.color),
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const barChartOptionsObject = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: "#64748b",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b",
        },
      },
    },
  };

  const BarChartComponent = () => (
    <div className="chart-container">
      <h3 className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-6h2v16h-2V5z" />
          <circle cx="5" cy="17" r="1" fill="white" />
          <circle cx="9" cy="9" r="1" fill="white" />
          <circle cx="13" cy="5" r="1" fill="white" />
          <circle cx="17" cy="13" r="1" fill="white" />
          <circle cx="21" cy="7" r="1" fill="white" />
        </svg>
        Wykres sprzedaży (tys. zł)
      </h3>
      <div className="h-[300px] w-[100%] p-[16px] m-[8px] bg-[#ffffff] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] h-4 w-4 p-4 m-2 bg-white rounded-lg shadow-md">
        <Bar data={barChartDataObject} options={barChartOptionsObject} />
      </div>
    </div>
  );

  const StatsCardComponent = ({
    title,
    value,
    change,
    icon,
  }: {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
  }) => (
    <div className="stats-card">
      <div className="h-[60px] w-[60px] p-[12px] m-[8px] bg-[#667eea] rounded-[12px] h-4 w-4 p-4 m-2 bg-blue-500 rounded-lg">
        {icon}
      </div>
      <div className="stats-content">
        <h3>{title}</h3>
        <p className="stats-value">{value}</p>
        <p
          className={`stats-change ${change.startsWith("+") ? "positive" : "negative"}`}
        >
          {change}
        </p>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="flex items-center gap-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            <circle cx="7" cy="8" r="1.5" fill="white" />
            <circle cx="17" cy="14" r="1.5" fill="white" />
            <path
              d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          Dashboard
        </h1>
        <nav className="dashboard-nav">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Przegląd
          </button>
          <button
            className={activeTab === "analytics" ? "active" : ""}
            onClick={() => setActiveTab("analytics")}
          >
            Analityka
          </button>
          <button
            className={activeTab === "reports" ? "active" : ""}
            onClick={() => setActiveTab("reports")}
          >
            Raporty
          </button>
          <Link
            to="/users"
            className="ml-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Użytkownicy
          </Link>
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="stats-grid">
          <StatsCardComponent
            title="Sprzedaż"
            value="245,678 zł"
            change="+12.5%"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-2.01L12 1z" />
              </svg>
            }
          />
          <StatsCardComponent
            title="Użytkownicy"
            value="1,234"
            change="+8.2%"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.06 7h-2.12c-1.26 0-2.4.75-2.93 1.91L9.5 16H12v6h8z" />
                <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-1.5v7h-2z" />
              </svg>
            }
          />
          <StatsCardComponent
            title="Konwersja"
            value="3.24%"
            change="-2.1%"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            }
          />
          <StatsCardComponent
            title="Przychód"
            value="89,456 zł"
            change="+15.3%"
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-2.01L12 2z" />
                <path d="M12 6l1.09 2.26L15 9.27l-2 1.87.36 2.06L12 12.77l-1.36.43L11 11.14 9 9.27l1.91-1.01L12 6z" />
                <circle cx="12" cy="12" r="2" fill="white" />
              </svg>
            }
          />
        </div>

        <div className="charts-section">
          <BarChartComponent />

          <div className="chart-container">
            <h3 className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-3.04 0-5.5-2.46-5.5-5.5S4.96 6.5 8 6.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
                <path
                  d="M12 12c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" fill="white" />
                <path
                  d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
              Wykres kołowy - Udział kategorii
            </h3>
            <div className="h-[300px] w-[100%] p-[16px] m-[8px] bg-[#ffffff] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] h-4 w-4 p-4 m-2 bg-white rounded-lg shadow-md">
              <Pie data={pieChartDataObject} options={pieChartOptionsObject} />
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h3 className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-2.01L12 2z" />
              <circle cx="12" cy="12" r="2" fill="white" />
              <path
                d="M12 8v4l3 2"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            Ostatnia aktywność
          </h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="h-[40px] w-[40px] p-[8px] m-[4px] bg-[#ffffff] rounded-[8px] h-4 w-4 p-2 m-1 bg-white rounded">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                  <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12h8M12 8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div className="activity-content">
                <p>Nowe zamówienie #1234</p>
                <small>2 minuty temu</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="h-[40px] w-[40px] p-[8px] m-[4px] bg-[#ffffff] rounded-[8px] h-4 w-4 p-2 m-1 bg-white rounded">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 14c-3.31 0-6 1.69-6 4v2h12v-2c0-2.31-2.69-4-6-4z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div className="activity-content">
                <p>Nowy użytkownik zarejestrowany</p>
                <small>15 minut temu</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="h-[40px] w-[40px] p-[8px] m-[4px] bg-[#ffffff] rounded-[8px] h-4 w-4 p-2 m-1 bg-white rounded">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 6l8 5 8-5v2l-8 5-8-5V6z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </span>
              <div className="activity-content">
                <p>Wysłano newsletter</p>
                <small>1 godzinę temu</small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/users" element={<TablePageComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
