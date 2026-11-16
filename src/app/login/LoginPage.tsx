'use client';
import { Loading } from '@umami/react-zen';
import { useRouter } from 'next/navigation';
import { type PropsWithChildren, useEffect } from 'react';
import { useLoginQuery } from '@/components/hooks';
import { Logo } from '@/components/svg';
import { LoginForm } from './LoginForm';
import styles from './LoginShell.module.css';
import { LoginVisual } from './LoginVisual';

export function LoginPageWrapper({ children }: PropsWithChildren) {
  const { user, isLoading } = useLoginQuery();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  if (isLoading || user) {
    return <Loading placement="absolute" />;
  }

  return (
    <main className={styles.shell}>
      <div className={styles.side}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo aria-hidden="true" />
            <span className={styles.wordmark}>insight</span>
          </div>
          {children}
        </div>
        <p className={styles.footnote}>
          Built on{' '}
          <a href="https://umami.is" target="_blank" rel="noreferrer">
            Umami
          </a>
          . Photo by{' '}
          <a href="https://unsplash.com/photos/yNGQ830uFB4" target="_blank" rel="noreferrer">
            Tim de Groot
          </a>
          .
        </p>
      </div>
      <LoginVisual />
    </main>
  );
}

export function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
}
