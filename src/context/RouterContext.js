import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext();

const getInitialPath = () => {
  if (typeof window === 'undefined') return '/';
  
  // Check hash first (for gh-pages or static hosting)
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('/')) return hash.toLowerCase();
    if (hash) return `/${hash.toLowerCase()}`;
  }

  // Check path
  const path = window.location.pathname.toLowerCase();
  // Strip trailing slash if longer than 1 char
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path || '/';
};

export const RouterProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(getInitialPath);

  const navigate = useCallback((path, options = {}) => {
    let cleanPath = path;
    if (!cleanPath.startsWith('/')) {
      cleanPath = `/${cleanPath}`;
    }
    cleanPath = cleanPath.toLowerCase();

    if (options.section) {
      // Navigate to path and scroll to section
      setCurrentPath(cleanPath);
      window.history.pushState({}, '', cleanPath);
      setTimeout(() => {
        const el = document.getElementById(options.section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setCurrentPath(cleanPath);
    window.history.pushState({}, '', cleanPath);
    if (!options.preventScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };

    const handleHashChange = () => {
      setCurrentPath(getInitialPath());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
