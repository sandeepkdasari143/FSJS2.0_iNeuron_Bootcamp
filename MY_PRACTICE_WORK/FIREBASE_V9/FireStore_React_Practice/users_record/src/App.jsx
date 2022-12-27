import "bootstrap/dist/css/bootstrap.min.css";

import DisplayUsers from "./components/DisplayUsers";

function App() {
  
  return (
    <div className={styles.showContent}>
      <DisplayUsers />
    </div>
  );
}
const styles = {
  showContent:
    "bg-pink-500 text-black font-bold flex items-center justify-center h-[100vh]",
};
export default App;
