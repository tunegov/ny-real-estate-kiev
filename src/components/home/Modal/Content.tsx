import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import { sendMessageToEmail } from '@api/user';
import Button from '@components/Button';
import Input from '@components/Input';
import Stepper from './Stepper';
import RadioGroup from './RadioGroup';
import { NumberMask, NumberRegex } from '@constants/index';

const MESSAGE_TITLE = 'Подобрать недвижимость';

interface Props extends WithTranslation {
  onClose: any;
}

const Content = ({ t, onClose }: Props) => {
  const [step, setStep] = useState(0);
  const [step1, setStep1] = useState(t('home.modal.steps.step_1.answer_1.key'));
  const [step2, setStep2] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(false);

  const isFirstStepFirstAnswer =
    step1 === t('home.modal.steps.step_1.answer_1.key');

  const STEP_1_ITEMS = [
    {
      title: t('home.modal.steps.step_1.answer_1.title'),
      key: t('home.modal.steps.step_1.answer_1.key')
    },
    {
      title: t('home.modal.steps.step_1.answer_2.title'),
      key: t('home.modal.steps.step_1.answer_2.key')
    }
  ];

  const STEP_2_1_ITEMS = [
    {
      title: t('home.modal.steps.step_2_1.answer_1.title'),
      key: t('home.modal.steps.step_2_1.answer_1.key')
    },
    {
      title: t('home.modal.steps.step_2_1.answer_2.title'),
      key: t('home.modal.steps.step_2_1.answer_2.key')
    },
    {
      title: t('home.modal.steps.step_2_1.answer_3.title'),
      key: t('home.modal.steps.step_2_1.answer_3.key')
    },
    {
      title: t('home.modal.steps.step_2_1.answer_4.title'),
      key: t('home.modal.steps.step_2_1.answer_4.key')
    }
  ];

  const STEP_2_2_ITEMS = [
    {
      title: t('home.modal.steps.step_2_2.answer_1.title'),
      key: t('home.modal.steps.step_2_2.answer_1.key')
    },
    {
      title: t('home.modal.steps.step_2_2.answer_2.title'),
      key: t('home.modal.steps.step_2_2.answer_2.key')
    }
  ];

  const checkValid = (nameLocal: string, phoneLocal: string) => {
    setValid(nameLocal.length >= 2 && NumberRegex.test(phoneLocal));
  };

  const sendEmail = async () => {
    if (!valid) {
      return;
    }
    const category1 = STEP_1_ITEMS.find(item => item.key === step1);
    const category2 = (isFirstStepFirstAnswer
      ? STEP_2_1_ITEMS
      : STEP_2_2_ITEMS
    ).find(item => item.key === step2);

    const messageText = `
          Имя - <b>${name}<br/></b>
          Телефон - <b>${phone}<br/><br/></b>
          Выбранная категория:<br/>
          <b>${category1!.title} -> ${category2!.title}</b>
      `;

    await sendMessageToEmail(MESSAGE_TITLE, messageText);
    setName('');
    setPhone('');
    setStep(step + 1);
  };

  const renderSteps = () => {
    switch (step) {
      case 0: {
        return (
          <div className="content-step">
            <h2>{t('home.modal.steps.step_1.title')}</h2>
            <Stepper step={step} total={3} />
            <RadioGroup
              onChnaged={(key: string) => setStep1(key)}
              selected={step1}
              items={STEP_1_ITEMS}
            />
            <Button
              title={t('home.modal.steps.next')}
              onClick={() => setStep(step + 1)}
            />
          </div>
        );
      }
      case 1: {
        const isFirstStepFirstAnswer =
          step1 === t('home.modal.steps.step_1.answer_1.key');

        return (
          <div className="content-step">
            <h2>
              {t(
                `home.modal.steps.step_2_${
                  isFirstStepFirstAnswer ? 1 : 2
                }.title`
              )}
            </h2>
            <Stepper step={step} total={3} />
            <RadioGroup
              onChnaged={(key: string) => setStep2(key)}
              selected={step2}
              items={isFirstStepFirstAnswer ? STEP_2_1_ITEMS : STEP_2_2_ITEMS}
            />
            <Button
              disabled={!step2}
              title={t('home.modal.steps.next')}
              onClick={() => !!step2 && setStep(step + 1)}
            />
          </div>
        );
      }
      case 2: {
        const result = Math.floor(Math.random() * 11) + 5;

        return (
          <div className="content-step form">
            <h2>{t('home.modal.steps.step_3.title', { result: 12 })}</h2>
            <h3>{t('home.modal.steps.step_3.subtitle')}</h3>
            <Stepper step={step} total={3} />
            <div className="content-step-form">
              <Input
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  checkValid(e.target.value, phone);
                }}
                placeholder={t('home.modal.steps.step_3.form.name')}
              />
              <Input
                mask={NumberMask}
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                  checkValid(name, e.target.value);
                }}
                placeholder={t('home.modal.steps.step_3.form.phone')}
              />
              <Button
                disabled={!valid}
                title={t('home.modal.steps.step_3.form.button')}
                onClick={sendEmail}
              />
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="content-step center">
            <h2>{t('home.modal.steps.step_4.title')}</h2>
            <h3>{t('home.modal.steps.step_4.subtitle')}</h3>
            <Stepper step={step} total={3} />
            <Button
              title={t('home.modal.steps.step_4.button')}
              onClick={onClose}
            />
          </div>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="modal-inner-content">
      <div className="modal-inner-content-left">
        {renderSteps()}
        <div className="modal-inner-content-left-pattern" />
      </div>
      <div className="modal-inner-content-right">
        <div className="modal-inner-content-right-logo" />
      </div>
    </div>
  );
};

export default withTranslation('home')(Content);
