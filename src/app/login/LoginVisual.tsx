'use client';
import { type PointerEvent, useRef } from 'react';
import styles from './LoginShell.module.css';

/**
 * The framed landscape with the dashboard resting inside it. Decorative only.
 * The pointer nudges the photo and the screenshot in opposite directions for a
 * little depth; with no pointer, no JS, or reduced motion it simply sits still.
 */
export function LoginVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty('--px', (x * 2).toFixed(3));
    ref.current.style.setProperty('--py', (y * 2).toFixed(3));
  };

  const reset = () => {
    ref.current?.style.setProperty('--px', '0');
    ref.current?.style.setProperty('--py', '0');
  };

  return (
    <div
      ref={ref}
      className={styles.frame}
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className={styles.photo} />
      <div className={styles.shot}>
        <img
          className={styles.shotLight}
          src="/images/login/dashboard-light.webp"
          alt=""
          width={1600}
          height={900}
          decoding="async"
        />
        <img
          className={styles.shotDark}
          src="/images/login/dashboard-dark.webp"
          alt=""
          width={1600}
          height={900}
          decoding="async"
        />
      </div>
    </div>
  );
}
