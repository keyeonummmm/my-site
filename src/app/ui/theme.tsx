'use client'

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

export default function Theme({ theme, toggleTheme }: ThemeProps) {

    return (
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => {
            console.log('Theme button clicked')
            toggleTheme()
          }}
          className="hover:italic transition-colors cursor-pointer"
        >
          {theme}
        </button>
      </div>
    )
  }