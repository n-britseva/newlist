import { useState } from 'react';

export default function App() {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12 max-w-lg w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          🤔 Хочу ли я все знать?
        </h1>

        <div className="mb-6">
          <label
            htmlFor="answer-select"
            className="block text-lg text-purple-200 mb-3 font-medium"
          >
            Выберите ответ:
          </label>
          <select
            id="answer-select"
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent appearance-none cursor-pointer transition-all duration-200 hover:bg-white/15"
          >
            <option value="" disabled className="bg-slate-800 text-gray-400">
              — Выберите вариант —
            </option>
            <option value="yes" className="bg-slate-800 text-white">
              Да, хочу.
            </option>
            <option value="no" className="bg-slate-800 text-white">
              Нет, не хочу.
            </option>
          </select>
        </div>

        {selectedAnswer && (
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-center animate-fade-in">
            {selectedAnswer === 'yes' ? (
              <p className="text-green-300 text-lg font-medium">
                ✅ Ваш ответ: <span className="font-bold">Да, хочу.</span>
              </p>
            ) : (
              <p className="text-amber-300 text-lg font-medium">
                ❌ Ваш ответ: <span className="font-bold">Нет, не хочу.</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
