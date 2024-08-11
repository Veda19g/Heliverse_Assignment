'use client'

import {
    UserGroupIcon,
    UserIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    PresentationChartBarIcon,
    HashtagIcon,
    WrenchScrewdriverIcon
  } from '@heroicons/react/24/outline';
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';

  const links = [
    { name: 'Dashboard', href: '/teacher/dashboard', icon: HomeIcon },
    { name: 'Classroom', href: '/teacher/classroom', icon: UserGroupIcon },
    { name: 'Timetables',href: '/teacher/timetable',icon: PresentationChartBarIcon}
  ];
  
  export default function NavLinks() {

    const currentPath = usePathname();

    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': currentPath === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className=" ">{link.name}</p> {/* Hidden on small screens */}
          </a>
          );
        })}
      </>
    );
  }
  