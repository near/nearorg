import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const NEW_POST_KEY = 'nearai_new_post_viewed';
const NEW_POST_DATE = '2025-01-20'; // Update this when adding new posts

const NewPostBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we should show the badge
    const checkVisibility = () => {
      const stored = localStorage.getItem(NEW_POST_KEY);
      if (!stored) {
        setIsVisible(true);
        return;
      }

      const { viewedDate, lastPostDate } = JSON.parse(stored);

      // If this is a new post date and it's been less than a week
      const isNewPost = lastPostDate !== NEW_POST_DATE;
      const isWithinWeek = new Date(NEW_POST_DATE).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;

      setIsVisible(isNewPost && isWithinWeek && !viewedDate);
    };

    checkVisibility();
  }, []);

  useEffect(() => {
    // Hide badge and save state when visiting blog pages
    if (router.pathname.startsWith('/blog')) {
      setIsVisible(false);
      localStorage.setItem(
        NEW_POST_KEY,
        JSON.stringify({
          viewedDate: new Date().toISOString(),
          lastPostDate: NEW_POST_DATE,
        }),
      );
    }
  }, [router.pathname]);

  if (!isVisible) return null;

  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00EB9A] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00EB9A]"></span>
    </span>
  );
};

export default NewPostBadge;
