/**
 * Medibloom Core Application Script
 * Provides accessible controls, speech synthesis, storage synchronization,
 * and UI helpers for seniors and kids.
 */

// Global App State & Accessibility Utilities
const MedibloomApp = {
  speechUtterance: null,

  init() {
    this.initFontSize();
    this.initActiveNav();
  },

  /**
   * Font size scale preference (Senior & Kid low vision accessibility)
   */
  initFontSize() {
    const savedSize = localStorage.getItem("medibloom_font_size") || "normal";
    this.setFontSize(savedSize);

    // Bind font size buttons if present
    const fontBtns = document.querySelectorAll(".btn-font-size");
    fontBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const size = btn.getAttribute("data-size");
        this.setFontSize(size);
      });
    });
  },

  setFontSize(size) {
    document.body.classList.remove("font-large", "font-xlarge");
    if (size === "large") {
      document.body.classList.add("font-large");
    } else if (size === "xlarge") {
      document.body.classList.add("font-xlarge");
    }
    localStorage.setItem("medibloom_font_size", size);

    // Update aria-pressed states
    const fontBtns = document.querySelectorAll(".btn-font-size");
    fontBtns.forEach((btn) => {
      const btnSize = btn.getAttribute("data-size");
      btn.setAttribute("aria-pressed", btnSize === size ? "true" : "false");
    });
  },

  /**
   * Set active navigation link state
   */
  initActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === currentPath ||
        (currentPath === "" && href === "index.html") ||
        (currentPath === "confirmation.html" && href === "appointment.html")
      ) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  },

  /**
   * Text-to-Speech Helper (Great for seniors and children learning to read)
   */
  activeSpeechBtn: null,

  speakText(text, btnElement) {
    if (!("speechSynthesis" in window)) {
      this.showToast("Speech audio not supported on this browser", "ℹ️");
      return;
    }

    // If the same button is currently speaking, stop it
    if (this.activeSpeechBtn === btnElement && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      this.resetSpeechButton(btnElement);
      this.activeSpeechBtn = null;
      return;
    }

    // If another speech was in progress, stop it and reset previous button
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (this.activeSpeechBtn) {
        this.resetSpeechButton(this.activeSpeechBtn);
      }
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // Slightly slower, calm cadence for seniors & kids
    utterance.pitch = 1.0;

    // Pick a clear, natural English voice if available
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const preferredVoice = voices.find(v => 
          v.lang.startsWith("en") && 
          (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("David"))
        ) || voices.find(v => v.lang.startsWith("en"));
        if (preferredVoice) utterance.voice = preferredVoice;
      }
    } catch (e) {
      console.warn("Voice selection error:", e);
    }

    if (btnElement) {
      btnElement.innerHTML = `⏹️ <span>Stop</span>`;
      btnElement.classList.add("is-speaking");
      btnElement.setAttribute("aria-pressed", "true");
      this.activeSpeechBtn = btnElement;
    }

    utterance.onend = () => {
      if (btnElement) {
        this.resetSpeechButton(btnElement);
      }
      if (this.activeSpeechBtn === btnElement) {
        this.activeSpeechBtn = null;
      }
    };

    utterance.onerror = () => {
      if (btnElement) {
        this.resetSpeechButton(btnElement);
      }
      if (this.activeSpeechBtn === btnElement) {
        this.activeSpeechBtn = null;
      }
    };

    window.speechSynthesis.speak(utterance);
  },

  resetSpeechButton(btn) {
    if (!btn) return;
    btn.innerHTML = `🔊 <span>Listen</span>`;
    btn.classList.remove("is-speaking");
    btn.setAttribute("aria-pressed", "false");
  },

  /**
   * Accessible Toast Notification
   */
  showToast(message, icon = "✓") {
    // Remove existing toasts
    const existing = document.querySelector(".med-toast");
    if (existing) {
      existing.remove();
    }

    const toast = document.createElement("div");
    toast.className = "med-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.innerHTML = `
      <span aria-hidden="true" style="font-size:1.4rem;">${icon}</span>
      <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
};

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  MedibloomApp.init();
});
