import Browser from '@/components/Browser';
import ResponsiveImage from '@/components/ResponsiveImage';
import { uiDownloadUrl } from '@/config/site';
import { Button } from '@tabler/react';
import React from 'react';

export default function LayoutHeroUi() {
  return (
    <>
      <header className="hero pt-10 pb-0 bg-gradient">
        <div className="container">
          <h1 className="hero-title" data-aos="zoom-y-out">
            Develop beautiful web apps with&nbsp;Tabler
          </h1>
          <p className="hero-description mt-4" data-aos="zoom-y-out" data-aos-delay="150">
            Tabler is a free and open source web application UI kit based on Bootstrap&nbsp;5, with hundreds responsive components and multiple layouts.
          </p>

          <div className="mt-5" data-aos="zoom-y-out" data-aos-delay="300">
            <div className="row g-3 justify-center">
              <div className="col-auto">
                <Button href={uiDownloadUrl} size="lg" primary className="lemonsqueezy-button">
                  Download template
                </Button>
              </div>
              <div className="col-auto">
                <Button href="/preview" size="lg" target="_blank" rel="noopener noreferrer">
                  Preview template
                </Button>
              </div>
            </div>
          </div>

          <div className="hero-img img-overlap-margin" data-aos="zoom-y-out" data-aos-delay="450">
            <Browser>
              <ResponsiveImage src="/img/tabler/preview.png" width={1080} height={760} priority />
            </Browser>
          </div>
        </div>
      </header>
    </>
  );
}
