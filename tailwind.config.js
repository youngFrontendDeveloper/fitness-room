const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Добавляем кастомные брейкпоинты
      screens: {
        xs: '320px',
        sm: '375px',
        md: '768px',
        xl: '1920px',
      },
    },
  },
  plugins: [],
};
export default config;
