import React, { FunctionComponent, useState } from 'react';
import axios from 'axios';
import { NewsletterBlockInterface } from './models';
import NewsletterPromo from '../NewsletterPromo';
import NewsletterSignup from '../NewsletterSignup';
import defaultFormPayload from './payload';

const componentMap = {
  signup: NewsletterSignup,
  subscribe: NewsletterPromo,
  default: NewsletterPromo,
};

const NewsletterBlock: FunctionComponent<NewsletterBlockInterface> = ({
  _rawBody,
  ctaLabel,
  image,
  type,
}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const getComponentKey = (componentTypeName: string) => {
    if (componentTypeName.indexOf('signup') >= 0) return 'signup';
    if (componentTypeName.indexOf('subscribe') >= 0) return 'subscribe';

    return 'default';
  };
  const componentTypeName = type ? type.name.toLowerCase() : '';
  const componentKey = getComponentKey(componentTypeName);
  const Component = componentMap[componentKey];

  const onFormSubmission = formData => {
    axios
      .post(process.env['newsletter_api_endpoint'], {
        ...defaultFormPayload,
        contact: { ...defaultFormPayload.contact, ...formData.contact },
        optIn: { ...defaultFormPayload.optIn, ...formData.optIn },
        surveyResponseList: [
          {
            questionAnswersList: [
              {
                answers: {
                  ...defaultFormPayload.surveyResponseList[0]
                    .questionAnswersList[0].answers,
                  ...formData.answer,
                },
              },
            ],
          },
        ],
      })
      .then(() => {
        setIsFormSubmitted(true);
      });
  };

  return Component ? (
    <section>
      <Component
        {...{ _rawBody, ctaLabel, image, onFormSubmission, isFormSubmitted }}
      />
    </section>
  ) : null;
};

export default NewsletterBlock;
