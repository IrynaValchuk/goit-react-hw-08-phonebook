import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Footer, Loader } from 'components';

import css from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}>
        <Footer />
      </footer>
    </>
  );
};
