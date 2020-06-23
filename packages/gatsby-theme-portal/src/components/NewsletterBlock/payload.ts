const defaultFormPayload = {
  brand: 'tresemme',
  dynamicConditionValidator: 'true',
  locale: 'en-GB',
  formType: 'signUp',
  entity: 'PRM2.6',
  formUrl: '/test/liberty/form',
  contact: {
    givenName: 'Lokesh',
    familyName: 'Yadav',
    email: 'lokesh.yadav@publicissapient.com',
    legalAgeConfirmation: true,
    languagePref: 'EN',
  },
  surveyResponseList: [
    {
      questionAnswersList: [
        {
          answers: [
            {
              id: '2144',
              answer: true,
            },
          ],
          question: 'Do you colour your hair?',
          id: '1592',
        },
      ],
      surveyId: '420',
    },
  ],
  optIn: {
    corporate: true,
    brand: true,
    smsBrand: true,
  },
  dcuConfig: {
    campaignId: 'PN000559',
    brandId: 'BH0996',
    webDomain: '',
    emailBrandServiceId: 'BRAND_GB_BH0996_EML',
    mobileBrandServiceId: 'BRAND_GB_BH0996_SMS',
  },
};

export default defaultFormPayload;
