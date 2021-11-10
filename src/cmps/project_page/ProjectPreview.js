export const ProjectPreview = ({ project }) => {
  <tr className="projects-row">
    <td>{project.projectName}</td>
    <td>{project.projectStatus}</td>

    <td>
      {project.startDate}-{project.endDate}
    </td>
    <td></td>
    <td></td>
    <td>
      {" "}
      <img
        style={{ width: "10px" }}
        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-trash-mintab-for-ios-becris-lineal-becris.png"
      />
    </td>
  </tr>;
};
