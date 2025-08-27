import React, { useState, useCallback, useEffect, useMemo, useRef, memo, useId } from "react";
import logo from "../imgs/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const saudiFlag =
  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg";
const englishFlag =
  "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";

/** Small utility to combine class names */
const cx = (...parts) => parts.filter(Boolean).join(" ");

/** Language options data */
const LANGS = [
  { code: "en", label: "English", flag: englishFlag },
  { code: "ar", label: "العربية", flag: saudiFlag },
];

/** Accessible, memoized menu list */
const LanguageOptions = memo(function LanguageOptions({
  currentLang,
  onSelect,
  align = "right", // "left" for RTL alignment
  menuId,
  onClose,
}) {
  const itemsRef = useRef([]);
  const firstRender = useRef(true);

  // focus the currently selected item when the menu opens
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const idx = LANGS.findIndex((l) => l.code === currentLang);
      const target = itemsRef.current[idx] || itemsRef.current[0];
      target?.focus();
    }
  }, [currentLang]);

  const onKeyDown = (e) => {
    const idx = itemsRef.current.findIndex((el) => el === document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (idx + 1) % LANGS.length;
      itemsRef.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (idx - 1 + LANGS.length) % LANGS.length;
      itemsRef.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      itemsRef.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      itemsRef.current[LANGS.length - 1]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose?.();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const lang = itemsRef.current[idx]?.dataset?.value;
      if (lang) onSelect(lang);
    }
  };

  return (
    <div
      id={menuId}
      role="menu"
      aria-label="Language options"
      className={cx(
        "absolute mt-2 w-40 rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5",
        "dark:bg-gray-900 dark:border-gray-800",
        align === "right" ? "right-0" : "left-0"
      )}
      onKeyDown={onKeyDown}
    >
      <ul className="py-1">
        {LANGS.map((l, i) => {
          const selected = l.code === currentLang;
          return (
            <li key={l.code}>
              <button
                ref={(el) => (itemsRef.current[i] = el)}
                role="menuitemradio"
                aria-checked={selected}
                data-value={l.code}
                onClick={() => onSelect(l.code)}
                className={cx(
                  "flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors",
                  "hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  "text-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
                  selected ? "font-semibold" : "font-normal"
                )}
              >
                <img src={l.flag} alt="" className="h-4 w-4 rounded-sm" loading="lazy" />
                <span className="flex-1">{l.label}</span>
                {selected && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    focusable="false"
                  >
                    <path
                      d="M7.5 13.5l-3-3 1.4-1.4 1.6 1.6 6-6L15 6.1l-7.5 7.4z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

function Navbar({ language = "en", toggleLanguage }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuWrapRef = useRef(null);
  const navRef = useRef(null);
  const isRTL = language === "ar";
  const menuId = useId();

  const toggleLanguageOptions = useCallback(() => setOpen((p) => !p), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const handleLanguageSelection = useCallback(
    (lang) => {
      toggleLanguage?.(lang);
      setOpen(false);
      // return focus to the button for good a11y
      btnRef.current?.focus();
      try {
        localStorage.setItem("site_lang", lang); // persist preference
      } catch {}
    },
    [toggleLanguage]
  );

  // click outside & Escape
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (
        menuWrapRef.current &&
        !menuWrapRef.current.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // apply dir attribute to navbar for proper alignment
  useEffect(() => {
    if (navRef.current) {
      navRef.current.setAttribute("dir", isRTL ? "rtl" : "ltr");
    }
  }, [isRTL]);

  const currentLangLabel = useMemo(
    () => (isRTL ? "العربية" : "English"),
    [isRTL]
  );

  return (
    <nav
      ref={navRef}
      className={cx(
        "fixed inset-x-0 top-0 z-20",
    // Lighter background + softer blur + lighter border
    "bg-white/50 backdrop-blur-sm border-b border-gray-100",
    // Softer in dark mode too
    "dark:bg-white-900/30 dark:border-white-800/60"
      )}
      aria-label="Main"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-20 w-auto transition-transform group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">Home</span>
          </a>

          {/* Language switcher */}
          <div className="relative">
            <button
              ref={btnRef}
              onClick={toggleLanguageOptions}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-controls={open ? menuId : undefined}
              className={cx(
                "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium",
                "text-gray-700 hover:text-blue-600",
                "ring-1 ring-gray-200 hover:ring-blue-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                "bg-white dark:bg-gray-900 dark:text-gray-100 dark:ring-gray-800"
              )}
              title={isRTL ? "تغيير اللغة" : "Change language"}
            >
              <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
              <span className="hidden sm:inline">{currentLangLabel}</span>
              <span className="sr-only">{isRTL ? "قائمة اللغات" : "Language menu"}</span>
            </button>

            {/* Menu */}
            <div ref={menuWrapRef} className="relative">
              {open && (
                <LanguageOptions
                  currentLang={language}
                  onSelect={handleLanguageSelection}
                  onClose={closeMenu}
                  align={isRTL ? "left" : "right"}
                  menuId={menuId}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile safe area spacer */}
      <div className="h-[1px]" />
    </nav>
  );
}

export default memo(Navbar);

