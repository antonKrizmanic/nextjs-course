import MainHeader from './main-header';

function CustomLayout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default CustomLayout;
