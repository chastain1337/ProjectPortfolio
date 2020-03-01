class ProjectDetailInfo {
  constructor(header, body) {
    this.detailHeader = header;
    this.detailBody = body;
  }
}

const projects = [
  {
    name: "Mock Intranet",
    languages: "JavaScript",
    column1Data: {
      imageUrl: process.env.PUBLIC_URL + "/intranet_preview.gif",
      sourceUrl: "https://github.com/chastain1337/intranet_full"
    },
    frameworks: "Mongoose, Express, React, Node",
    projectDetails: [
      new ProjectDetailInfo(
        "Features",
        "A full-scale order management system with the ability to create products and vendors, auto-calculate orders based on your parameters, apply invoices and track outstanding lines."
      ),
      new ProjectDetailInfo(
        "Challenges",
        "As my first project, there was a limited knowledge of both front and back-end development early on; the scale of the project felt overwhelming at times."
      ),
      new ProjectDetailInfo(
        "Solutions",
        "Good convention, a willingness to refactor and rewrite code based on new knowledge, and thorough planning including writing psuedo-code and wireframing."
      )
    ]
  },
  {
    name: "eBay Product Details Getter",
    languages: "Python",
    frameworks: "PyQt5, Requests, ElementTree",
    column1Data: {
      imageUrl: "",
      sourceUrl: "https://github.com/chastain1337/eBayProductDetailsGetter",
      downloadExeUrl:
        process.env.PUBLIC_URL + "/eBay_Product_Details_Getter.zip"
    },
    projectDetails: [
      new ProjectDetailInfo(
        "Inspiration",
        "The disconinuation of TurboLister, its limited functionality beyond a few-thousand listings, and a difficult-to-utilize SOAP API."
      ),
      new ProjectDetailInfo(
        "Challenges",
        "Learning PyQt5, ET, and threading from scratch; the API's page and date limitations."
      ),
      new ProjectDetailInfo(
        "Solutions",
        "Thoroughly reading documentation, testing code in small bites, and planning before writing."
      )
    ]
  },
  {
    name: "Decision Maker",
    languages: "JavaScript",
    frameworks: "React",
    column1Data: {
      imageUrl: "",
      sourceUrl: "https://github.com/chastain1337/decision-maker",
      liveDemoUrl: "/Projects/decision-maker"
    },
    projectDetails: [
      new ProjectDetailInfo(
        "Purpose",
        "Exposing myself to Bootstrap and React through a small, single-page project."
      ),
      new ProjectDetailInfo(
        "Challenges",
        "Utilizing state and mobile-first design."
      ),
      new ProjectDetailInfo("Solutions", "Google.")
    ]
  }
];

export default projects;
