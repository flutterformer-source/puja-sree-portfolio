'use client';

import { useEffect } from 'react';

const Translator = () => {
  useEffect(() => {
    // Only add if it doesn't exist to prevent duplicates on hot-reload
    if (!document.getElementById('google-translate-script')) {
      // Define the callback globally
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            { 
              pageLanguage: 'en', 
              includedLanguages: 'en,hi,te', 
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE 
            },
            'google_translate_element'
          );
        }
      };

      // Create and append the script
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="flex items-center justify-center bg-[#245f72]/20 hover:bg-[#245f72]/40 transition-colors backdrop-blur-[10px] rounded-lg border border-white/10" 
      style={{ height: '36px', padding: '0px 4px' }}
    />
  );
};

export default Translator;
