const templatesMap = {
  RecipeCategory:
    '../gatsby-theme-recepedia/src/templates/RecipeCategoryPage/RecipeCategoryPage.tsx',
  ContentHub:
    '../gatsby-theme-recepedia/src/templates/ContentHubPage/ContentHubPage.tsx',
  RecipeDetail:
    '../gatsby-theme-recepedia/src/templates/RecipePage/RecipePage.tsx',
  ArticleDetail:
    '../gatsby-theme-recepedia/src/templates/ArticlePage/ArticlePage.tsx',
  BrandPromisePage:
    '../gatsby-theme-recepedia/src/templates/BrandPromisePage/BrandPromisePage.tsx',
  BrandProductsPage:
    '../gatsby-theme-recepedia/src/templates/BrandProductsPage/BrandProductsPage.tsx',
  ProductDetails:
    '../gatsby-theme-recepedia/src/templates/BrandProductDetailsPage/BrandProductDetailsPage.tsx',
  default:
    '../gatsby-theme-recepedia/src/templates/ContentPage/ContentPage.tsx',
};

module.exports = pageType => {
  const pageTypes = [
    'Home',
    'AllRecipes',
    'Search',
    'ContactUs',
    'ContactForm',
    'ContactUsThankYou',
    'UserProfile',
    'NotFound',
    'AboutUs',
    'MealPlanner',
    'Sitemap',
    'NewsletterSignUp',
    'TermsAndConditions',
    'FAQ',
    'ArticlesHub',
    'Search',
    'BrandLandingPage',
    'BrandLandingThankYouPage',
    'InspirationQuiz',
    'PersonalizedPage',
  ];

  if (pageTypes.indexOf(pageType) > -1) {
    return `../gatsby-theme-recepedia/src/staticPages/${pageType}/index.tsx`;
  } else if (templatesMap[pageType]) {
    return templatesMap[pageType];
  }

  return templatesMap.default;
};
