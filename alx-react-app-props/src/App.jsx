import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import ProfilePage from './ProfilePage';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />
      <ProfilePage userData={userData} />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
