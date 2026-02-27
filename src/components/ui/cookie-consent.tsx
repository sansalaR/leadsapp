"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="pointer-events-auto relative mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-black/10 ring-1 ring-black/10 sm:flex-row sm:items-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-yellow-500/15 blur-3xl" />
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-black/5 p-3 ring-1 ring-black/10">
            <Cookie className="h-6 w-6 text-black/70" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-black sm:text-lg">We value your privacy</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-black/60">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="relative mt-1 flex w-full items-center gap-3 sm:mt-0 sm:w-auto">
          <button
            onClick={declineCookies}
            className="h-11 flex-1 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-black/80 transition-colors hover:bg-black/5 sm:flex-none"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="h-11 flex-1 rounded-full bg-lime-400 px-5 text-sm font-semibold text-black transition-colors hover:bg-lime-300 sm:flex-none"
          >
            Accept All
          </button>
        </div>

        <button
          onClick={declineCookies}
          className="absolute right-4 top-4 rounded-full p-2 text-black/40 transition-colors hover:bg-black/5 hover:text-black/70 sm:hidden"
          aria-label="Close"
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
