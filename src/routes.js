const routes = [
  // ... other routes ...
  {
    path: '/articles',
    element: <ArticlesLayout />,  // This should render both the layout AND the content
    // Make sure any child routes or components are properly configured
    children: [
      {
        path: '',  // Default route within articles
        element: <ArticlesList />  // Component that shows your blog content
      }
    ]
  }
  // ... existing code ...
] 