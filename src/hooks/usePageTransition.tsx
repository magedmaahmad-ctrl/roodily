import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';
import { useCallback } from 'react';

export const usePageTransition = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();

  const navigateWithLoading = useCallback((path: string, message?: string) => {
    // Show loading with appropriate message based on destination
    const loadingMessages: Record<string, string> = {
      '/': 'Navigating to Home...',
      '/about': 'Loading About Information...',
      '/services': 'Preparing Services Overview...',
      '/demo': 'Setting up Demo Environment...',
      '/contact': 'Opening Contact Form...',
    };

    const loadingMessage = message || loadingMessages[path] || 'Loading Page...';
    showLoading(loadingMessage);

    // Simulate loading time for better UX
    setTimeout(() => {
      navigate(path);
      // Hide loading after navigation
      setTimeout(() => {
        hideLoading();
      }, 300);
    }, 800);
  }, [navigate, showLoading, hideLoading]);

  return { navigateWithLoading };
};





