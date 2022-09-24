import React from 'react';
import { useRouter } from 'next/router';
export default function Button({ href }) {
  const router = useRouter();

  return (
    <button
      className="button-linear-gradient text-center rounded-lg px-10 py-2 transition-all transform hover:scale-[1.1]"
      onClick={() => router.push(href)}
    >
      <p className="text-white font-bold text-base 2x:text-lg ">
        <span className="mr-2 ">🎉</span>Create my event
      </p>
    </button>
  );
}
