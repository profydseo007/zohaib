'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import {
  Clock,
  CheckCircle2,
  Star,
  GraduationCap,
  BookOpen,
  Wallet,
  Award,
  ArrowRight,
  FileText,
  SpellCheck,
  ScrollText,
  PenLine,
  Feather,
  HelpCircle,
  Library,
  Type,
  Mic,
  Network,
  ClipboardCheck,
  PenTool,
  CheckCheck,
  BadgeCheck,
  Users,
  Brain,
  ShieldCheck,
} from 'lucide-react';

interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function EnglishSubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-royal-purple font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
              UK Curriculum Specialist
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal leading-tight font-bold">
              Online English Tutor in the UK
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              Personalized learning for students in Year 1-10. Get the English help you need right now from highly qualified experts who know how to help you truly understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white py-4 px-8 rounded-xl font-label-md text-label-md font-bold custom-shadow hover:bg-primary transition-all active:scale-95 cursor-pointer"
              >
                Book Free Trial Lesson
              </button>
              <button
                onClick={() => onNavigate('a-levels')}
                className="border-2 border-royal-purple text-royal-purple py-4 px-8 rounded-xl font-label-md text-label-md font-bold hover:bg-soft-gray transition-all cursor-pointer"
              >
                View Pricing
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXJaAmYVGub0aZBVpgaGs3jqebGJZ4yT-mnR4sR0zxBj4lYOrg0QjMOpbzhuEiSgfuNX2fqZe_p9evLWKYFBRvfTcVhuaUiZ3K0vkddIV8ramBIWSpdSRnaiONajgiSRmMXxSjnWuW0AYMgwHnCBkPAX31Lj2J01Chme0xVuuGalcBJ2LeMXTHqE9uCBpg-NKrKtdEC7vd7hrvtJEQbpXQL_HqxEpTKuBxjwxywQTBOPvoveSftqUzyg")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQZ19fLJctTMZc2QeEhGHsjVcG3W1MaKRJRTcru24UOEciI3JLZne1cf8EspD6etSrz6wEfJ1sMh4xx4tzaTzH7QrlPFJb5yBBVOaYc_fvy1pENLYhV31mG9tsufeZjnOnhCzzjgWyVl303cI5iURnImCfe2_eXRY5DK1Zi2AbNyW3jidk7isIuvybYh9Qq-g2QrLGCHt6EGcaEZp4YxjGe7nWEb2jecGw-av2f_0HyQEP-r27gQSVsA")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXcT5dTGzu6O-tl548x4XjZ4ycMi3yTYRo0b6JaxMXgKmCr4n-2ejf4rtVaHef_gLWZ94FwZm9KigFAGwPqoDRxHwCmUnV12CA_Ipr1XmRojy1TQIP2-92xwRfYk6laYAo3o1UcKzs-fHwvEOAAS3j-32YTbFN_M0Pmz9mamG6E7zcnywXdgF_jzWREwv8wcU-Yahi3qq4bEC9yMpMblfa_yJoNxRLwFKJcLrm3lKWDEAOVLJwRuMOOA")' }}
                />
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                <span className="text-royal-purple font-bold">500+</span> Verified UK Tutors
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-green/20 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKa-X47XE51c6BNF2ihvhYQrtNIg61tH6wzGJp87yEUdD-GKVbURmzK1k_9EMCMBR7GjFQUeVpgQZIgF1GHBfppT9nVcGTuNvjZFegtYk177FBCyTCzd5wamcPa9Ez8LmiYWbLsaNXFss1jOWP9oTEWWmmInzvLz2pHIj2cN3t4BVoXBaKYvd1jlWJbj5UCinK7qsBhebCSum0amzJbALEGiPn8kU1_XvOXjXixL7-opULQIAn2FMN0D16Ww6HYmqjzHGDUD7N_HfsCvw"
              alt="English tutoring"
              className="w-full h-auto rounded-3xl custom-shadow object-cover"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">What We Offer</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Say goodbye to exhausting in-person classes. We connect you to professional UK-based English Tutors for focused one-on-one sessions.
          </p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-gutter">
          {/* Flexible Timings */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Flexible Timings</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Customize timings
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Easy scheduling
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Stress-free rescheduling
              </li>
            </ul>
            <button
              onClick={() => onNavigate('curriculum')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              All Subjects <ArrowRight size={16} />
            </button>
          </div>
          {/* Affordable Rates */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all border-b-4 border-royal-purple">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Wallet size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Affordable Rates</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Free Trial Session
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Discounted Packages
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Standard Refund Policy
              </li>
            </ul>
            <button
              onClick={() => onNavigate('a-levels')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              Fee Structure <ArrowRight size={16} />
            </button>
          </div>
          {/* Superior Quality */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-charcoal font-bold">Superior Tutoring</h3>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Basic Study Skills
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Comprehension Team
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-lime-green" size={16} /> Homework Efficiency
              </li>
            </ul>
            <button
              onClick={() => onNavigate('trial')}
              className="mt-8 inline-flex items-center gap-1 text-royal-purple font-label-md font-bold hover:underline cursor-pointer"
            >
              Sign up Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Focus */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4 bg-royal-purple text-white p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-4 font-bold">Curriculum &amp; Year Groups</h2>
                <p className="font-body-md opacity-90">Tailored support for every stage of the UK educational journey.</p>
              </div>
              <div className="mt-8">
                <BookOpen size={64} className="opacity-20" />
              </div>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-outline-variant">
                <GraduationCap size={32} className="text-primary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">1st – 10th Year</h4>
                <p className="font-label-sm uppercase tracking-widest text-primary font-semibold">Foundational</p>
              </div>
              <div className="bg-lime-green/10 p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-lime-green/30">
                <Award size={32} className="text-secondary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">GCSE &amp; A-Level</h4>
                <p className="font-label-sm uppercase tracking-widest text-secondary font-semibold">Expert Prep</p>
              </div>
              <div className="bg-surface-container p-8 rounded-3xl flex flex-col items-center text-center justify-center border border-outline-variant">
                <FileText size={32} className="text-primary mb-3" />
                <h4 className="font-headline-md text-headline-md text-charcoal mb-2 font-bold">Lesson Plans</h4>
                <p className="font-label-sm uppercase tracking-widest text-primary font-semibold">Custom Drafted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top-Tier Tutors */}
      <section className="py-20 md:py-24 bg-surface-container-lowest">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative inline-block w-full">
              <img
                alt="Professional Tutor"
                className="rounded-3xl custom-shadow max-w-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvJ5ZkW9ZVGSkaUXlGr-5dzzz-agCawRb5QGgtdLxg5-WbKT0Px57IhUeK4dTouTHoSkCJ_xaqN0HkhZYj2WV-ZsDjZMjsMNbZ1ylxAEsbYI7Y-YmykdCUgR0iUEBFrJxEvZv6PgTU3jErcV5JCtynNesuI_qAz1KtkklK9c_oatGuIN-U7ElZ78L0yOqAuU4AGndpmUqAUZkF32o8sQatr3gar2roWYWgT-e4dRmNwltnw5H-0Zw9Zv0OZ"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl custom-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-green rounded-full flex items-center justify-center">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-charcoal">98% Success Rate</p>
                    <p className="text-xs text-on-surface-variant">Top-Tier GCSE Scoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-charcoal font-bold">Top-Tier Online English Tutors in the UK</h2>
            <p className="font-body-md text-on-surface-variant">
              Find Your Perfect English Tutor Online and Score an A. MMS is a learning platform that offers tutoring services in a wide range of subjects. One of our major specializations is in the English language.
            </p>
            <p className="font-body-md text-on-surface-variant">
              No matter where in the world you go, a good grasp of this language will help you excel. Our tutors ensure you communicate effectively, teaching skills and tricks to master the UK curriculum.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="bg-royal-purple text-white py-3 px-8 rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer"
              >
                Meet our teachers <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Learning */}
      <section className="py-20 md:py-24 bg-soft-gray">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center">
          <h2 className="font-headline-lg text-headline-lg text-charcoal mb-4 font-bold">Improve Your English With Personalised Learning</h2>
          <p className="font-body-md text-on-surface-variant max-w-3xl mx-auto">Instructors create a detailed and suitable learning plan for you based on your level and capacity.</p>
        </div>
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-gutter">
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Users size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">1-to-1 Tutoring Sessions</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              We assign each tutor only one student so that our professional can provide undivided attention and focus on the growth of one individual at a time.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-royal-purple"></div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <Clock size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">Flexible Learning</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              Tailored sessions suit your needs. Choose whatever topic or skill you want to master, or let our experts guide your learning path with detailed feedback.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-royal-purple"></div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 custom-shadow flex flex-col h-full">
            <div className="w-12 h-12 bg-royal-purple/10 text-royal-purple rounded-xl flex items-center justify-center mb-6">
              <BadgeCheck size={22} />
            </div>
            <h4 className="font-headline-md text-headline-md mb-4 text-royal-purple font-bold">Qualified Instructors</h4>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
              Our team comprises top English tutors in the UK, highly qualified and well-versed in both academic grasp and oral communication.
            </p>
            <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-royal-purple"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts We Cover */}
      <section className="py-20 md:py-24">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-charcoal text-center mb-16 font-bold underline decoration-lime-green decoration-4 underline-offset-8">
            Concepts That We Cover
          </h2>
          <div className="space-y-16">
            {/* Elementary */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-l-4 border-royal-purple pl-4 font-bold">Elementary School</h3>
                <p className="font-body-md text-on-surface-variant mt-4">Foundational mastery for Year 1-6 students. Building confidence through articulated expression.</p>
              </div>
              <div className="md:w-2/3 bg-surface-container rounded-3xl p-8 grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><BookOpen size={20} className="text-royal-purple" /> Reading &amp; Vocabulary</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><PenLine size={20} className="text-royal-purple" /> Orally compose sentences</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><SpellCheck size={20} className="text-royal-purple" /> Punctuation &amp; Spelling</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><ScrollText size={20} className="text-royal-purple" /> Writing &amp; Composition</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Users size={20} className="text-royal-purple" /> Root words &amp; Suffixes</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Brain size={20} className="text-royal-purple" /> Expressing Ideas</div>
              </div>
            </div>
            {/* Middle School */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-r-4 border-royal-purple pr-4 text-right font-bold">Middle School</h3>
                <p className="font-body-md text-on-surface-variant mt-4 text-right">Transitioning to complex analysis and literary introduction for lower secondary.</p>
              </div>
              <div className="md:w-2/3 bg-soft-gray border border-outline-variant rounded-3xl p-8 grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Feather size={20} className="text-primary" /> Shakespeare Intro</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><HelpCircle size={20} className="text-primary" /> Solve Comprehensions</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Library size={20} className="text-primary" /> Poetic Conventions</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Type size={20} className="text-primary" /> Complex Vocabulary</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Mic size={20} className="text-primary" /> Fluent Speaking</div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl font-medium"><Network size={20} className="text-primary" /> Plots &amp; Settings</div>
              </div>
            </div>
            {/* Secondary */}
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-24">
                <h3 className="font-headline-md text-headline-md text-royal-purple border-l-4 border-royal-purple pl-4 font-bold">GCSE &amp; IGCSE</h3>
                <p className="font-body-md text-on-surface-variant mt-4">Critical analysis and examination-focused training for top academic results.</p>
              </div>
              <div className="md:w-2/3 bg-royal-purple p-8 rounded-3xl grid md:grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><Star size={20} /> Analytical Skills</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><ClipboardCheck size={20} /> Implicit Meanings</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><CheckCircle2 size={20} /> Evaluate Facts</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><PenTool size={20} /> Articulate Thoughts</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><Award size={20} /> GCSE Literature Prep</div>
                <div className="flex items-center gap-3 bg-white/10 text-white p-4 rounded-xl backdrop-blur-md font-medium"><CheckCheck size={20} /> Advanced Grammar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Booking */}
      <section className="py-20 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg text-charcoal mb-6 font-bold">Book Your Free Trial Today</h2>
            <p className="font-body-md text-on-surface-variant mb-8">It's your right to take a free English trial lesson before booking any packages. No payment required — just tell us your availability.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">1</div>
                <p className="font-label-md font-medium">Check the tutor calendar</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">2</div>
                <p className="font-label-md font-medium">Select your preferred slot</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-green/20 text-secondary rounded-full flex items-center justify-center font-bold">3</div>
                <p className="font-label-md font-medium">Attend via Zoom or Google Meet</p>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white py-4 px-10 rounded-xl font-headline-md text-headline-md font-bold shadow-lg hover:shadow-royal-purple/20 transition-all active:scale-95 cursor-pointer"
              >
                Get Started Now!
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 h-80 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/AP1WRLuF3A5ybVHT1QWhkMjcj7ulxi2crFLd3F0BU6Ga5p3Ou0q6qkYlWHgrluODoVLsghP9_wDAWZLAPWVbeLrl1THBhZs9KDcH2ZVmE7q-hClxr2R3nE1uTJm21ldD42utQT884aXvc0XSAz-J4B5nXigdUJGOJVr2RPkhtmu3MIu84iEReEA9mfszFoipPS_ArunXMYqw-QsqtWA-kyEOyzPTNm0L1-XGq-FOKbKeSvaeXdKhoK5B5fsKm5Y")' }}
          />
        </div>
      </section>
    </div>
  );
}