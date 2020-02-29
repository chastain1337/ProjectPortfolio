class ProjectDetailInfo {
    constructor(header,body) {
      this.detailHeader = header,
      this.detailBody = body
    }
  }

const projects = [
    {
        name: "Mock Intranet",
        language: "JavaScript (MERN stack)",
        projectDetails: [
        new ProjectDetailInfo("Function","Some function of this project"),
        new ProjectDetailInfo("Challenges","Some challenges of this project"),
        new ProjectDetailInfo("Solutions","Some solutions of this project")
        ]
    }
]

for (project of projects) {
    for (detail of project.projectDetails) {
        console.log(detail.detailHeader)
    }
}