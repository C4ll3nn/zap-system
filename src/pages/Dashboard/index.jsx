import GraficoBarras from "../../components/GraficoBarras";
import GraficoLinha from "../../components/GraficoLinha";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <h3>Contas Abertas - BOT</h3>
        <GraficoBarras />
        <GraficoLinha />
      </div>
    </div>
  );
}

export default Dashboard;
