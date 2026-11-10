"use client";

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { captureUtm, readUtm } from '@/lib/utm';
import { BOOKING_URL } from '@/lib/links';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (typeof window !== 'undefined' && POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false,
    // Cookieless by design: no persistent identifiers in the browser, so no consent banner is needed.
    // In-site navigation is client-side, so one visit keeps one ID; a reload or new tab starts a new one.
    persistence: 'memory',
    // Session replay is on (see /privacy). Anything typed into a field is masked.
    session_recording: { maskAllInputs: true },
  });
}

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      captureUtm(window.location.search);
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  // The booking page can't carry UTMs, so record the click with the page and DM tag.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.type === 'auxclick' && e.button !== 1) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (a && a.href.startsWith(BOOKING_URL)) {
        posthog.capture('book_call_clicked', { page: window.location.pathname, ...readUtm() });
      }
    }
    document.addEventListener('click', onClick);
    document.addEventListener('auxclick', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('auxclick', onClick);
    };
  }, []);

  return null;
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
