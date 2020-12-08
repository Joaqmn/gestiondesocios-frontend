module.exports = {
    themeConfig: {
      theme: 'api',
      logo: 'https://i.imgur.com/Hr5fglb.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'GitHub API', link: 'https://github.com/fullstacktf/fs5-gestiondesocios-backend' },
        { text: 'GitHub Front', link: 'https://github.com/fullstacktf/fs5-gestiondesocios-frontend' }
      ],
      sidebar: [
      {
        title: 'Games enpoints',   // required
        path: '/guideapi/games',      // optional, link of the title, which should be an absolute path and must exist
        
      },
      {
        title: 'Borrowed Games enpoints',   // required
        path: '/guideapi/borrowedgames',      // optional, link of the title, which should be an absolute path and must exist
        
      },
      {
        title: 'Assoc Partners enpoints',   // required
        path: '/guideapi/assocpartners',      // optional, link of the title, which should be an absolute path and must exist
        
      }]
    }
  }