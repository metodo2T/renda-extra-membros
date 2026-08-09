import React from 'react';
import { LandingModel } from '../data/models';

interface Props {
  models: LandingModel[];
  onSelect: (model: LandingModel) => void;
}

export function ModelGallery({ models, onSelect }: Props) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Escolha um Modelo de Alta Conversão
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Selecione a estrutura base e a IA escreverá a copy perfeita para o seu produto mantendo o design validado.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:ring-2 hover:ring-emerald-500"
              onClick={() => onSelect(model)}
            >
              <img
                className="w-full h-48 object-cover"
                src={model.image}
                alt={model.name}
              />
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 truncate" title={model.name}>{model.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{model.description}</p>
                <button className="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition">
                  Usar este Modelo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
