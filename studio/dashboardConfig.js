export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4298cf6aec38cc55b687d7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4xp2yjdd',
                  apiId: '6fbc199c-5863-4242-8e7d-3ffff8873854'
                },
                {
                  buildHookId: '5d4298cfe92a1b2ec33aef1f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xcdo5inp',
                  apiId: '000784b5-09b2-4413-9f03-306e9c7c7cb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rushabhnagda11/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xcdo5inp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
