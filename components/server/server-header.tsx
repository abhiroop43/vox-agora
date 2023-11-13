'use client';

import { ServerWithMembersWithProfiles } from '@/types';
import { MembeRole } from '@prisma/client';
import React from 'react';

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MembeRole;
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MembeRole.ADMIN;
  const isModerator = role === MembeRole.MODERATOR;

  return <div>ServerHeader</div>;
};

export default ServerHeader;
