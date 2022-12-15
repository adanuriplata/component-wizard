import { Children, FC, PropsWithChildren, useState } from 'react';

//Simplify version of Wizard

const WizardContent: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const pages = Children.toArray(children);
  const [activeNumPage, setActiveNumPage] = useState(0);
  const currentPage = pages[activeNumPage];

  const handleNextPage = () => {
    setActiveNumPage((index) => index + 1);
  };
  const handlePrevPage = () => {
    setActiveNumPage((index) => index - 1);
  };

  return (
    <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <div className="wizard__buttons">
        {activeNumPage > 0 && (
          <button onClick={() => handlePrevPage()}>Previo</button>
        )}
        {activeNumPage < pages.length - 1 && (
          <button onClick={() => handleNextPage()}>Siguiente</button>
        )}
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
