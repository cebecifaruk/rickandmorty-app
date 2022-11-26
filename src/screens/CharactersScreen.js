import React from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';

import Character from '../components/Character';

async function getCharacters(page = 1) {
  const response = await axios.get(
    'https://rickandmortyapi.com/api/character?page=' + page,
  );
  return response.data;
}

export default () => {
  const [page, setPage] = React.useState(1);
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    getCharacters(page)
      .then(x => x.results)
      .then(chrs => setCharacters([...characters, ...chrs]));
  }, [page]);

  return (
    <FlatList
      data={characters}
      renderItem={({item, index, separators}) => {
        return <Character key={item.id} {...item} />;
      }}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};
