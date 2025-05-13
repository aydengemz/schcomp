export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#f7f7f7]">
      <main className="flex flex-col items-center w-full max-w-md mx-auto flex-grow">
        <div className="w-full bg-black text-white p-4 text-center rounded-t-xl">
          <h1 className="font-bold text-xl tracking-wider">Get Your Transaction</h1>
        </div>
        
        <div className="w-full bg-white rounded-b-xl shadow-lg px-6 py-6">
          <h2 className="text-center text-2xl font-semibold mb-6 text-[#333]">
            Unlock Your Haul!
          </h2>
          
          <div className="bg-[#FFEAF0] rounded-xl p-4 mb-6">
            <ol className="list-none space-y-4">
              <li className="flex items-center">
                <div className="bg-[#FF0048] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                  1
                </div>
                <p className="text-[#333]">
                  Click on &quot;<span className="font-semibold text-[#FF0048]">Get Now</span>&quot;
                </p>
              </li>
              
              <li className="flex items-center">
                <div className="bg-[#FF0048] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                  2
                </div>
                <p className="text-[#333]">Complete your personal style profile</p>
              </li>
              
              <li className="flex items-center">
                <div className="bg-[#FF0048] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                  3
                </div>
                <p className="text-[#333]">Browse 1-5 curated deals</p>
              </li>
              
              <li className="flex items-center">
                <div className="bg-[#FF0048] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                  4
                </div>
                <p className="text-[#333]">
                  Receive your Haul!
                  <span className="ml-1" role="img" aria-label="money face"></span>
                </p>
              </li>
            </ol>
          </div>
          
          <a 
            href="https://glstrck.com/aff_c?offer_id=1224&aff_id=11848"
            className="block w-full"
          >
            <button className="w-full bg-[#FF0048] text-white rounded-full py-4 font-semibold text-lg transition-all hover:shadow-lg hover:translate-y-[-2px] mb-4">
              Get Now!
            </button>
          </a>
          
          <p className="text-xs text-[#999] text-center leading-relaxed">
            Participation in this rewards program involves completing sponsored activities. 
            By continuing, you acknowledge that this is an independent promotion not associated with any brands or social media platforms.
          </p>
        </div>
      </main>
      
      <footer className="mt-auto py-4 flex gap-[16px] flex-wrap items-center justify-center text-xs text-[#999]">
        <p>© 2025 All Rights Reserved</p>
        <div className="flex gap-2">
          <a 
            className="text-[#FF0048] hover:underline hover:underline-offset-4" 
            href="#"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a 
            className="text-[#FF0048] hover:underline hover:underline-offset-4" 
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}