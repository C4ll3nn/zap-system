import GraficoBarras from "../../components/GraficoBarras";
import GraficoLinha from "../../components/GraficoLinha";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <h2>Contas Abertas - BOT</h2>
        <GraficoBarras />
        <GraficoLinha />
      </div>
    </div>
  );
}

export default Dashboard;
