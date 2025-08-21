import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  
  const handleLogout = () => {
    // Nettoyer les données de session
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userInfo');
    
    // Réinitialiser l'état
    setSuccessMsg("");
    setEmail("");
    setPassword("");
    setErrEmail("");
    setErrPassword("");
    setIsLoggedIn(false);
    
    // Message de confirmation
    //alert('Déconnexion réussie');
    
    // Rediriger vers la page d'accueil
    navigate("/");
  };
  
  const handleSignIn = (e) => {
    e.preventDefault();

    // Réinitialiser les erreurs
    setErrEmail("");
    setErrPassword("");

    // Validation des champs
    let hasError = false;

    if (!email) {
      setErrEmail("Veuillez entrer votre email");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrEmail("Format d'email invalide");
      hasError = true;
    }

    if (!password) {
      setErrPassword("Veuillez entrer votre mot de passe");
      hasError = true;
    } else if (password.length < 6) {
      setErrPassword("Le mot de passe doit contenir au moins 6 caractères");
      hasError = true;
    }
    
    // Si pas d'erreur, procéder à la connexion
    if (!hasError && email && password) {
      const firstName = email.split('@')[0];
      
      // Simuler une authentification
      // Dans un vrai projet, vous feriez un appel API ici
      
      // Sauvegarder les informations de session
      const userInfo = {
        email: email,
        name: firstName,
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem('userToken', 'mock-jwt-token-' + Date.now());
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      // Mettre à jour l'état
      setIsLoggedIn(true);
      setSuccessMsg(
        `Bonjour ${firstName} ! Merci de votre connexion. Vous êtes maintenant connecté(e). Bienvenue sur OREBI !`
      );
      
      // Vider les champs du formulaire
      setEmail("");
      setPassword("");
    }
  };
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Stay sign in for more
            </h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with OREBI
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all OREBI services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © OREBI
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center items-center px-6">
            <div className="text-center mb-8">
              <div className="text-6xl text-green-500 mb-4">
                <BsCheckCircleFill />
              </div>
              <h2 className="text-2xl font-titleFont font-bold text-gray-800 mb-4">
                Connexion réussie !
              </h2>
              <p className="w-full px-4 py-6 text-green-600 font-medium font-titleFont text-center bg-green-50 rounded-lg border border-green-200">
                {successMsg}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-md">
              <button
                id="logout-btn"
                onClick={handleLogout}
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white rounded-md text-base font-titleFont font-semibold tracking-wide transition-colors duration-300"
              >
                🚪 Se déconnecter
              </button>
              
              <Link to="/" className="w-full">
                <button className="w-full h-12 bg-primeColor hover:bg-black text-gray-200 hover:text-white rounded-md text-base font-titleFont font-semibold tracking-wide transition-colors duration-300">
                  🏠 Retour à l'accueil
                </button>
              </Link>
              
              <Link to="/shop" className="w-full">
                <button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-titleFont font-semibold tracking-wide transition-colors duration-300">
                  🛍️ Commencer mes achats
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Connexion
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email professionnel
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none focus:border-primeColor"
                    type="email"
                    placeholder="votre@email.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Mot de passe
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none focus:border-primeColor"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSignIn}
                  type="submit"
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md transition-colors duration-300"
                >
                  Se connecter
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Pas encore de compte ?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">
                      Créer un compte
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;