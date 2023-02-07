import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  margin-left: 250px;
`;

const SlideMenuWrap = styled.div`
  position: fixed;
  width: 250px;
  padding: 20px;
  height: 100%;
  flex-shrink: 0;
  background: #eee;
`;

const MenuButton = styled.div`
  cursor: pointer;
  text-align: left;
  padding: 5px 0;
  font-size: 20px;
  &:hover {
    font-weight: bold;
    background: #fff;
  }
`;

const Layout = () => {
  const navigate = useNavigate();

  const menuArr = [
    { name: '홈', link: '/' },
    { name: '타입', link: '/BasicType' },
    { name: '함수', link: '/func' },
    { name: '인터페이스', link: '/interface' },
    { name: 'State', link: '/state' },
    { name: 'Test', link: '/test' },
  ];

  return (
    <Wrap>
      <SlideMenuWrap>
        {menuArr.map((i) => {
          return (
            <MenuButton onClick={() => navigate(i.link)}>{i.name}</MenuButton>
          );
        })}
      </SlideMenuWrap>
      <Main>
        <Outlet />
      </Main>
    </Wrap>
  );
};

export default Layout;
