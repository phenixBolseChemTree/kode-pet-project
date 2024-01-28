

const BuildPage = (index: string) => (
  <>
    <h3>Page {index}</h3>
    <div>
      Page {index} content: {};
    </div>
  </>
);

export const PageOne = () => BuildPage('page1');
export const PageTwo = () => BuildPage('page2');