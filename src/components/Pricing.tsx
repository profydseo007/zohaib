'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import {
  Wallet,
  CalendarCheck,
  ClipboardList,
  CheckCircle2,
  CheckCheck,
  GraduationCap,
  Award,
  BadgeCheck,
  Rocket,
  BarChart3,
  BookOpen,
  MessageCircle,
  RefreshCw,
  CalendarDays,
  Users,
  Mail,
} from 'lucide-react';

interface PricingProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-24 py-12">
      {/* Hero Section */}
      <section className="md:py-24 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal mb-6">
          Investing in <span className="text-primary">Academic Excellence</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Tailored tutoring for Primary, GCSE, and A-Level students across the UK. Professional support designed for patient, personal, and proven results.
        </p>
      </section>

      {/* Pricing Tiers: Bento Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
        {/* Pay-per-lesson Option (Side Feature) */}
        <div className="md:col-span-4 flex flex-col">
          <div
            className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border border-outline-variant/30 flex-grow hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">
              <Wallet size={18} strokeWidth={2.25} />
              <span className="font-label-sm text-label-sm uppercase">Flexible Option</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-charcoal mb-2">Pay-per-lesson</h3>
            <p className="text-on-surface-variant mb-8">Perfect for targeted support on specific topics or one-off exam preparation.</p>
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">Primary (KS1/2)</span>
                <span className="font-headline-md text-headline-md text-primary">£35<small className="text-body-md">/hr</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">GCSE (KS3/4)</span>
                <span className="font-headline-md text-headline-md text-primary">£45<small className="text-body-md">/hr</small></span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-4">
                <span className="font-label-md text-label-md text-charcoal">A-Level (KS5)</span>
                <span className="font-headline-md text-headline-md text-primary">£55<small className="text-body-md">/hr</small></span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('trial')}
              className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <CalendarCheck size={20} />
              Book Individual Lesson
            </button>
          </div>
          {/* Visual Anchor */}
          <div className="mt-gutter rounded-xl overflow-hidden aspect-[1.6] relative shadow-lg">
            <img
              className="object-cover w-full h-full rounded-xl aspect-video"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDETdNAp1lHZlNEVgJrTlhpbVzuZTZ15uf7TG8d4afAw-xnOy95RnXN6QLBEHuCOkwXSHM3yvE0KLDdCiYDbAGdgGtx8ue34v8GLlix1--9uHhRyrY4dMd1EljJ3i8On3dlthkOnP8_4tIy18hsIHZuMDPfkZNt4Sy-pkuVthtvy5wYlJ-LMGSW_tWpu9w5usVjv8MxeVU0IR9R5Rt7yUBxYpimZHyvN7rmd1-ZPJScAZwmIu-GuKRPqg"
              alt="A professional, high-quality photograph of a secondary school student studying with a digital tablet and physical books in a well-lit, modern home environment."
            />
          </div>
        </div>

        {/* Monthly Packages (Main Center) */}
        <div className="md:col-span-8 space-y-gutter">
          {/* Package Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Homework Support */}
            <div className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border border-outline-variant/30 relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList size={24} className="text-primary" />
                <h4 className="font-label-md text-label-md text-primary font-bold uppercase">Homework Support</h4>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display-lg text-display-lg text-charcoal">£160</span>
                <span className="text-on-surface-variant font-body-md">/month</span>
              </div>
              <p className="text-on-surface-variant mb-8 text-sm">Consistent weekly support to ensure students stay on top of their school workload.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">4x One-hour sessions per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Personalized lesson notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Progress tracking dashboard</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('trial')}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCheck size={20} />
                Select Homework Support
              </button>
            </div>

            {/* Curriculum Mastery */}
            <div className="bg-surface-container-lowest p-8 rounded-xl pricing-card-shadow border-2 border-primary relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-primary text-on-primary px-6 py-1 rounded-bl-xl font-label-sm text-label-sm">MOST POPULAR</div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={24} className="text-primary" />
                <h4 className="font-label-md text-label-md text-primary font-bold uppercase">Curriculum Mastery</h4>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display-lg text-display-lg text-charcoal">£300</span>
                <span className="text-on-surface-variant font-body-md">/month</span>
              </div>
              <p className="text-on-surface-variant mb-8 text-sm">Deep-dive into the UK curriculum. Bridging gaps and building long-term confidence.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">8x One-hour sessions per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Homework & Classwork review</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  <span className="text-body-md">Direct tutor messaging</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('trial')}
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={20} />
                Select Mastery Plan
              </button>
            </div>
          </div>

          {/* Exam Excellence (Asymmetric Large Card) */}
          <div className="bg-charcoal text-on-primary p-8 md:p-12 rounded-xl pricing-card-shadow relative overflow-hidden">
            <div className="md:flex justify-between items-start relative z-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={28} className="text-lime-green" />
                  <h4 className="font-label-md text-label-md text-lime-green font-bold uppercase">Exam Excellence</h4>
                </div>
                <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">GCSE & A-Level Focus</h2>
                <p className="text-outline-variant mb-8 text-lg">Intensive preparation using past papers, mark schemes, and proven exam techniques tailored for AQA, Edexcel, and OCR boards.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Weekly Mock Tests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Board-Specific Prep</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>12 Sessions / Month</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={20} className="text-lime-green" />
                    <span>Priority Scheduling</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-surface-container-lowest/10 rounded-xl backdrop-blur-sm">
                <span className="font-display-lg text-display-lg text-white mb-2">£420</span>
                <span className="text-outline-variant font-label-md mb-8">Per Month</span>
                <button
                  onClick={() => onNavigate('trial')}
                  className="w-full py-4 bg-lime-green text-charcoal font-bold rounded-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  Secure Exam Success
                </button>
              </div>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="mb-24 rounded-2xl overflow-hidden h-[400px] relative">
        <img
          className="w-full h-full object-cover"
          data-alt="A clean and structured pricing comparison chart displayed on a laptop screen, set in a professional home office."
          src="https://lh3.googleusercontent.com/aida/AP1WRLsd4LcX-MROZE-Dr4SHbmYDIx19EryI80Kh5hE8Xqre0WtZZybzcTqO4gla9TP0Lw_B6N5l7WO0U0aH-ZRxBdaF-uPmITfWcVJpHBHYT4mV2oNeNfqTtRWCQqpFLGz76k26NUSWKBuW41MnSY0lWvO7dG9cPdczW3iNCrmClVBmjUy1xkj0rxGJf024Tdp8OWMoJyLF6xju_9k5jC45AjZQYs8LNVeVou1sSg-Ov24d9JbusAucpdf8mBQ"
          alt="Pricing comparison chart"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex flex-col justify-end p-12">
          <p className="font-headline-md text-headline-md text-white max-w-xl">
            "The structure and patience of my Math Make Smart tutor helped me move from a predicted 4 to an 8 in my GCSE Mathematics."
          </p>
          <p className="text-lime-green font-label-md mt-4">— Sarah J., Year 11 Student</p>
        </div>
      </section>

      {/* Everything Included Features */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4">Everything Included</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Whatever package you choose, you receive the full Math Make Smart experience with no hidden costs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BarChart3 size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">Initial Diagnostic</h5>
              <p className="text-on-surface-variant text-sm">Every student starts with a comprehensive assessment to identify specific learning gaps.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <BookOpen size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">Exclusive Materials</h5>
              <p className="text-on-surface-variant text-sm">Access to our proprietary library of worksheets, revision guides, and practice exam papers.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">WhatsApp Support</h5>
              <p className="text-on-surface-variant text-sm">Stuck on a problem between lessons? Send a photo to your tutor for quick guidance.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <RefreshCw size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">Monthly Progress Reports</h5>
              <p className="text-on-surface-variant text-sm">Detailed feedback for parents tracking performance against UK national standards.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CalendarDays size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">Flexible Rescheduling</h5>
              <p className="text-on-surface-variant text-sm">Life happens. Easily move lessons with 24-hour notice via our student portal.</p>
            </div>
          </div>
          <div className="bg-soft-gray p-8 rounded-xl flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <Users size={22} className="text-primary" />
            </div>
            <div>
              <h5 className="font-label-md text-label-md text-charcoal font-bold mb-2">Guardian Portal</h5>
              <p className="text-on-surface-variant text-sm">Dedicated access for parents to manage bookings, payments, and view tutor feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-primary/5 rounded-2xl p-12 mb-24 text-center border border-primary/10 mx-auto">
        <h3 className="font-headline-md text-headline-md text-charcoal mb-4">Have specific requirements?</h3>
        <p className="text-on-surface-variant mb-8 max-w-lg mx-auto">We offer bespoke plans for schools, small groups, and 11+ entrance exam preparation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Contact our UK Team
          </button>
          <button
            onClick={() => onNavigate('trial')}
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <CalendarCheck size={20} />
            Book a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}