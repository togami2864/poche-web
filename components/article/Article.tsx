/* eslint-disable @next/next/no-img-element */
import { Link } from '@nextui-org/react';
import styled from 'styled-components';

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

export const Article = ({ title, url, memo, date, ogp }: content) => {
  const regexp = /^https:/;
  if (!ogp || !regexp.test(ogp)) {
    ogp = '/NO_IMAGE.jpg';
  }
  if (!memo) {
    memo = '空白';
  }
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <ArticleContainer memo={memo}>
        <div>
          <img src={ogp} alt="ogp image" height="140px" width="180px" />
        </div>
        <Description>
          <Text>{title}</Text>
          <Date>{date.slice(0, date.indexOf('T'))}</Date>
        </Description>
      </ArticleContainer>
    </Link>
  );
};

const ArticleContainer = styled.div<{ memo: string }>`
  border: 2px solid #f81ce5;
  border-radius: 20px;
  width: 250px;
  height: 250px;
  position: relative;

  &::before {
    content: ${({ memo }) => `"${memo}"`};
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    padding: 20px;
    height: 246px;
    width: 246px;
    border-radius: 19px;
    transform: scale(0);
    transition: 0.5s;
  }
  &:hover {
    &::before {
      transform: scale(1);
      transition: transform 0.25s ease-out;
      background: white;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 18px 18px 5px 5px;
  }
`;

const Description = styled.div`
  padding: 10px 10px;
`;

const Text = styled.p`
  color: white;
  margin: 0;
`;

const Date = styled.p`
  color: #999999;
  margin: 0;
  font-size: 12px;
`;
