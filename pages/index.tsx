import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Text } from '@nextui-org/react';
import styles from '../styles/Content.module.css';
import { Grid } from '@nextui-org/react';
import { Article } from '../components/article/Article';

interface content {
  id: string;
  title: string;
  url: string;
  memo?: string;
  date: string;
  ogp?: string;
  tags?: string[];
  private: boolean;
}

const Home: NextPage = ({
  payload,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  payload = payload.sort((a: content, b: content) => {
    return a.date > b.date ? -1 : 1;
  });
  return (
    <main className={styles.main_container}>
      <div className={styles.space}></div>
      <div className={styles.fixed}>
        <div className={styles.menu}>
          <Text h3 color="white">
            Poche
          </Text>
          <select>
            <option>2021-10</option>
          </select>
        </div>
      </div>
      <div className={styles.list}>
        <Grid.Container gap={3}>
          {payload.map((content: content) => (
            <Grid key={content.id}>
              <Article {...content} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}`);
  const { payload }: { payload: content[] } = await res.json();
  return {
    props: {
      payload,
    },
  };
};

export default Home;
