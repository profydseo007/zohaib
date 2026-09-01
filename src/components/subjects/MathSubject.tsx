'use client';

import React from 'react';
import LigatureIcon from '../LigatureIcon';
import { ActivePage } from '@/lib/types';
import {CheckCircle2, Clock, DollarSign, Star, Zap, BookOpen, Users, Check, Timer, GraduationCap} from 'lucide-react';
interface SubjectComponentProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function MathSubject({ onNavigate }: SubjectComponentProps) {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="hero-gradient pt-16 pb-24 overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 text-primary rounded-full border border-primary/20">
              <Check size={18} />
              <span className="font-label-sm text-label-sm font-semibold">UK National Curriculum Standard</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight font-bold">
              Online Math Tutor in the UK
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-sans">
              Expert support for Year 1-13 students. From algebra to calculus, our highly qualified tutors help you truly understand and solve problems yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('trial')}
                className="bg-royal-purple text-white px-8 py-4 rounded-xl font-headline-md text-headline-md shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 font-bold cursor-pointer"
              >
                Book Free Trial Lesson
                <LigatureIcon name="arrow_forward" />
              </button>
              <button
                onClick={() => onNavigate('a-levels')}
                className="border-2 border-royal-purple text-royal-purple px-8 py-4 rounded-xl font-headline-md text-headline-md flex items-center justify-center gap-2 hover:bg-royal-purple/5 transition-all font-bold cursor-pointer"
              >
                View Pricing
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD72LQy8-SLD-w1P7LhkrZf5iWWMLEAIMRWsVgijIYKzVZgyinT8ax1kjOQppNcZk6AP_9IsVTJpJr8lYHobMR1jFrYEvMx-oGqR_qMEot5yCoLn7NRGRVVoNfCJUpl3z3s8bLNcq4a-7NqBdlfED1l4YDFO949FR3KtWJiPTs26kVVhKr4_roC0BYjTeHoNK1E3GapfaT2-dHPQkAJ0qKaYx4szxNUJtCmPQ6dNfR7ihrEr_QBEoW-LQ")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsUGio5MIc9qJWBic4lfwiJ0TBGoIZWTvaI7MTfb7RuCxKGo7ELie9Y5VLGyjypQj6XnCU0LsE0oHoMknvgUo-ul01SVY0pK13Gc2kvCpOb1riPbkZ1xHqXmA9xuzjRkoGccElIl-ylNvMGVkwZJQSg2Lo7Z24pGCjIOJyza5AoVzVQOYqDE2oxXfHewtzer-lyW-o3o92pCOAf40ku0tZjbbIfLRgm4sXsqrxln-AIiHsHLU-BmFBaQ")' }}
                />
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3hGM0CB6WndWv0IHxLjB79y1g5ivOyYHbAqUEI5S-k2Lz02tQ3M_t4_fYwhSh1b_nvCmaAjlKtO0ByGqmEZktEbT4gAyi3b7j4RdJQkFU4kLqcxwZlLgwHiLqG3C2l27leo_O3impCsQ0VLPegRelyr0RQhi6HS1Z7233qFbdAtnVaAV3vi6VtBa0K2ys0ZByB8euvFqc_eTYU2B0b_EvNcyOUPdYHS7w59GxUADLuCfatMpCflIKug")' }}
                />
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant font-medium">
                Trusted by <span className="font-bold text-on-surface">500+ Parents</span> across the UK
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Student learning math"
                className="w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxUe8AfNh5j6GE4SCY5PiIF8QFBu7_bPfxEGGehD2D4qSWXGySvJRi8layktwqTJ3jF-0nC8VVRUxRTSb7OownS0l1Kq5ub2qTuLfct_oh3bw6Jqe9x11Kuz4feu3QDsF8dRVXOPFO5KePXBai4ho8ksjPfKSZASvd1RfubQ3awIJmgKXLD4KnXdLUn8-ZgCTJ7GqyjCd4Wwp41873Ht2EQPOm9QHEhd0d2x5fcb57j1khPzQy-ilzvzTCASlyyrKbVa01-BFdgX_gJnQ"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-lime-green rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-royal-purple rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-surface">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">What We Offer</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Premium quality math tuition designed for the way modern students learn. 
              Personalized focus, complete flexibility, and results that speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <Clock size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Flexible Timings</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Customise timings to fit your schedule. Reschedule with ease if things change.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                   <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                 Evening &amp; Weekend Slots
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                   <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Flexible Duration
                </li>
              </ul>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <DollarSign size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Affordable Rates</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Competitive pricing with various discount packages for long-term learning goals.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Free Trial Session
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Standard Refund Policy
                </li>
              </ul>
            </div>
            <div className="bg-soft-gray p-10 rounded-[32px] card-elevation-1 floating-interaction space-y-6">
              <div className="w-14 h-14 bg-royal-purple/10 text-royal-purple rounded-2xl flex items-center justify-center">
                <Star size={32} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Superior Quality</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our tutors focus on basic study skills and homework efficiency for real improvement.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  UK Curriculum Experts
                </li>
                <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface font-medium">
                  <CheckCircle2 className="text-lime-green shrink-0" size={20} fill="currentColor" stroke="white" />
                  Personalized Study Plans
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Plans For Each Year */}
      <section className="py-24 bg-surface-container-low">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32 space-y-6">
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-semibold">Curriculum focus</span>
              <h2 className="font-headline-lg text-display-lg-mobile text-on-surface font-bold">Math Lesson Plans For Each Year</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We cover the entire UK educational journey. From foundational counting in Year 1 to complex Poisson distributions in A-Levels.
              </p>
              <div className="pt-6">
                <div className="p-6 bg-white rounded-2xl card-elevation-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <GraduationCap size={24} className="text-royal-purple" />
                    <span className="font-headline-md text-headline-md font-bold text-charcoal">Year 1 – 13</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">KS1/2</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">KS3</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">GCSE</span>
                    <span className="px-3 py-1 bg-royal-purple/5 text-royal-purple rounded-full font-label-sm text-label-sm font-semibold">A-Level</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {Array.from({ length: 13 }, (_, i) => i + 1).map((year) => (
                <button
                  key={year}
                  onClick={() => onNavigate('trial')}
                  className={`group flex items-center justify-between p-6 bg-white rounded-2xl card-elevation-1 hover:bg-royal-purple transition-all duration-300 text-left cursor-pointer ${
                    year === 13 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="font-headline-md text-headline-md text-on-surface group-hover:text-white transition-colors font-bold">
                    Lesson Plan Year {year}
                  </span>
                  <LigatureIcon name="chevron_right" className="text-royal-purple group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Teachers */}
      <section className="py-24 bg-white">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Meet our Teachers</h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-2xl mx-auto font-medium">Qualified, patient, and dedicated math specialists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/5] card-elevation-1">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq9owKw2H_B64Y6pagNoRtEZ5d7HkC7I5UMO4QPcPgpOO8rr7fmZ_ZzhnXzZjj_rSBvpqAnOhQRI9hW1P3s9UpCiRD0QarG9i0DCuIm1yZPLiEaDD6LflSXzFtRK0Q-g7jaXhAWsnl9SF1XlEgnyTuJF5r7FCekNLmQww4lXtzbC3IIgEO67ioGiSzZ354sVB07Y17HxZZ1s1CfiPXAbHf3hn-kONtzvMQy_0-7f5MY4FZa018P7EZUw")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6 w-full text-white">
                <p className="font-headline-md text-headline-md font-bold">Dr. James Wilson</p>
                <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest font-semibold">A-Level Specialist</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/5] card-elevation-1">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSuj0H5tcjp3cg0SsMNs3bj8wKJJIL0t_9cQBY49p1fNKq-X500rWEY66cGGB9vGskPG6xm3VxF5Ep94PQXpJUTxTSWsL5Suiig8_ctEK437HOMRWv8gcG6PJG--HYosP02krj2mrWo2EsfxyA4UVu3zVmWuFhBHNfAVY6HPzlKFO8TgqpWhu1tijDrqVwyK0ozpQVVHoi-KH_SZ1vMAmYiSHpnTtE3IOj9-d4xRt_lcdbRgNqgGJc6Q")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6 w-full text-white">
                <p className="font-headline-md text-headline-md font-bold">Sarah Jenkins</p>
                <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest font-semibold">GCSE Expert</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/5] card-elevation-1">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOBLcbAyEnggp-K_qgXGBOYQT2pJYjRFsLzPUGPEoH4ngmEe050-8tb2fU66XKVbu4VcjQfJomECOVLkCNpV0UM_ITh2DML5CV0Qo37KdqrPj7GaTAIv6Cy1F_wPvgaEWsP49C0wQrLE80hY-vcuWI21XwIYn-bgc3dlrJaW-SvOLAsggHlEUFub8vV-UOM86yf7G7sWifs56f9sC-i9NXAgvD2unTnS8HWwfIw2-QDt8QElmSLwuYEQ")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6 w-full text-white">
                <p className="font-headline-md text-headline-md font-bold">Michael Chen</p>
                <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest font-semibold">KS2 &amp; Primary Math</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[32px] aspect-[4/5] card-elevation-1">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9zl6GHsbpEbDfeDGAf2nbGgbgzJelIVeyNTJpfq8I1CcLid7IJQAqheG-0p_jb_SZXed9EUEtCcVzFIYDu-S0KgI1rtBQNy7rt5ORT0BoPi0l5qQUiYSNHQimHfGaSLyShuR3UYY4IK4tzsp7qC8aQTjIWH_onSTaXYyRawdrjNc5OeW80rMC35K_xgm68fi_7foZgB8KBFOmyX7FMLSNnBtKdCo4LrOszy_2WYxkHZ9ot6av7tmhPg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6 w-full text-white">
                <p className="font-headline-md text-headline-md font-bold">Eleanor Wright</p>
                <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest font-semibold">Calculus Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-soft-gray overflow-hidden">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 bg-royal-purple p-8 md:p-12 rounded-[40px] text-white flex flex-col justify-between min-h-[460px]">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] opacity-80 font-semibold">Why Choose MMS?</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mt-4 leading-tight font-bold">Personalized 1-to-1 Sessions</h2>
              </div>
              <p className="font-body-lg text-body-lg max-w-xl opacity-90 my-6 font-sans">
                We deliver quality tutors to students who struggle with Math. Our sessions are designed to suit individual learning capacity, moving at a pace that ensures deep understanding without distraction.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl">
                  <p className="font-headline-md text-headline-md font-bold">100%</p>
                  <p className="font-label-sm text-label-sm opacity-70 font-medium">Focus on You</p>
                </div>
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl">
                  <p className="font-headline-md text-headline-md font-bold">Free</p>
                  <p className="font-label-sm text-label-sm opacity-70 font-medium">Trial Class</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-lime-green p-8 md:p-10 rounded-[40px] flex flex-col justify-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary">
                <Zap size={40} />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-secondary leading-tight font-bold">Constructivist Approach</h3>
              <p className="font-body-md text-body-md text-on-secondary-fixed-variant">
                Interactive sessions with presentations and online tools to make learning enjoyable and efficient.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white p-8 md:p-10 rounded-[40px] card-elevation-1 space-y-6">
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Digital Resources</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Access to hundreds of notes, animations, videos, and exercises to make math mastery easier.
              </p>
              <div className="w-full h-32 bg-soft-gray rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6158E9 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 bg-surface-container-highest p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-6">
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">Trusted by All Parents</h3>
                <p className="font-body-md text-body-md text-on-surface-variant italic">
                  "My daughter's grades improved significantly in just three months. The tutor is incredibly patient and knows exactly how to explain complex topics."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-outline-variant"></div>
                  <div>
                    <p className="font-headline-md text-label-md text-on-surface font-bold">Sarah Mitchell</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Parent of Year 11 Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-bright">
        <div className="learning-lane max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="bg-royal-purple rounded-[48px] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
            </div>
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white font-bold">
                Let’s Learn Together!
              </h2>
              <p className="font-body-lg text-body-lg text-white/80 font-sans">
                Book a free trial lesson or get details about our Math lesson plans, prices, and timings according to the UK curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => onNavigate('trial')}
                  className="bg-lime-green text-secondary px-10 py-5 rounded-2xl font-headline-md text-headline-md shadow-xl hover:scale-105 transition-transform font-bold cursor-pointer"
                >
                  Book Free Trial Now
                </button>
                <button
                  onClick={() => onNavigate('a-levels')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-headline-md text-headline-md hover:bg-white/20 transition-all font-bold cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
              <div className="pt-6">
                <p className="text-white/60 font-label-md text-label-md flex flex-wrap items-center justify-center gap-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Check size={18} /> No Credit Card Required
                  </span>
                  <span className="w-1 h-1 bg-white/40 rounded-full hidden sm:inline-block"></span>
                  <span className="flex items-center gap-1 font-medium">
                    <Timer size={18} /> 45 Min Session
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
