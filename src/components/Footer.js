import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <>
      <div className="border border-t-2 py-4 w-full flex justify-center text-sm text-slate-700">
        <span className='mr-3'>© 2023</span>
        <Link href={'/'}>apri setiawan</Link>
      </div>
    </>
  );
}

export default Footer