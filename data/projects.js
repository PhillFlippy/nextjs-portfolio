const projects = [
    {
      title: "XDBAI",
      link: "no",
      imgUrl:
        "https://res.cloudinary.com/phillip-eade/image/upload/v1598334379/xdbai_rrgkgm.png",
      description:
        "Stands for Cross Database AI. A prototype chatbot system that I built with the University of Newcastle. The user talks to a chatbot and the chatbot tries to find the information the user is after. Because this is a prototype with a private organisation I cannot provide a live demo.",
      technology:
        "The front end is built using ReactJS and Redux. The back end uses .Net. The chat bot is built using two AI systems, Dialog Flow and Watson AI. We run both systems at the same time and display the results with the highest probability scores. Data that is routed through an API to be retrieved is done so through DialogFlow but anything that is grabbed in a database is done so using Watson. The bots are trained through an upvote and downvote system where a user votes for the correct answer. There is also an auto complete feature for commonly asked questions that pops up while the user is typing.",
    },
    {
      title: "Know The Law",
      link: "https://knowthelaw.newcastle.edu.au/",
      imgUrl:
        "https://res.cloudinary.com/phillip-eade/image/upload/v1598334723/screencapture-knowthelaw-newcastle-edu-au-2020-08-25-15_51_05_d5ghyr.png",
      description:
        "This chatbot aims to provide international students with a single platform through which they are able to easily reference Australian legal information.",
      technology:
        "The front end was build using vanilla javascript with es6. The front end also used the Web Speech API to allow users to communicate to the bot via their voice. The back end was built using .Net, I used RestSharp to connect the back end to Googles DialogFlow to get and post answers through a REST API. I created the bot in DialogFlow by adding in the answers, provided to me from the Faculty of Law, as intents and reinforcing the correct questions.",
    },
    {
      title: "News React Tailwind",
      link: "https://vibrant-allen-389b09.netlify.app/",
      imgUrl:
        "https://res.cloudinary.com/phillip-eade/image/upload/v1593316884/Screen_Shot_2020-06-28_at_2.00.53_pm_iewk1g.png",
      description:
        "A website that shows a list of news articles, created to learn TailwindCSS and to work out how to integrate Tailwind with React.",
      technology:
        "I used Create React App to create a React 16 application using only functional components. The React app uses a JSON object to fetch the articles and display them in a list. TailwindCSS was used for the css framework for utility base classes. I also created a ci/cd pipeline integrated with Github using Netifly.",
    },
    {
      title: "Github finder",
      link: "https://goofy-poincare-4c9f1f.netlify.app/",
      imgUrl:
        "https://res.cloudinary.com/phillip-eade/image/upload/v1593316888/Screen_Shot_2020-06-28_at_2.00.24_pm_dgkpeh.png",
      description:
        "A search engine for finding users on github. Created for the purpose of learning React Hooks and the React Context API.",
      technology:
        "I used es6 and React 16 which included using React Hooks, React Context, React Router and Proptypes. I connected to the github REST API using Axios for the requests and Node environment variables to hide the API keys. I also set up a CI/CD pipeline with Github and Netifly for deployments every time Master is pushed.",
    },
    {
      title: "Giphy React",
      link: "https://giphyreact.herokuapp.com/",
      imgUrl:
        "http://res.cloudinary.com/phillip-eade/image/upload/v1495201518/screencapture-localhost-3000-1495201449535_pskamj.png",
      description:
        "Giphy is a gif repository website that hosts thousands of moving images on their website. For this project I connected to the Giphy API and allow users to search for an image using a keyword of their choice or they can click on the trending tab and see all of the hottest gifs on the website.",
      technology:
        "This project was created using ReactJS as the framework. Bootstrap was used for the search bar and navigation bar and CSS flexbox was used to display the images. I used javascript promises to asynchonously get the JSON data from the Giphy API and than I used that data to show it on the website. For navigation I used React-Router and to install bootstrap I used the React-Bootstrap npm package.",
    },
    {
      title: "Twitch API",
      link: "https://codepen.io/PhillFlippy/full/VbBVMR/",
      imgUrl:
        "http://res.cloudinary.com/phillip-eade/image/upload/v1495198200/screencapture-codepen-io-PhillFlippy-full-VbBVMR-1495198099066_einixp.png",
      description:
        "This project was a part of my submission for the FreeCodeCamp front-end certification. I was given a set of specifications and I had complete the website using my own coding and design abilities. The purpose of the website is to get the JSON file of a set of Twitch Streamers and show if they are online. I listed the streamers in a Bootstrap group list and colour coded them based on whether or not they are currentlty online and I display what game they are streaming, all this information is provided by the Twitch API.",
      technology:
        "The JSON document was grabbed and processed by JQuery and I used HTML and Bootstrap to display the data to the user. Some JQuery animation was used to display the about section.",
    },
    {
      title: "Javascript Calculator",
      link: "https://codepen.io/PhillFlippy/full/zNqzeM/",
      imgUrl:
        "http://res.cloudinary.com/phillip-eade/image/upload/v1495196528/340879.zNqzeM.47334b8b-3ea7-4f66-b422-17a548721642_rsrtxr.png",
      description:
        "This is a calculator that I designed and built. It is a simple calculator where the user can click the buttons and have their calcuations done.",
      technology:
        "Javascript for all of the calculations and handling the input. CSS to make the input fields look like a calculator.",
    },
    {
      title: "React Timer",
      link: "http://floating-harbor-41041.herokuapp.com/#/?_k=8h0xuk",
      imgUrl:
        "http://res.cloudinary.com/phillip-eade/image/upload/v1495197232/screencapture-floating-harbor-41041-herokuapp-1495197003133_aoa3fa.png",
      description:
        "This is a timer app made in React. You can start the timer and it will count up, pause it and reset the clock. Or you can click to the other tab and start a count down which will start at a user specified number and not stop until it has counted down.",
      technology:
        "ReactJs was used as the framework with Bootstrap used for the styling and css used for making the round clock. I used Javascript time library to calculate the time the clock is at.",
    },
  ];
  export default projects;