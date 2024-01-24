import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="alert alert-warning" role="alert">
      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    </div>
  );
}

export default App;
