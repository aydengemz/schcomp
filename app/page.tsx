"use client";
import { useState } from 'react';

export default function Home() {
  const [showInstructions, setShowInstructions] = useState(false);
  
  const handleContinue = () => {
    setShowInstructions(true);
  };
  
  const handleGetNow = async () => {
    try {
      const res = await fetch('/api/log-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      const { isLikelyRealDevice } = await res.json();
      if (isLikelyRealDevice) {
        window.location.href = "https://glstrck.com/aff_c?offer_id=1224&aff_id=11848";
      } else {
        window.location.href = "https://milkmochabear.com/products/matcha-plush";
      }
    } catch (err) {
      console.error(err);
      alert('Unexpected error—please try again.');
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[var(--background)]">
      <main className="flex flex-col items-center w-full max-w-md mx-auto flex-grow">
        <div className="w-full bg-black text-white p-4 text-center rounded-t-xl">
          <h1 className="font-bold text-xl tracking-wider">Get Your Transaction</h1>
        </div>
        
        {!showInstructions ? (
          <div className="w-full bg-[var(--card-bg)] rounded-b-xl shadow-lg px-6 py-10">
            <h2 className="text-center text-3xl font-semibold mb-8 text-[var(--text-dark)]">
              Do you love shopping?
            </h2>
            
            <div className="flex flex-col gap-4 mb-6">
              <button 
                onClick={handleContinue}
                className="w-full bg-[var(--shein-pink)] text-white rounded-full py-4 font-semibold text-lg transition-all hover:shadow-lg hover:translate-y-[-2px]"
              >
                Yes, I love shopping!
              </button>
              
              <button 
                onClick={handleContinue}
                className="w-full border-2 border-[var(--shein-pink)] text-[var(--shein-pink)] bg-transparent rounded-full py-4 font-semibold text-lg transition-all hover:shadow-lg hover:translate-y-[-2px]"
              >
                Show me the deals anyway
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full bg-[var(--card-bg)] rounded-b-xl shadow-lg px-6 py-6">
            <h2 className="text-center text-2xl font-semibold mb-6 text-[var(--text-dark)]">
              Unlock Your Haul!
            </h2>
            
            <div className="bg-[var(--steps-bg)] rounded-xl p-4 mb-6">
              <ol className="list-none space-y-4">
                <li className="flex items-center">
                  <div className="bg-[var(--shein-pink)] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    1
                  </div>
                  <p className="text-[var(--text-dark)]">
                    Click on &quot;<span className="font-semibold text-[var(--shein-pink)]">Get Now</span>&quot;
                  </p>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-[var(--shein-pink)] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    2
                  </div>
                  <p className="text-[var(--text-dark)]">Complete your personal style profile</p>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-[var(--shein-pink)] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    3
                  </div>
                  <p className="text-[var(--text-dark)]">Browse 1-5 curated deals</p>
                </li>
                
                <li className="flex items-center">
                  <div className="bg-[var(--shein-pink)] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                    4
                  </div>
                  <p className="text-[var(--text-dark)]">
                    Receive your Haul!
                    <span className="ml-1" role="img" aria-label="money face"></span>
                  </p>
                </li>
              </ol>
            </div>
            
            <button 
              onClick={handleGetNow}
              className="w-full bg-[var(--shein-pink)] text-white rounded-full py-4 font-semibold text-lg transition-all hover:shadow-lg hover:translate-y-[-2px] mb-4"
            >
              Get Now!
            </button>
            
            <p className="text-xs text-[var(--text-light)] text-center leading-relaxed">
              Participation in this rewards program involves completing sponsored activities. 
              By continuing, you acknowledge that this is an independent promotion not associated with any brands or social media platforms.
            </p>
          </div>
        )}
      </main>
      
      <footer className="mt-auto py-4 flex gap-[16px] flex-wrap items-center justify-center text-xs text-[var(--text-light)]">
        <p>© 2025 All Rights Reserved</p>
        <div className="flex gap-2">
          <a 
            className="text-[var(--shein-pink)] hover:underline hover:underline-offset-4" 
            href="#"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a 
            className="text-[var(--shein-pink)] hover:underline hover:underline-offset-4" 
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}