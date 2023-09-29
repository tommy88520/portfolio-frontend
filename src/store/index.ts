import { create } from 'zustand';
import { userRequest } from '~/utils/axios';
import { devtools } from 'zustand/middleware';
import { iMenu } from './state/navigate';
import { iWorkPage } from './state/workPage';
import { iSkillsPage, iWorks, irootUrl } from './state/homePage';

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
          set(() => ({ skillsState: res.data }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })),
);

const workPageStore = create<iWorkPage>()(
  devtools((set) => ({
    workPageContent: {
      title: '',
      workDetail: [
        {
          title: '',
          content: '',
          workDetailImages: [{ image: '' }],
        },
      ],
    },
    getWorkPageContent: async (e) => {
      await userRequest
        .post('portfolio/get-work-page', e)
        .then((res) => {
          set(() => ({ workPageContent: res.data }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })),
);

const rootUrlStore = create<irootUrl>()(
  devtools((set) => ({
    rootUrlState: true,
    toggleRootUrl: (query) => {
      set(() => ({ rootUrlState: query }));
    },
  })),
);

export { menuStore, skillsStore, worksStore, rootUrlStore, workPageStore };
