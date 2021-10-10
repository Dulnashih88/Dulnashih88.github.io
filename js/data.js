var app = new Vue({
  el: '#app',
  data() {
    return {
      welcome: {
        message1: 'Welcome To My Portfolio Website',
        message2: 'Hello, Im Abdulah Nashih Ulwan',
        message3: 'Freelancer Photography And Videography',
        message4: 'Living in Depok',
      },
      about: {
        desc1 : 'I am a flexible and experienced insurance administrator with excellent time management skills. I am a good communicator with proven inter personal skills and am used to working in a team whilst also being capable of using own initiative. I am skilled In dealing with problems in a resourceful manner and negotiating to achieve beneficial agreement. I am always enthusiastic to learn and undertake new challenges.',
        desc2 : 'I am an experienced joiner with well developed skills and experience in groundwork, concrete finishing and steel fixing and have worked in the construction industry since 1982. I am also a skilled labourer who has supported many different trades over the years. I have a full clean UK driving licence with entitlement of up to 7.5 tonne. I am keen to return to work after a period of training and personal development which has broadened my skills and experiences.',
        image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/dul.jpeg',
        linked: 'https://www.linkedin.com/in/abdulah-nashih-ulwan-969024196',
        youtube: 'https://www.youtube.com/channel/UC7BEgsBYFOSxCPpq-xzDQKA/videos'
      },
      youtube : [
        {
          id: 1,
          title: 'Bawang Dan Merah Bawang Putih Drama',
          desc: 'Bawang Merah Dan bawang putih are Indonesian Malay tales originating from Riau. This story tells of two sisters who have different and contradictory traits, and an unfair and favoritism stepmother. Bawang Merah Dan bawang putih have different character traits and personalities. Garlic has a diligent, kind, honest, and humble nature. Meanwhile, Bawang Merah has a lazy, arrogant, jealous nature.',
          link: 'https://www.youtube.com/watch?v=SW3HYLQXRSg',
          img: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/ytb-1.jpg'
        },
        {
          id: 2,
          title: 'Engagement of Celiana & Feri',
          desc: 'Marriage is a ceremony of binding marriage vows which is celebrated or carried out by two people with the intention of formalizing the marriage bond according to religious norms, legal norms, and social norms. Wedding ceremonies have many varieties and variations according to ethnic, religious, cultural, and social class traditions. The use of certain customs or rules is sometimes related to certain religious rules or laws.',
          link: 'https://www.youtube.com/watch?v=4og0Ireoe3g',
          img: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/ytb-2.jpg'
        }
      ],
      social : [
        {
          id: 1,
          link: 'https://www.instagram.com/dulnashihulwan/?hl=en',
          icon: 'fa-instagram ig-color',
          name: 'Instagram',
          border: 'border-bottom'
        },
        {
          id: 2,
          link: 'https://www.linkedin.com/in/abdulah-nashih-ulwan-969024196',
          icon: 'fa-linkedin ldn-color',
          name: 'Linkedin',
          border: 'border-bottom'
        },
        {
          id: 3,
          link: 'https://www.youtube.com/channel/UC7BEgsBYFOSxCPpq-xzDQKA/videos',
          icon: 'fa-youtube ytb-color',
          name: 'Youtube',
          border: ''
        }
      ],
      galeri1 : [
        {
          id: 1,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/tara-1.jpg',
          description: 'Tara Budiman'
        },
        {
          id: 2,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/tara-2.jpg',
          description: 'Tara Budiman'
        },
        {
          id: 3,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/tara-3.jpg',
          description: 'Tara Budiman'
        },
        {
          id: 4,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/tara-4.jpg',
          description: 'Tara Budiman'
        },
      ],
      galeri2: [
        {
          id: 1,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/model-1.jpg',
          description: 'Working',
          duration: '1000'
        },
        {
          id: 2,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/model-2.jpg',
          description: 'Professsionall',
          duration: '2000'
        }
      ],
      galeri3: [
        {
          id: 1,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/pa-1.JPG',
          description: 'SAMARAGAM - PAMUNGKAS (1)'
        },
        {
          id: 2,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/pa-2.JPG',
          description: 'SAMARAGAM - PAMUNGKAS (2)'
        },
        {
          id: 3,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/pa-3.JPG',
          description: 'SAMARAGAM - PAMUNGKAS (3)'
        },
      ],
      tools: [
        {
          id : 1,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/pr.png',
          class: 'bd-highlight pr-4'
        },
        {
          id : 2,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/ae.png',
          class: 'bd-highlight pr-4'
        },
        {
          id : 3,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/ps.png',
          class: 'bd-highlight pr-4'
        },
        {
          id : 4,
          image: 'https://raw.githubusercontent.com/ihmwhydn/testing-web-ulwan/master/assets/lr.png',
          class: 'bd-highlight'
        }
      ]
    }
  }
})