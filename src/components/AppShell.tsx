'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAppNavigate } from '@/lib/useAppNavigate';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { navigateTo, currentPage, currentSubject } = useAppNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Header currentPage={currentPage} currentSubject={currentSubject} onNavigate={navigateTo} />
      <main className="flex-grow">{children}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
