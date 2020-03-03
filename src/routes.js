import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/mydiary/ArticleListViews';
import ArticleTheme from './containers/mydiary/ArticleThemeView';

const MyDiaryRouter = () =>
      <div>
      <Route exact path="/articles/" component={ArticleList} />{" "}
      <Route exact path="/articles/:articleID/" component={ArticleTheme} />{" "}
</div>


export default MyDiaryRouter;
