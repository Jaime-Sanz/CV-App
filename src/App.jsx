import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

export default function App() {
  return (
    <div className="app-container">
      <Personal />
      <Education />
      <Experience />
      <div className="preview-container">
        
      </div>
    </div>
  );
}