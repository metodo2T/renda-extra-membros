import React, { useState } from 'react';
import { LandingModel } from '../data/models';
import { ArrowLeft, ArrowRight, Wand2 } from 'lucide-react';

interface Props {
  model: LandingModel;
  onSubmit: (answers: Record<string, string>) => void;
}

export function BriefingForm({ model, onSubmit }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = model.questions.length;
  const currentQuestion = model.questions[currentStep];

  const handleChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6">
      <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
        
        {/* Header & Progress */}
        <div className="bg-gray-900 px-8 py-6 border-b border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              Briefing: {model.name}
            </h2>
            <span className="text-emerald-500 font-medium text-sm">
              {currentStep + 1} de {totalSteps}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleNext} className="p-8">
          <div className="min-h-[200px] flex flex-col justify-center">
            <label htmlFor={currentQuestion.id} className="block text-xl font-medium text-gray-100 mb-6">
              {currentQuestion.label}
            </label>
            
            {currentQuestion.type === 'textarea' ? (
              <textarea
                id={currentQuestion.id}
                required
                rows={5}
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-lg"
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus
              />
            ) : (
              <input
                type="text"
                id={currentQuestion.id}
                required
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-lg"
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                currentStep === 0 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              {currentStep === totalSteps - 1 ? (
                <>
                  <Wand2 className="w-5 h-5" />
                  Gerar Prompt
                </>
              ) : (
                <>
                  Próxima
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
