import { ResourceType } from '@ses/core/models/interfaces/types';
import React from 'react';
import ActorsContainer from '@/views/Actors/ActorsContainer';
import { fetchActors } from '@/views/Actors/api/queries';
import type { Team } from '@ses/core/models/interfaces/team';
import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  actors: Team[];
}

const EcosystemActors: NextPage<Props> = ({ actors }) => <ActorsContainer actors={actors} />;

export default EcosystemActors;

export const getServerSideProps: GetServerSideProps = async () => {
  const actors = await fetchActors(ResourceType.EcosystemActor);

  return {
    props: {
      actors,
    },
  };
};
