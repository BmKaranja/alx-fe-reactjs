import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext.jsx'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />
      <ProfilePage userData={userData} />
      <WelcomeMessage />
      <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
      <MainContent />
      <Footer />
    </>
  )
}

export default App
