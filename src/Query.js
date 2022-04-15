const githubQuery = (
  pageCount,
  queryString,
  paginationKeyboard,
  paginationString
) => {
  return {
    query: `
    {
      viewer {
        name
      }
      search (query: " ${queryString} user:Sardor-M sort:updated-desc", type: REPOSITORY, ${paginationKeyboard}: ${pageCount},${paginationString}){
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name 
              description
              id 
              url
              viewerSubscription
              licenseInfo {
                spdxId
              }
            }
          }
        }
        pageinfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
      `,
  };
};

export default githubQuery;
