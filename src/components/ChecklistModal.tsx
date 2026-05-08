'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Download, User, Mail, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChecklistModal({ isOpen, onClose }: ChecklistModalProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    const asset = language === 'es' ? '/tax-checklist-es.pdf' : '/tax-checklist-en.pdf';
    window.open(asset, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <div className="p-8 md:p-12">
                <div className="w-16 h-16 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {t.home.modal.title}
                </h2>
                <p className="text-slate-600 mb-8 font-medium">
                  {t.home.checklistSub}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      {t.home.modal.firstName}
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        required
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900"
                        placeholder="Jane"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      {t.home.modal.email}
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all font-medium text-slate-900"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-800 transition-all shadow-xl shadow-green-700/10 disabled:opacity-50 mt-4 active:scale-95"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.home.modal.submit}
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-8 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {t.home.modal.successTitle}
                </h2>
                <p className="text-slate-600 mb-10 font-medium text-lg">
                  {t.home.modal.successSub}
                </p>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  {t.home.modal.downloadLink}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
