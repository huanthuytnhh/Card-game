import Footer from "./components/Footer";
import GameDescription from "./components/GameDescription";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";
function Home() {
  return (
    <div>
      {/* <SignInButton mode="modal" forceRedirectUrl="/">
        <Button>Sign in</Button>
      </SignInButton> */}
      {/* Header */}
      <Header />
      {/* Hero section */}
      <Hero />
      {/* Category */}
      <GameDescription />
      <HowToPlay />
      <Footer />
    </div>
  );
}

export default Home;
