import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import the Header component
import Homepage from "./pages/Homepage"; // Import the Homepage component
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import PrivacyPolicy
import AboutUs from "./pages/AboutUs"; // Import AboutUs

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-6 sm:px-4 flex flex-col items-center gap-4">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
