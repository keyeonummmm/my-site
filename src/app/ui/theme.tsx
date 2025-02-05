'use client'

import { useState, useEffect } from 'react';

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

export default function Theme({ theme, toggleTheme }: ThemeProps) {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const estTime = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
            const hours = estTime.getHours().toString().padStart(2, '0');
            const minutes = estTime.getMinutes().toString().padStart(2, '0');
            setTime(`${hours}:${minutes} EST`);
        };

        updateTime(); // Initial call
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed bottom-5 right-16 flex items-center gap-4 theme-toggle-container">
        <button
          onClick={() => {
            console.log('Theme button clicked')
            toggleTheme()
          }}
          className="w-2 h-2 rounded-full bg-foreground animate-[scale_2s_ease-in-out_infinite] hover:scale-110 transition-transform"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            animation: 'scale 2s ease-in-out infinite'
          }}
        />
        <span className="text-foreground">{time}</span>
      </div>
    )
}