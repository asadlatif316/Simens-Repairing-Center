type LogoProps = {
  variant?: 'default' | 'light';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  const isLight = variant === 'light';

  return (
    <div className='flex items-center gap-3'>
      {/* Icon */}
      <svg
        width='44'
        height='44'
        viewBox='0 0 40 40'
        fill='none'
        aria-hidden='true'
      >
        <defs>
          <linearGradient
            id='fixoraGrad'
            x1='4'
            y1='2'
            x2='36'
            y2='38'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stopColor='#0EA5A4' />
            <stop offset='1' stopColor='#1E3A8A' />
          </linearGradient>
        </defs>
        <polygon
          points='20,2 36,11 36,29 20,38 4,29 4,11'
          fill={isLight ? '#FFFFFF' : 'url(#fixoraGrad)'}
        />
        <g
          transform='translate(9.5 9.5) scale(0.88)'
          stroke={isLight ? '#1E3A8A' : '#FFFFFF'}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        >
          <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
        </g>
      </svg>

      {/* Wordmark */}
      <div className='leading-tight'>
        <p
          className={`text-xl font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          Fix
          <span className={isLight ? 'text-amber-300' : 'text-teal-600'}>
            ora
          </span>
        </p>
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
            isLight ? 'text-white/80' : 'text-slate-500'
          }`}
        >
          Appliance Care
        </p>
      </div>
    </div>
  );
};

export default Logo;
