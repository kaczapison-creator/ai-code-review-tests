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

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for charts
  const salesData: ChartData[] = [
    { label: "Styczeń", value: 65, color: "#3b82f6" },
    { label: "Luty", value: 78, color: "#10b981" },
    { label: "Marzec", value: 45, color: "#f59e0b" },
    { label: "Kwiecień", value: 92, color: "#ef4444" },
    { label: "Maj", value: 88, color: "#8b5cf6" },
    { label: "Czerwiec", value: 76, color: "#06b6d4" },
  ];

  // Pie chart data
  const pieChartData = {
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

  const pieChartOptions = {
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

  const barChartData = {
    labels: salesData.map((item) => item.label),
    datasets: [
      {
        label: "Sprzedaż (tys. zł)",
        data: salesData.map((item) => item.value),
        backgroundColor: salesData.map((item) => item.color),
        borderColor: salesData.map((item) => item.color),
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const barChartOptions = {
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

  const BarChart = () => (
    <div className="chart-container">
      <h3>Wykres sprzedaży (tys. zł)</h3>
      <div style={{ height: "300px" }}>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );

  const StatsCard = ({
    title,
    value,
    change,
    icon,
  }: {
    title: string;
    value: string;
    change: string;
    icon: string;
  }) => (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
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
        <h1>Dashboard</h1>
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
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="stats-grid">
          <StatsCard
            title="Sprzedaż"
            value="245,678 zł"
            change="+12.5%"
            icon="💰"
          />
          <StatsCard
            title="Użytkownicy"
            value="1,234"
            change="+8.2%"
            icon="👥"
          />
          <StatsCard title="Konwersja" value="3.24%" change="-2.1%" icon="📊" />
          <StatsCard
            title="Przychód"
            value="89,456 zł"
            change="+15.3%"
            icon="💎"
          />
        </div>

        <div className="charts-section">
          <BarChart />

          <div className="chart-container">
            <h3>Wykres kołowy - Udział kategorii</h3>
            <div style={{ height: "300px" }}>
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h3>Ostatnia aktywność</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">🛒</span>
              <div className="activity-content">
                <p>Nowe zamówienie #1234</p>
                <small>2 minuty temu</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">👤</span>
              <div className="activity-content">
                <p>Nowy użytkownik zarejestrowany</p>
                <small>15 minut temu</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">📧</span>
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

export default App;
