# Liberty portal template

This repo includes several packages:
1. `studio` - sanity studio
2. `gatsby-theme-portal` - Gatsby theme for the portal
3. `tl-ph` - Gatsby website, based on `gatsby-theme-portal`

## Configuration

1. `studio` currently includes hardcoded config (sanityId - *8azq2eb8*), can be changed on `packages/studio/sanity.json:7`
2. `tl-ph` supports configuration files (`packages/tl-ph/.env.tl-ph`, `packages/tl-ph/.env.develop`) where you can specify required env vars.

.env.development should contain sanity projectId and datataset name, e.g:

```
app_local_sanityId = "8azq2eb8"
app_local_sanityDataset = "production"
```

# Installation

1. run `yarn` from repo root
2. put `.env.development` file with proper sanity details
2. that's it :)

## Commands

1. Run gatsby website: `yarn workspace tl-ph develop`
2. Run sanity studio: `yarn workspace platform-liberty-studio dev`
3. Deploy sanity studio: `yarn workspace platform-liberty-studio deploy`
Changes will be deployed to **sanity.studio* domain
4. Deploy sanity graphql: `yarn workspace platform-liberty-studio graphql-deploy`
Grapqh will be updated at the playground:
*https://<sanityid>.api.sanity.io/v1/graphql/<datasetName>/default*
