import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type Props = {
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ large = false, className, ...props }: Props) => {

  const size = large ? 64 : 36; // 4rem = 64px, 2.25rem = 36px

  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image
        src="https://avatars.githubusercontent.com/bernardovieirarocha"
        alt=""
        width={size}
        height={size}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  );
};
