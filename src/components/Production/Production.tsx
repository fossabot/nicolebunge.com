import React from 'react';
import Link from '../Link';

function formatList(list: any[]): string {
  return list.reduce(
    (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' & ') + value,
  );
}

interface Director {
  name: string;
  url?: string;
}

interface Organization {
  name: string;
  slug: string;
  url: string;
}

export interface ProductionProps {
  name: string;
  role: string;
  directors: Director[];
  organization: Organization;
}

function Production(props: ProductionProps): JSX.Element {
  const { name, role, directors, organization } = props;

  return (
    <p>
      <strong>„{name}“</strong>, {role}
      <br />
      Regie: {formatList(directors.map((director) => director.name))},{' '}
      <Link to={organization.url}>{organization.name}</Link>
    </p>
  );
}

export default Production;