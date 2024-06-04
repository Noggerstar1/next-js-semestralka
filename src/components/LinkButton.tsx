'use client'

import Link from 'next/link';

const LinkButton = ({ path, text }: { path: string, text: string }) => {
    return (
      <Link href={path ?? "/"}>
      <div className="text-blue-500 hover:text-blue-700 text-center mx-auto">{text ?? "Home"}</div>
    </Link>
  )
}

export default LinkButton
