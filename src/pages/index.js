import React from 'react';
import { graphql } from 'gatsby';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Article,
  Bodytext,
  Seo,
  layout,
  article,
  bodytext,
} from 'gatsby-starter-kit-themes/dist/default';

import { themed } from 'gatsby-starter-kit-themes/dist/';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const LayoutThemed = themed({ themeStyle: layout })(Layout);
const ArticleThemed = themed({ themeStyle: article })(Article);
const BodytextThemed = themed({ themeStyle: bodytext })(Bodytext);

const IndexPage = props => {
  const {
    data: {
      welcome: { html: welcomeHTML },
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <LayoutThemed
      footerLinks={footerLinksHTML}
      copyrightNote={copyrightNoteHTML}
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      menu={menu}
    >
      <ArticleThemed>
        <BodytextThemed html={welcomeHTML} />
      </ArticleThemed>
      <Seo config={config} />
    </LayoutThemed>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    welcome: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/welcome/" }
    ) {
      html
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyrightNote: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyrightNote/" }
    ) {
      html
    }
  }
`;
