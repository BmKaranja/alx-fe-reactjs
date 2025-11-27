import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import ProfilePage from './components/ProfilePage.jsx';
import UserContext from './components/UserContext.js'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />
      <ProfilePage/>
      <UserContext.Previder value={userData}>
        <ProfilePage/>
      </UserContext.Previder>
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
