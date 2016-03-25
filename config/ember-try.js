module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: 'ember-1-13',
      dependencies: {
        "ember": "^1.13",
      },
      resolutions: {
        "ember": "^1.13"
      }
    },
    {
      // ember 2 before contextual components
      name: 'ember-2-2',
      dependencies: {
        "ember": "~2.2.0",
      },
      resolutions: {
        "ember": "~2.2.0"
      }
    },
    {
      name: 'ember-2-3',
      dependencies: {
        "ember": "~2.3.0",
      },
      resolutions: {
        "ember": "~2.3.0"
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};