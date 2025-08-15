import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SignInComponent from "../features/auth/components/SignIn";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="download" />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <SignInComponent />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignInPage;