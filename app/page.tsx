// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Top 10 BASE ecosystem projects',
    overview: 'Welcome to the Base ecosystem — Layer 2 from Coinbase.\n\nHere are the most active and useful projects with real-world use in 2026.\n\nClick "Next", to get started!',
    bgImage: 'https://www.shutterstock.com/image-illustration/base-logo-on-dark-background-600nw-2518016509.jpg',
    textColor: '#001F3F',
    strokeColor: 'black',
    glowColor: '#007BFF',
    referralLink: null,
  },
  {
    title: '1. Aerodrome Finance',
    overview: 'Aerodrome Finance is a leading decentralized exchange. (DEX) is based on the Velodrome platform. It dominates the ecosystem with a daily trading volume of hundreds of millions of dollars. Users can exchange tokens, provide liquidity to pools, and receive rewards using the AERO token.',
    bgImage: 'https://iq.wiki/cdn-cgi/image/width=1920,quality=70/https://ipfs.everipedia.org/ipfs/QmYX3kaomHsEN6DeAow43DX2amyfeve5kGxdBuJeaKAeH9',
    textColor: '#001F3F',
    strokeColor: 'black',
    glowColor: '#007BFF',
    referralLink: null,
  },
  {
    title: '2. Morpho',
    overview: 'Morpho is an innovative basic lending protocol optimized for maximum efficiency. Unlike traditional lending platforms, Morpho uses peer-to-peer matching to raise rates and reduce risks. TVL reaches billions of dollars, and daily borrowings are in the millions.',
    bgImage: 'https://help.defisaver.com/~gitbook/ogimage/wqM00strfoiJQnVjBMW7',
    textColor: 'white',
    strokeColor: 'black',
    glowColor: 'white',
    referralLink: null,
  },
  {
    title: '3. Aave',
    overview: 'Seamless Protocol is a proprietary basic lending protocol specializing in loans with insufficient collateral. It offers flexible loan terms for billions of twill, minimizing liquidation risks. Users take out loans secured by reputation or cross-network assets for trading and investing. In 2026, the daily sales volume will exceed $100 million.',
    bgImage: 'https://usenobi.com/wp-content/uploads/2023/05/pasted-image-0-9.png',
    textColor: '#00FF00',
    strokeColor: 'black',
    glowColor: '#00FFAA',
    referralLink: null,
  },
  {
    title: '4. Zora',
    overview: 'Zora is a platform for creators and NFTs on Base, focusing on content monetization. It allows you to spend tokens from art, music, memes, and collections with low fees. Real-world usage: Artists and musicians sell works directly to fans, earning royalties automatically. In 2026, Zora has millions of active users, with integration into social networks and marketplaces.',
    bgImage: 'https://99bitcoins.com/wp-content/uploads/2025/06/52454ad066005164c17a93c0907c0512c7a75076-1920x1080-1.jpg',
    textColor: '#FF6600',
    strokeColor: 'black',
    glowColor: '#FFAA00',
    referralLink: 'https://zora.co/invite/rungod', // ← Замени на свою рефку
  },
 {
    title: '5. Seamless Protocol',
    overview: 'Seamless Protocol is its own basic lending protocol specializing in loans with insufficient collateral. It offers flexible loan terms worth billions of dollars, minimizing liquidation risks. Users take out loans secured by reputation or cross-network assets for trading and investing.',
    bgImage: 'https://framerusercontent.com/images/Vc6vqkO3dosttl2IxzwwjKj4KM.png',
    textColor: '#001F3F',        // Текущий тёмно-синий
    strokeColor: 'black',
    glowColor: '#007BFF',
  },
 {
    title: '6. Avantis',
    overview: 'Avantis is a derivatives and perpetuals protocol on Base, with a high trading volume. It offers leverage of up to 50x on synthetic assets. Real-world use: traders hedge positions, speculate on volatility, and earn on funding rates. TVL in 2026 — hundreds of millions, with daily transactions in millions of dollars. Integration with oracles ensures accurate pricing, making Avantis the key to pro-trading in the ecosystem.',
    bgImage: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*-yBxKAq1XSaEUP_JQwpg1Q.jpeg',
    textColor: '#001F3F',        // Текущий
    strokeColor: 'black',
    glowColor: '#007BFF',
  },
  // ... остальные слайды без изменений
  {
    title: '7. Farcaster',
    overview: 'Farcaster is a decentralized social network (SocialFi) with millions of active addresses. It allows you to post messages, interact through frames, and create online communities. It is an alternative to centralized social networks.',
    bgImage: 'https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/02/farcaster-temp-gID_5-pID_1.png@webp',
    textColor: '#001F3F',
    strokeColor: 'black',
    glowColor: '#007BFF',
    referralLink: 'https://farcaster.xyz/~/code/39WA4V', // ← Замени
  },
 {
    title: '8. Extra Finance',
    overview: 'Extra Finance — yield is an optimizer and a basic lending platform focused on automated farming. It maximizes profitability through formulations and strategies. Users place assets to generate passive income in the billions of TVL.',
    bgImage: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*vN0zwTIhG51hX_UhKRM4gw.jpeg',
    textColor: 'white',          // Белый
    strokeColor: 'black',
    glowColor: 'white',
  },
  {
    title: '9. Base App ',
    overview: 'The Base app is the official app for the Base ecosystem integrated with Coinbase. It provides registration, payments in US dollars and access to dApps. Real-world application: Users conduct transactions in real life by integrating with Shopify for e-commerce. In 2026, the number of users will be in the millions, and daily payments in the billions.',
    bgImage: 'https://img.paragraph.com/cdn-cgi/image/format=auto,width=1080,quality=85/https://storage.googleapis.com/papyrus_images/bbe51c31ca7c3ba9ca0b35127ac351cbfa4de0085bca2aaa48c1ca050b4daba6.jpg',
    textColor: 'white',
    strokeColor: 'black',
    glowColor: 'white',
    referralLink: 'https://base.app/invite/friends/Y616NC1B', // ← Замени
  },
{
    title: '10. SynFutures',
    overview: 'SynFutures is a platform for derivatives and prediction markets on Base. It allows you to trade futures, options and bet on events. Real-world use: Users hedge risks, speculate on prices, and participate in markets. TVL in 2026 — billions, with high volume. Integration with Base provides speed and low costs, making it popular for global traders.',
    bgImage: 'https://www.cryptoninjas.net/wp-content/uploads/synfutures-router-cryptoninjas.jpg',
    textColor: 'white',          // Белый
    strokeColor: 'black',
    glowColor: 'white',
  },
  // остальные слайды (5,6,8,10) без referralLink или с null
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <audio autoPlay loop src="/your-music.mp3" />

      <div
        style={{
          backgroundImage: `url(${slide.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          boxSizing: 'border-box',
          textAlign: 'center',
          gap: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '3.8rem',
            fontWeight: 'bold',
            color: slide.textColor,
            WebkitTextStroke: `2px ${slide.strokeColor}`,
            textShadow: `
              0 0 15px ${slide.glowColor},
              0 0 30px ${slide.glowColor},
              4px 4px 12px rgba(0,0,0,0.9)
            `,
          }}
        >
          {slide.title}
        </h1>

        <p
          style={{
            fontSize: '1.5rem',
            maxWidth: '960px',
            lineHeight: '1.8',
            color: slide.textColor,
            WebkitTextStroke: `1.5px ${slide.strokeColor}`,
            textShadow: `
              0 0 10px ${slide.glowColor},
              3px 3px 10px rgba(0,0,0,0.9)
            `,
          }}
        >
          {slide.overview}
        </p>

        {/* Реферальная ссылка-кнопка */}
        {slide.referralLink && (
          <a
            href={slide.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '16px 40px',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              background: 'rgba(0, 31, 63, 0.9)',
              color: 'white',
              border: '3px solid #007BFF',
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 0 25px rgba(0, 123, 255, 0.6)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0, 51, 102, 1)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 123, 255, 0.9)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0, 31, 63, 0.9)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 123, 255, 0.6)';
            }}
          >
            Go to project
          </a>
        )}
      </div>

      {/* Кнопки навигации */}
      {currentSlide > 0 && (
        <button
          onClick={() => setCurrentSlide(currentSlide - 1)}
          style={{
            position: 'absolute',
            left: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '15px 30px',
            fontSize: '1.2rem',
            background: 'rgba(0, 31, 63, 0.8)',
            color: 'white',
            border: '3px solid #007BFF',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(0, 51, 102, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 123, 255, 0.8)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(0, 31, 63, 0.8)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)';
          }}
        >
          ← Previous
        </button>
      )}

      {currentSlide < slides.length - 1 && (
        <button
          onClick={() => setCurrentSlide(currentSlide + 1)}
          style={{
            position: 'absolute',
            right: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '15px 30px',
            fontSize: '1.2rem',
            background: 'rgba(0, 31, 63, 0.8)',
            color: 'white',
            border: '3px solid #007BFF',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(0, 123, 255, 0.5)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(0, 51, 102, 0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 123, 255, 0.8)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(0, 31, 63, 0.8)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.5)';
          }}
        >
          Next →
        </button>
      )}
    </div>
  );
}
