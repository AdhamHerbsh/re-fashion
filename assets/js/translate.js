// Sample translations for English and French
const translations = {
    en: {
      greeting: "Hello!",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
    },
    fr: {
      greeting: "Bonjour !",
      about: "À Propos",
      services: "Nos Services",
      contact: "Contactez-nous",
    },
  };
  
  // Function to translate the content
  function translateContent(language) {
    const elements = document.querySelectorAll("[data-translate]");
    
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const translation = translations[language][key];
      
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  // Function to handle language selection
  function changeLanguage() {
    const languageSelect = document.getElementById("language-select");
    const selectedLanguage = languageSelect.value;
    
    // Store the selected language in local storage or a cookie for persistence
    
    translateContent(selectedLanguage);
  }
  
  // Event listener for language selection
  const languageSelect = document.getElementById("language-select");
  languageSelect.addEventListener("change", changeLanguage);
  
  // Initial translation on page load
  const storedLanguage = localStorage.getItem("selectedLanguage"); // Retrieve the stored language preference
  const defaultLanguage = "en"; // Set a default language
  
  const initialLanguage = storedLanguage || defaultLanguage;
  languageSelect.value = initialLanguage; // Set the selected language in the language selection dropdown
  
  translateContent(initialLanguage);