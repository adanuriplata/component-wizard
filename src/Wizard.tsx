import { FC, PropsWithChildren } from 'react';

const WizardContent: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <div className="wizard">
      <div className="wizard__content">{children}</div>
      <div className="wizard__buttons">
        <button>Siguiente</button>
        <button>Previo</button>
      </div>
    </div>
  );
};

const Page1 = () => <h1>Page1</h1>;
const Page2 = () => <h1>Page2</h1>;
const Page3 = () => <h1>Page3</h1>;

export const Wizard = () => {
  return (
    <WizardContent>
      <Page1 />
      <Page2 />
      <Page3 />
    </WizardContent>
  );
};
