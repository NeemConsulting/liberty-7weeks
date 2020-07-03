import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { NewsletterSignupInterface } from './models';
import Form from '../../components/Form';
import {
  Fieldset,
  InputText,
  InputCheckbox,
} from '../../components/FormElements';
import { ReactComponent as Bell } from '../../images/icons/bell.svg';
import useStyles from './styles';

const NewsletterSignup: FunctionComponent<NewsletterSignupInterface> = ({
  _rawBody,
  image,
  onFormSubmission,
  isFormSubmitted,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLegalAgeConfirmed, setLegalAgeConfirmed] = useState(false);
  const [isBrandOptinChecked, setBrandOptinChecked] = useState(true);
  const [isCorporateOptinChecked, setCorporateOptinChecked] = useState(true);
  const [isValidEmail, setvalidEmail] = useState(false);
  const [isValidFirstName, setvalidFirstName] = useState(false);
  const [isValidLastName, setvalidLastName] = useState(false);
  const [hasSubmitted, setSubmission] = useState(false);

  const isValidData = () => {
    if (isValidEmail && isValidFirstName && isValidLastName) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const subscriptionData = {
      contact: {
        givenName: firstName,
        familyName: lastName,
        email: email,
        legalAgeConfirmation: isLegalAgeConfirmed,
      },
      optIn: {
        corporate: isBrandOptinChecked,
        brand: isCorporateOptinChecked,
      },
      answer: true,
    };
    if (isValidData()) {
      onFormSubmission(subscriptionData);
    } else {
      setSubmission(true);
    }
  };

  const handleEmailChange = event => {
    setvalidEmail(event.target.value.length > 0);
    setEmail(event.target.value);
  };

  const handleFirstNameChange = event => {
    setvalidFirstName(event.target.value.length > 0);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = event => {
    setvalidLastName(event.target.value.length > 0);
    setLastName(event.target.value);
  };

  const handleLegalAgeConfirmation = () => {
    setLegalAgeConfirmed(!isLegalAgeConfirmed);
  };

  const handleBrandOptin = () => {
    setBrandOptinChecked(!isBrandOptinChecked);
  };

  const handleCorporateOptin = () => {
    setCorporateOptinChecked(!isCorporateOptinChecked);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.banner}>
        <div className={classNames(classes.imageWrapper, classes.container)}>
          {image && <Img fluid={image.asset.fluid} />}
        </div>
      </div>
      <div className={classNames(classes.heading, classes.container)}>
        <h1 className={classes.pageTitle}>Subscribe for Email Updates</h1>
        {_rawBody && (
          <h2 className={classes.pageDescription}>
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawBody}
            />
          </h2>
        )}
      </div>
      <div className={classNames(classes.imageWrapper, classes.container)}>
        {isFormSubmitted ? (
          <div className={classes.thankyou}>
            <Bell />
            <h2>Thankyou for signing up!</h2>
            <p>
              You will be the first to know about articles, products, tutorials,
              helpful tips &amp; contests. You will get updates that are most
              important to you.
            </p>
          </div>
        ) : (
          <Form onsubmit={handleFormSubmit}>
            <Fieldset legend="Personal Information">
              <InputText
                label="Email"
                type="email"
                id="email"
                required={true}
                value={email}
                onChange={handleEmailChange}
                valid={isValidEmail}
                validate={hasSubmitted}
              />
              <InputText
                label="First Name"
                type="text"
                id="givenName"
                required={true}
                value={firstName}
                onChange={handleFirstNameChange}
                valid={isValidFirstName}
                validate={hasSubmitted}
              />
              <InputText
                label="Last Name"
                type="text"
                id="familyName"
                required={true}
                value={lastName}
                onChange={handleLastNameChange}
                valid={isValidLastName}
                validate={hasSubmitted}
              />
            </Fieldset>
            <Fieldset legend="Select Optins">
              <InputCheckbox
                label="Yes - I confirm that I am over 16 years old."
                id="legalAgeConfirmation"
                name="legalAgeConfirmation"
                required={true}
                checked={isLegalAgeConfirmed}
                onChange={handleLegalAgeConfirmation}
              />
              <InputCheckbox
                label="Yes - I want to receive information from SimpleArticle on
                    new products and services via email."
                id="optInBrand"
                name="optIn.brand"
                required={true}
                checked={isBrandOptinChecked}
                onChange={handleBrandOptin}
              />
              <InputCheckbox
                label="Yes - Share my data with other Unilever brands to receive
                    the latest news on other Unilever products and services via
                    email."
                id="optInCorporate"
                name="optIn.corporate"
                required={true}
                checked={isCorporateOptinChecked}
                onChange={handleCorporateOptin}
              />
            </Fieldset>
            <div>
              <p>
                Please read our{' '}
                <a href="" target="_blank">
                  PRIVACY
                </a>{' '}
                and{' '}
                <a href="" target="_blank">
                  COOKIE
                </a>{' '}
                notices to understand how we use your personal data. By clicking
                the below button you agree to our{' '}
                <a href="" target="_blank">
                  TERMS AND CONDITIONS
                </a>
                .
              </p>
            </div>
            <input
              type="submit"
              name="submit"
              value="Subscribe"
              onClick={handleFormSubmit}
              className={classes.button}
            />
            {/* TODO: Add hidden fields for hard coded values to be passed in payload */}
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
