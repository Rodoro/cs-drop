import { create } from "zustand";
import gb from '../locales/gb.json';
import ru from '../locales/ru.json';

interface LanguageStore {
    language: string;
    setLanguage: (newLanguage: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: 'gb',
    setLanguage: (newLanguage: any) => set({ language: newLanguage }),
}));

export const useTranslation = () => {
    const { language } = useLanguageStore();
    const translations = language === 'gb' ? gb : ru;

    const getTranslation = (key: string): string => {
        return translations[key as keyof typeof translations] || key; // Возвращаем ключ, если перевод не найден
    };

    return { getTranslation };
};