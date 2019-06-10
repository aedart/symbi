module.exports = {
    base: '/symbi/',
    dest: '.build',
    title: 'Symbi',
    description: 'Symbi Official Documentation',
    locales: {
        '/': {
            lang: 'en-GB',
            title: 'Symbi',
            description: 'Symbi Official Documentation'
        },
    },
    themeConfig: {
        repo: 'aedart/symbi',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: true,
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                // text for the edit-on-github link
                editLinkText: 'Edit page on GitHub',
                // config for Service Worker
                // serviceWorker: {
                //     updatePopup: {
                //         message: "New content is available.",
                //         buttonText: "Refresh"
                //     }
                // },
                // algolia docsearch options for current locale
                //algolia: {},
                nav: [
                    { text: 'Packages', link: '/packages/' },
                    { text: 'Changelog', link: 'https://github.com/aedart/symbi/blob/master/CHANGELOG.md' },
                ],
                sidebar: {
                    '/packages/' : generatePackagesSideBar(),
                }
            },
        }
    }
};

function generatePackagesSideBar () {
    return [
        {
            title: 'Packages',
            collapsable: true,
            children: [
                '',
            ]
        },
        {
            title: 'Mixins',
            collapsable: true,
            children: [
                'mixins/',
                'mixins/declare',
                'mixins/mix',
                'mixins/inherit',
            ]
        }
    ]
}
