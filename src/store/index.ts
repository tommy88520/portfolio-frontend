import { create } from 'zustand';
import { userRequest } from '~/utils/axios';
import { devtools, persist } from 'zustand/middleware';
import { iMenu } from './state/navigate';
import { iSkillsPage } from './state/homePage';
// const menuStore = create<iMenu[]>()(
//   devtools(
//     persist((set) => ({
//       menu: '',
//     })),
//   ),
// );

const menuStore = create<iMenu>()(
  devtools((set) => ({
    menuState: [
      {
        navigation: '',
        image: '',
      },
    ],
    getMenu: async () => {
      await userRequest
        .get('portfolio/get-menu')
        .then((res) => {
          // console.log(res);
          set(() => ({ menuState: res.data }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })),
);

const skillsStore = create<iSkillsPage>()(
  devtools((set) => ({
    skillsState: [
      {
        skill: '',
        image: '',
      },
    ],
    getSkills: async () => {
      await userRequest
        .get('portfolio/get-skills')
        .then((res) => {
          console.log(res.data);
          set(() => ({ skillsState: res.data }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })),
);

export { menuStore, skillsStore };
