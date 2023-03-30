if (!user) {
  return (
    <div>
      <head>
        <title>About Our API</title>
      </head>
      <body>
        <h1>About Our API</h1>
        <p>Welcome to our API documentation page! Here, you'll find information about how to use our API and what data it provides.</p>
        <h2>API Endpoints</h2>
        <p>Our API provides the following endpoints:</p>
        <ul>
          <li><code>/api/users</code>: Returns a list of all registered users.</li>
          <li><code>/api/posts</code>: Returns a list of all posts made by users.</li>
          <li><code>/api/comments</code>: Returns a list of all comments made on posts.</li>
        </ul>
        <h2>Authentication</h2>
        <p>To use our API, you'll need to authenticate using an API key. You can request an API key by contacting us at <a href="mailto:api@example.com">api@example.com</a>.</p>
        <h2>Usage</h2>
        <p>API requests should be made using HTTP GET requests. Here's an example request to get all users:</p>
        <code>GET https://example.com/api/users</code>
        <p>The API response will be a JSON object containing the requested data.</p>
        <h2>Rate Limiting</h2>
        <p>To prevent abuse, our API enforces a rate limit of 100 requests per hour per API key. If you exceed this limit, your API key may be temporarily suspended.</p>
      </body>
    </div>
  );
}
