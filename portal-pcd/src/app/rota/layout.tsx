import React from 'react';

export default function LayoutRota({children}:{children: React.ReactNode}) {
  return (
    <div>
        <p className='bg-amber-300'>LAYOUT INTERNO DA ROTA</p>
        {children}
        <p className='bg-amber-300'>LAYOUT INTERNO DA ROTA</p>
    </div>
  )
}
