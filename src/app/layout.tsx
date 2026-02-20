import { Montserrat } from 'next/font/google';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import './globals.css';
import { StoreProvider } from './store/StoreProvider';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['cyrillic'],
});

export const metadata = {
  title: 'Тарифы фитнес-приложения Fitness Room – Выберите свой план',
  description:
    'Выберите подходящий тариф для занятий с Fitness Room. Гарантия возврата 30 дней. Доступ к приложению навсегда.',
  keywords:
    'фитнес приложение, план тренировок,тарифы фитнес приложения, стоимость фитнес приложения, купить доступ к приложению, подписка на фитнес, онлайн фитнес',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <StoreProvider>
          <Container>
            <Header />
            <main className="relative min-h-screen overflow-x-hidden">{children}</main>
          </Container>
        </StoreProvider>
      </body>
    </html>
  );
}
