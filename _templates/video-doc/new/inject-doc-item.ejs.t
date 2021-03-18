---
inject: true
to: sidebars.js
before: "(?<=<%= sidebar %>[\"]?: \\[[^\\]]+)\\],"
skip_if: "videos/<%= category %>/<%= num %>-<%= name %>/<%= name %>"
---
      "videos/<%= category %>/<%= num %>-<%= name %>/<%= name %>",