import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { pageChange } from '@/redux/Slices/page';

const Item = styled.a<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  color: ${(props: any) => (props.isSelected ? '#FEE500' : '#6B6B6B')};
  text-underline-offset: 5px;
  scroll-behavior: smooth;
  text-align: center;
  justify-content: center;
`;

function NavBar() {
  const curPage = useSelector((state: any) => state.page.page);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const MenuData = (e.target as HTMLAnchorElement).hash;
    const IdMatchedPage = document.querySelector(MenuData);
    dispatch(pageChange({ curPage: MenuData.substring(1) }));
    IdMatchedPage?.scrollIntoView({ behavior: 'smooth' });
  };
  const Menu = [
    {
      id: 0,
      name: 'HOME',
    },
    {
      id: 1,
      name: 'FEATURE',
    },
    {
      id: 2,
      name: 'ROADMAP',
    },
    {
      id: 3,
      name: 'TEAM',
    },
  ];

  return (
    <div className="bg-black fixed backdrop-blur w-screen h-[90px] z-50">
      <div className="flex text-white place-content-between h-full">
        <img
          className="cursor-pointer mu-auto w-auto max-w-[310px]"
          src=""
          role="presentation"
          alt="loading..."
          onClick={() => navigate('/')}
        />
        <div>
          <div className="flex h-full text-center align-center">
            {Menu.map((data, idx) => (
              <div className="my-auto font-['Tenada'] h-full">
                <Item
                  key={data.id}
                  isselected={curPage === data.name}
                  href={`#${data.name}`}
                  onClick={() => OnClickMenu}
                >
                  <p className="my-auto text-center text-[22px] font-extrabold text-center pt-[30px] mr-[30px]">
                    {data.name}
                  </p>
                </Item>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
