import { create } from 'zustand';
import { userRequest } from '~/utils/axios';
import { devtools } from 'zustand/middleware';
import { iMenu } from './state/navigate';
import { iSkillsPage, iWorks } from './state/homePage';
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

const worksStore = create<iWorks>()(
  devtools((set) => ({
    worksContent: [
      {
        title: '',
        content: '',
        tags: [''],
        lang: '',
        orderNumber: 0,
        workImage: '',
      },
    ],
    getWorks: async (lang) => {
      await userRequest
        .post('portfolio/get-work', { lang: lang })
        .then((res) => {
          console.log(res);
          set(() => ({ worksContent: res.data }));
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

export { menuStore, skillsStore, worksStore };
