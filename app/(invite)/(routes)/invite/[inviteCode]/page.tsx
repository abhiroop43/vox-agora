import currentProfile from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';
import {ChannelType} from "@prisma/client";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect('/');
  }

  // check if member is already a part of the server
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    // if member is already a part of the server, then redirect to server page
    return redirect(`/servers/${existingServer.id}`);
  }

  // get the server to which the invite code belongs
  const serverOfInviteCode = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode
    }
  });

    const server = await db.server.update({
      where: {
        inviteCode: params.inviteCode.toString(),
        id: serverOfInviteCode?.id
      },
      data: {
        members: {
          create: {
            profileId: profile.id,
          },
        },
      },
    });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
};

export default InviteCodePage;
