'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollRevealConfig from '@/constants/Scrollreveal';

export default function ScrollRevealWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    const run = async () => {
        
        await ScrollRevealConfig();
    };

    run();
  }, [pathname]); // ← toda vez que a rota mudar, reexecuta

  return null;
}
